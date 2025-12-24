# Deployment Guide - Git to Hostinger via FTP

This guide explains how to set up automated deployment from GitHub to Hostinger using FTP.

## Prerequisites

1. A GitHub repository with your code
2. A Hostinger FTP account with credentials
3. GitHub Actions enabled for your repository

## Setup Instructions

### Step 1: Get Your FTP Credentials from Hostinger

1. Log in to your Hostinger account
2. Go to **hPanel** (Hostinger Panel)
3. Navigate to **FTP Accounts** or **Files** section
4. Note down:
   - **FTP Server/Host**: Usually `ftp.yourdomain.com` or an IP address
   - **FTP Username**: Your FTP username
   - **FTP Password**: Your FTP password
   - **FTP Port**: Usually `21` (default) or `990` for FTPS

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Navigate to **Secrets and variables** → **Actions**
4. Click **New repository secret** and add the following secrets:

   - **FTP_SERVER**: Your FTP server address with port 21 (e.g., `ftp.yourdomain.com:21` or just `ftp.yourdomain.com`)
   - **FTP_USERNAME**: Your FTP username
   - **FTP_PASSWORD**: Your FTP password
   
   **Note**: Port 21 is the standard FTP port. You can include it in the server address (`ftp.yourdomain.com:21`) or omit it (port 21 is the default).

### Step 3: Configure the Workflow (Optional)

Edit `.github/workflows/deploy.yml` if needed:

- **Branch name**: Change `main` to `master` if that's your default branch
- **Server directory**: Update `server-dir: /public_html/` to match your Hostinger directory structure
  - Common options:
    - `/public_html/` - Main website root
    - `/public_html/subfolder/` - Subdirectory deployment
    - `/www/` - Alternative root directory

### Step 4: Deploy

The workflow will automatically trigger when you:

1. **Push to main branch**: Every push to the `main` branch will trigger deployment
2. **Manual trigger**: Go to **Actions** tab → **Deploy to Hostinger via FTP** → **Run workflow**

## How It Works

1. The workflow checks out your code
2. Installs Node.js dependencies
3. Builds your Next.js project (creates static files in `out/` directory)
4. Deploys the `out/` directory contents to your Hostinger server via FTP

## Troubleshooting

### Connection Issues

- Verify FTP credentials are correct
- Check if your Hostinger server requires passive mode (add `passive: true` to workflow)
- Ensure FTP port is correct (21 for FTP, 990 for FTPS/SSL)
- Some Hostinger accounts use FTPS (FTP over SSL) - you may need to use port 990

### Deployment Issues

- Check GitHub Actions logs for detailed error messages
- Verify the `server-dir` path is correct in the workflow file
- Ensure your FTP account has write permissions to the target directory

### Using FTPS (Secure FTP)

If Hostinger requires FTPS, you can modify the workflow to use a different action or add SSL settings:

```yaml
- name: Deploy to Hostinger via FTP
  uses: SamKirkland/FTP-Deploy-Action@v4.3.5
  with:
    server: ${{ secrets.FTP_SERVER }}
    username: ${{ secrets.FTP_USERNAME }}
    password: ${{ secrets.FTP_PASSWORD }}
    protocol: ftps  # Add this for FTPS
    local-dir: ./out/
    server-dir: /public_html/
```

## Notes

- The workflow excludes unnecessary files (node_modules, cache, etc.) to speed up deployment
- Only the built static files from the `out/` directory are deployed
- Make sure your `.gitignore` excludes sensitive files like `.env.local`

