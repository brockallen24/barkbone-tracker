# ✅ Heroku Setup Verification Checklist

Use this checklist to verify your Heroku deployment is configured correctly.

---

## 🔍 Step 1: Verify App Exists

**In Heroku Dashboard:**
1. Go to: https://dashboard.heroku.com/apps
2. You should see your app listed (e.g., `barkbone-inventory-tracker`)
3. Click on the app name

---

## 🔧 Step 2: Check Environment Variables (Config Vars)

**Critical Check:**
1. In your app, click **"Settings"** tab
2. Click **"Reveal Config Vars"**
3. Verify these THREE variables are set:

| Key | Expected Value | Your Value |
|-----|----------------|------------|
| `AIRTABLE_BASE_ID` | `appitB9dLQE7CzqpR` | ❓ |
| `AIRTABLE_API_KEY` | Your full API key (82+ chars) | ❓ |
| `AIRTABLE_TABLE_ID` | `tblR5cWG21aBDfi49` | ❓ |

**❌ If any are missing:** Click "Add" and enter them
**⚠️ If API key is short:** Replace with your complete token

---

## 📦 Step 3: Verify Deployment

**Check Deploy Tab:**
1. Click **"Deploy"** tab
2. Check "Deployment method":
   - ✅ Should be **"GitHub"** (recommended)
   - OR "Heroku Git" (manual deploys)

**If using GitHub:**
3. Verify repository: `brockallen24/barkbone-tracker`
4. Verify branch: `claude/fix-spinner-loading-issue-NVMsw`
5. Check recent deployments - should see successful builds

**If deployment failed:**
- Scroll down to "Manual deploy"
- Select branch: `claude/fix-spinner-loading-issue-NVMsw`
- Click "Deploy Branch"

---

## 🏃 Step 4: Check Dyno Status

**In Resources Tab:**
1. Click **"Resources"** tab
2. Under "Free Dynos" you should see:
   ```
   web node server.js
   ```
3. Toggle should be **ON (purple/enabled)**
4. If OFF, click the pencil icon and turn it ON

---

## 🌐 Step 5: Test Your Live App

**Get your app URL:**
- Look for "Open app" button (top right)
- OR your URL is: `https://your-app-name.herokuapp.com`

**Test these endpoints:**

### 5.1 Test Home Page
Visit: `https://your-app-name.herokuapp.com`
- ✅ Should load the inventory tracker interface
- ✅ Check browser console (F12) - should NOT show config.js errors

### 5.2 Test Config API
Visit: `https://your-app-name.herokuapp.com/api/config`
- ✅ Should show JSON with:
  ```json
  {
    "baseId": "appitB9dLQE7CzqpR",
    "apiKey": "your_api_key_here",
    "tableId": "tblR5cWG21aBDfi49"
  }
  ```
- ❌ If it shows `null` for apiKey - your config vars aren't set!

### 5.3 Test Health Check
Visit: `https://your-app-name.herokuapp.com/health`
- ✅ Should show:
  ```json
  {
    "status": "ok",
    "timestamp": "2026-01-06T..."
  }
  ```

---

## 🐛 Step 6: Check Logs (If Issues)

**View Real-Time Logs:**
1. Click **"More"** dropdown (top right)
2. Select **"View logs"**
3. Look for errors in red

**Common issues in logs:**

### "Cannot find module 'express'"
**Fix:** Ensure `package.json` is in repository and deployed

### "Error: Missing environment variable"
**Fix:** Set config vars in Step 2

### "Application error" / "H10 error"
**Fix:** Check that web dyno is running (Step 4)

### "Port already in use"
**Not an issue** - Heroku assigns ports dynamically

---

## 📱 Step 7: Test Full Functionality

**On your live app:**

1. **Spinner Test:**
   - Open the app
   - Spinner should show briefly
   - Then data should load (or error message if API issue)
   - ❌ If spinner never stops: Check config vars

2. **Console Test:**
   - Open DevTools (F12) → Console
   - Should see:
     ```
     Using local config.js  ← Should say "Loading config from server"
     fetchProducts - Response status: 200
     ```
   - If you see "Using local config.js" - something is wrong!

3. **Data Test:**
   - Try adding a product
   - Check if it saves to Airtable
   - Refresh page - product should still be there

---

## 🔍 Quick Diagnostic

Run these checks in order:

### Check 1: App Loads?
- ✅ YES → Go to Check 2
- ❌ NO → Check Deploy tab, verify deployment succeeded

### Check 2: Shows Error or Spinner?
- **Error message** → Check config vars (Step 2)
- **Infinite spinner** → Check browser console for errors
- **Data loads** → ✅ Everything works!

### Check 3: Config API Works?
Visit `/api/config` endpoint:
- **Shows your API key** → ✅ Config vars set correctly
- **Shows `null`** → ❌ Config vars not set
- **404 error** → ❌ server.js not deployed

---

## 🚨 Common Issues & Fixes

### Issue 1: "We're sorry, but something went wrong"
**Causes:**
- Dynos not running
- Build failed
- Missing environment variables

**Fix:**
1. Check Resources tab - ensure dyno is ON
2. Check logs for errors
3. Redeploy from GitHub

### Issue 2: Spinner runs forever
**Causes:**
- AIRTABLE_API_KEY not set or incomplete
- Wrong API key
- Airtable API down

**Fix:**
1. Check config vars - API key should be 82+ characters
2. Test API key locally: `node test-api.js`
3. Check Airtable status page

### Issue 3: "Cannot GET /"
**Causes:**
- index.html not deployed
- server.js routing issue

**Fix:**
1. Verify index.html is in repository
2. Redeploy
3. Check logs

---

## ✅ Final Verification

**Your setup is correct if:**
- ✅ App URL loads the interface
- ✅ `/api/config` shows your credentials
- ✅ `/health` returns `{"status":"ok"}`
- ✅ Browser console shows "Loading config from server"
- ✅ Data loads from Airtable
- ✅ No errors in Heroku logs

---

## 📋 Report Issues

If something isn't working, note:
1. What URL did you visit?
2. What did you see? (screenshot helpful)
3. What shows in browser console (F12)?
4. What shows in Heroku logs?
5. Are all 3 config vars set?

---

## 🎯 Next Steps

Once verified:
1. ✅ App is live and working
2. Set up automatic deploys (optional):
   - Deploy tab → Enable automatic deploys from GitHub
   - Every push to your branch auto-deploys
3. Consider custom domain (Heroku add-on)
4. Monitor usage in Heroku dashboard

---

**Your app should be live at:** `https://your-app-name.herokuapp.com` 🚀
