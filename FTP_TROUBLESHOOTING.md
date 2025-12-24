# FTP Deployment Troubleshooting Guide

## Error: "getaddrinfo ENOTFOUND" or "server doesn't seem to exist"

This error means GitHub Actions cannot resolve your FTP server hostname. Here's how to fix it:

### Step 1: Verify Your FTP Server Address

Your `FTP_SERVER` secret should contain **ONLY** the hostname or IP address, nothing else.

**✅ CORRECT formats:**
- `ftp.yourdomain.com`
- `files.000webhostapp.com`
- `192.168.1.1` (if using IP address)
- `yourdomain.com`

**❌ INCORRECT formats (will cause errors):**
- `ftp://ftp.yourdomain.com` (no protocol prefix)
- `ftp.yourdomain.com:21` (no port here - it's set separately in workflow)
- ` ftp.yourdomain.com ` (no leading/trailing spaces)
- `ftp.yourdomain.com/` (no trailing slash)

### Step 2: Find Your Correct FTP Server Address

**For Hostinger:**

1. Log into your **Hostinger hPanel**
2. Go to **Files** → **File Manager** or **FTP Accounts**
3. Look for FTP connection details:
   - You might see: `ftp.yourdomain.com` or `files.hostinger.com` or an IP address
   - Your Hostinger FTP host is usually one of these formats:
     - `ftp.yourdomain.com`
     - `files.000webhostapp.com` (if on free hosting)
     - An IP address like `185.230.63.107`

4. **Alternative:** Check your FTP client settings (FileZilla, etc.) to see what server address you use there

### Step 3: Update GitHub Secret

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click on `FTP_SERVER` secret
4. Click **Update**
5. Enter **ONLY** the hostname (e.g., `ftp.yourdomain.com`)
   - No `ftp://` prefix
   - No port number
   - No trailing slash
   - No spaces
6. Click **Update secret**

### Step 4: Common Hostinger FTP Server Formats

Depending on your Hostinger plan, your FTP server might be:
- `ftp.yourdomain.com` (if you have a custom domain)
- `files.000webhostapp.com` (free hosting)
- `ftp.hostinger.com` (some plans)
- An IP address provided by Hostinger

**To find yours:** Check your Hostinger hPanel → FTP Accounts section

### Step 5: Test the Connection

After updating the secret, trigger the workflow again:
1. Go to **Actions** tab
2. Click **Deploy to Hostinger via FTP**
3. Click **Run workflow** → **Run workflow**

### Still Having Issues?

1. **Try using IP address instead of domain:**
   - Some DNS issues can prevent domain resolution
   - Get your FTP server IP from Hostinger support or hPanel

2. **Check if you need FTPS instead of FTP:**
   - Update the workflow: change `protocol: ftp` to `protocol: ftps`
   - Change `port: 21` to `port: 990` (FTPS port)

3. **Verify credentials are correct:**
   - Double-check `FTP_USERNAME` and `FTP_PASSWORD` secrets
   - Make sure there are no extra spaces

4. **Check Hostinger firewall:**
   - Some hosting providers block automated FTP connections
   - Contact Hostinger support if needed

