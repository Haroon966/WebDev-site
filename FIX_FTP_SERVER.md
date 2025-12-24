# 🔧 How to Fix FTP_SERVER Secret - Step by Step

## The Error
```
Error: getaddrinfo ENOTFOUND ***
```
This means GitHub Actions **cannot find/resolve** your FTP server hostname. The `FTP_SERVER` secret has an incorrect value.

## ✅ Step-by-Step Fix

### Step 1: Find Your Correct FTP Server Address

**Option A: From Hostinger hPanel**
1. Log in to **Hostinger hPanel**
2. Go to **Files** → **File Manager**
3. Or go to **FTP Accounts**
4. Look for **FTP Host** or **FTP Server** field
5. It will show something like:
   - `ftp.yourdomain.com`
   - `files.000webhostapp.com`
   - `ftp.hostinger.com`
   - An IP address (e.g., `185.230.63.107`)

**Option B: From Your FTP Client (FileZilla, etc.)**
1. Open your FTP client (FileZilla, WinSCP, etc.)
2. Look at your saved connection settings
3. Copy the **Host** or **Server** field
4. This is your FTP server address

### Step 2: Verify the Format (CRITICAL!)

Your FTP server address should be **EXACTLY** one of these formats:

✅ **CORRECT:**
```
ftp.yourdomain.com
```
```
files.000webhostapp.com
```
```
185.230.63.107
```

❌ **WRONG (will cause the error):**
```
ftp://ftp.yourdomain.com    ← NO "ftp://" prefix
ftp.yourdomain.com:21       ← NO port number here
 ftp.yourdomain.com         ← NO spaces
ftp.yourdomain.com/         ← NO trailing slash
```

### Step 3: Update the GitHub Secret

1. Go to: https://github.com/Haroon966/WebDev-site
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Find and click on **FTP_SERVER**
5. Click **Update** button
6. **Delete everything** in the value field
7. Type **ONLY** your FTP server hostname:
   - Example: `ftp.yourdomain.com`
   - No spaces before or after
   - No `ftp://` prefix
   - No port number
   - No trailing slash
8. Click **Update secret**

### Step 4: Double-Check All Secrets

While you're there, verify your other secrets are correct:

- **FTP_USERNAME**: Should be just your username (no spaces)
- **FTP_PASSWORD**: Should be your password (check for extra spaces)

### Step 5: Test Again

1. Go to **Actions** tab
2. Click **Deploy to Hostinger via FTP**
3. Click **Run workflow** → **Run workflow**

## 🎯 Common Hostinger FTP Server Formats

Depending on your Hostinger plan, try these formats:

| Your Setup | FTP Server Should Be |
|------------|---------------------|
| Custom domain | `ftp.yourdomain.com` |
| Free hosting | `files.000webhostapp.com` |
| Shared hosting | `ftp.hostinger.com` or IP address |
| Business/Pro | `ftp.yourdomain.com` or IP |

**Still not working?** Check your Hostinger hPanel → FTP Accounts section for the exact server address they provide.

## 🔍 How to Test Your FTP Server Address

Before updating GitHub, test if the hostname resolves:

**On Windows (PowerShell):**
```powershell
Test-NetConnection ftp.yourdomain.com -Port 21
```

**Or try:**
```powershell
ping ftp.yourdomain.com
```

If ping fails, the hostname is wrong or doesn't exist.

## ⚠️ Still Getting Errors?

1. **Try using IP address instead of domain:**
   - Get your FTP server IP from Hostinger support or hPanel
   - Use the IP directly (e.g., `185.230.63.107`)

2. **Check if Hostinger requires FTPS:**
   - Contact Hostinger support
   - If yes, I can update the workflow to use FTPS (port 990)

3. **Verify your domain is active:**
   - Make sure your domain is properly configured in Hostinger
   - Check if FTP is enabled for your account

