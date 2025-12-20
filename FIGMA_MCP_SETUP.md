# Figma MCP Setup Guide

This guide will help you set up the Figma Model Context Protocol (MCP) server in Cursor.

## Your Figma Design
- **Design URL**: https://www.figma.com/design/u4sq1BsYxjYoKE4Muti4TM/Untitled?node-id=1-3&t=zZ9JHGPRr5jt0S9B-1

## Setup Options

### Option 1: Desktop MCP Server (Recommended for local development)

**Prerequisites:**
- Install the latest version of the Figma desktop app
- Open your Figma design file in the desktop app

**Steps:**
1. Open the Figma design file in the Figma desktop app
2. Switch to **Dev Mode** by clicking the toggle in the toolbar
3. In the right sidebar, enable the **MCP server**
4. Copy the server URL (typically `http://127.0.0.1:3845/mcp`)
5. In Cursor:
   - Open Cursor Settings (Cmd/Ctrl + ,)
   - Navigate to the **MCP** tab
   - Click "Add Custom MCP"
   - Add the following configuration:

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

### Option 2: Remote MCP Server (For web-based access)

**Steps:**
1. Open your Figma design file in your web browser
2. Switch to **Dev Mode** (with no objects selected)
3. In the right inspect panel, click **"Set up an MCP client"**
4. Note the remote MCP server URL: `https://mcp.figma.com/mcp`
5. In Cursor:
   - Open Cursor Settings (Cmd/Ctrl + ,)
   - Navigate to the **MCP** tab
   - Click "Add Custom MCP"
   - Add the following configuration:

```json
{
  "mcpServers": {
    "figma-remote": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

## Verification

After configuration:
1. Restart Cursor to apply the changes
2. The Figma MCP server should now be available
3. You can use MCP tools to:
   - Generate code from selected frames
   - Extract design context, including variables and components
   - Retrieve resources from Figma Make files

## Notes

- Ensure you have the necessary permissions for the Figma files you intend to use
- The desktop server requires the Figma desktop app to be running
- The remote server requires an active internet connection
- You can use both configurations simultaneously if needed

