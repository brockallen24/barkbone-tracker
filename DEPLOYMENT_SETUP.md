# 🚀 Deployment Setup Instructions

Your **local config.js is now configured** and ready to use!

Now you need to set up your deployment environments (GitHub Secrets & Heroku).

---

## ✅ What's Already Done

- ✅ `config.js` updated with your Airtable credentials
- ✅ Local development is ready to connect to Airtable
- ✅ You can now test the app locally by opening `index.html`

---

## 🔐 Part 1: Set Up GitHub Secrets (For CI/CD)

These secrets enable automatic deployment from GitHub to Heroku when you push to `main` branch.

### Step 1: Go to Repository Settings
1. Open: https://github.com/brockallen24/barkbone-tracker
2. Click **"Settings"** tab (top-right)
3. In left sidebar, click **"Secrets and variables"** → **"Actions"**

### Step 2: Add Repository Secrets

Click **"New repository secret"** for each of these:

#### Secret 1: AIRTABLE_API_KEY
- **Name:** `AIRTABLE_API_KEY`
- **Value:** `[USE YOUR AIRTABLE API TOKEN PROVIDED EARLIER]`
- Click "Add secret"

#### Secret 2: AIRTABLE_BASE_ID
- **Name:** `AIRTABLE_BASE_ID`
- **Value:** `[USE YOUR BASE ID PROVIDED EARLIER]`
- Click "Add secret"

#### Secret 3: AIRTABLE_TABLE_ID
- **Name:** `AIRTABLE_TABLE_ID`
- **Value:** `[USE YOUR TABLE ID PROVIDED EARLIER]`
- Click "Add secret"

#### Secret 4: HEROKU_API_KEY (If you have Heroku)
- **Name:** `HEROKU_API_KEY`
- **Value:** Your Heroku API key
- To get it: `heroku auth:token` or from https://dashboard.heroku.com/account
- Click "Add secret"

#### Secret 5: HEROKU_APP_NAME (If you have Heroku)
- **Name:** `HEROKU_APP_NAME`
- **Value:** Your Heroku app name (e.g., `barkbone-tracker-2024`)
- Click "Add secret"

---

## 🌐 Part 2: Set Up Heroku Environment Variables (Optional)

If you have a Heroku app deployed, set these environment variables.

### Option A: Using Heroku Dashboard (Easiest)
1. Go to: https://dashboard.heroku.com/apps
2. Click your app name
3. Click **"Settings"** tab
4. Scroll to **"Config Vars"**
5. Click **"Reveal Config Vars"**
6. Add these three variables:

| KEY | VALUE |
|-----|-------|
| `AIRTABLE_API_KEY` | `[YOUR_AIRTABLE_API_TOKEN]` |
| `AIRTABLE_BASE_ID` | `[YOUR_BASE_ID]` |
| `AIRTABLE_TABLE_ID` | `[YOUR_TABLE_ID]` |

7. Click "Add" after each one

### Option B: Using Heroku CLI
```bash
heroku config:set AIRTABLE_API_KEY=[YOUR_AIRTABLE_API_TOKEN] -a YOUR_APP_NAME
heroku config:set AIRTABLE_BASE_ID=[YOUR_BASE_ID] -a YOUR_APP_NAME
heroku config:set AIRTABLE_TABLE_ID=[YOUR_TABLE_ID] -a YOUR_APP_NAME
```

Replace `YOUR_APP_NAME` with your actual Heroku app name.

### After Setting Config Vars:
```bash
# Restart your Heroku app
heroku restart -a YOUR_APP_NAME

# Verify the variables were set
heroku config -a YOUR_APP_NAME
```

---

## 🧪 Part 3: Test Your Local Setup

### Test 1: Open the App Locally
1. Open `index.html` in your browser
2. Check the browser console (F12 → Console tab)
3. Look for any errors

### Test 2: Check Connection Status
- Look for the sync status indicator at the top of the app
- Should show: "Connected to Cloud" (green)
- If it shows "Connection Error" (red), check the console for details

### Test 3: Try Adding a Product
1. Click "Add New Product"
2. Fill in the form
3. Click "Add Product"
4. Go to your Airtable base and verify the product appears there

### Test 4: Verify Data Syncing
1. Add a product in the app
2. Open your Airtable base in another tab
3. Refresh Airtable - the product should appear
4. Edit the product in Airtable
5. Click "Refresh" in the app - changes should appear

---

## 🐛 Troubleshooting

### "Connection Error" or Red Sync Status

**Check 1: Verify API Token**
- Token should start with `pat` and be 70+ characters
- Make sure you copied the entire token

**Check 2: Check Browser Console**
Open browser console (F12) and look for errors like:
- `401 Unauthorized` = Invalid API token
- `404 Not Found` = Wrong Base ID or Table ID
- `CORS error` = Airtable API access issue (rare)

**Check 3: Verify Token Permissions**
Go to https://airtable.com/create/tokens and check your token has:
- ✅ `data.records:read` scope
- ✅ `data.records:write` scope
- ✅ Access to your base (check base ID matches)

**Check 4: Test API Directly**
Open terminal and run (replace with your actual credentials):
```bash
curl "https://api.airtable.com/v0/[YOUR_BASE_ID]/[YOUR_TABLE_ID]" \
  -H "Authorization: Bearer [YOUR_API_TOKEN]"
```

Should return JSON with your records. If not, check your credentials.

### "No products yet" Even Though Airtable Has Data

**Solution:** Click the "Refresh" button in the app

### Products Not Saving to Airtable

**Check:** Browser console for errors during save operation

---

## 📋 Quick Checklist

After completing all steps, verify:

- [ ] Local `config.js` has correct credentials
- [ ] App opens locally without console errors
- [ ] Sync status shows "Connected to Cloud" (green)
- [ ] Can add products and they appear in Airtable
- [ ] Can edit products in app and changes save
- [ ] GitHub Secrets are configured (if using CI/CD)
- [ ] Heroku Config Vars are set (if using Heroku)
- [ ] Heroku deployment works (if applicable)

---

## ✅ You're All Set!

Your Barkbone Tracker is now connected to Airtable and ready to use! 🎉

### What You Can Do Now:
- ✅ Use the app locally with cloud sync
- ✅ Access your data from Airtable interface
- ✅ Deploy to Heroku with automatic config
- ✅ Push to GitHub and auto-deploy via Actions

### Next Steps:
1. Test the local app thoroughly
2. Import any existing data to Airtable
3. Deploy to Heroku (if desired)
4. Share the Heroku URL with your team

---

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Look at browser console for specific errors
3. Verify all credentials are correct
4. Ask Claude for help with specific error messages

**Happy tracking! 📦**
