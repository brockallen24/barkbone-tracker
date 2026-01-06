# 🚀 Deploy to Heroku - Complete Guide

This guide shows you how to deploy your Inventory Tracker to Heroku so it uses:
- **GitHub** for code hosting
- **Airtable** for data storage
- **Heroku** for web hosting

---

## Prerequisites

1. **GitHub account** (you already have this)
2. **Heroku account** - Sign up at https://heroku.com (free tier available)
3. **Heroku CLI** - Download from https://devcenter.heroku.com/articles/heroku-cli

---

## Step 1: Install Heroku CLI

### On Mac:
```bash
brew install heroku/brew/heroku
```

### On Linux:
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### On Windows:
Download the installer from: https://devcenter.heroku.com/articles/heroku-cli

### Verify Installation:
```bash
heroku --version
```

---

## Step 2: Login to Heroku

```bash
heroku login
```

This will open your browser for authentication.

---

## Step 3: Create a Heroku App

```bash
cd /home/user/barkbone-tracker
heroku create barkbone-inventory-tracker
```

Or choose your own name:
```bash
heroku create your-app-name-here
```

This will:
- Create a Heroku app
- Add a git remote named "heroku"
- Give you a URL like: `https://barkbone-inventory-tracker.herokuapp.com`

---

## Step 4: Set Environment Variables

Set your Airtable credentials as Heroku config vars (these are kept secure and not in your code):

```bash
heroku config:set AIRTABLE_BASE_ID=appitB9dLQE7CzqpR
heroku config:set AIRTABLE_API_KEY=your_complete_airtable_api_key_here
heroku config:set AIRTABLE_TABLE_ID=tblR5cWG21aBDfi49
```

**Important:** Replace `your_complete_airtable_api_key_here` with your actual API key from Airtable.

**Or set them in the Heroku Dashboard:**
1. Go to: https://dashboard.heroku.com/apps
2. Click your app name
3. Click "Settings" tab
4. Click "Reveal Config Vars"
5. Add each variable:
   - Key: `AIRTABLE_BASE_ID`, Value: `appitB9dLQE7CzqpR`
   - Key: `AIRTABLE_API_KEY`, Value: `your_complete_api_key`
   - Key: `AIRTABLE_TABLE_ID`, Value: `tblR5cWG21aBDfi49`

---

## Step 5: Commit All Changes

Make sure all Heroku files are committed:

```bash
git add package.json server.js Procfile .env.example
git commit -m "Add Heroku deployment configuration"
git push origin claude/fix-spinner-loading-issue-NVMsw
```

---

## Step 6: Deploy to Heroku

### Option A: Deploy from GitHub (Recommended)

1. Go to your Heroku Dashboard: https://dashboard.heroku.com/apps
2. Click your app name
3. Click "Deploy" tab
4. Under "Deployment method", click **"GitHub"**
5. Click "Connect to GitHub"
6. Search for your repository: `barkbone-tracker`
7. Click "Connect"
8. Select branch: `claude/fix-spinner-loading-issue-NVMsw`
9. Click **"Deploy Branch"**

### Option B: Deploy from Command Line

```bash
# Make sure you're on the right branch
git checkout claude/fix-spinner-loading-issue-NVMsw

# Push to Heroku
git push heroku claude/fix-spinner-loading-issue-NVMsw:main
```

---

## Step 7: Open Your App

```bash
heroku open
```

Or visit: `https://your-app-name.herokuapp.com`

---

## Step 8: Monitor Logs (If Issues)

```bash
heroku logs --tail
```

This shows real-time logs to help debug any issues.

---

## 🎉 Success!

Your app is now live on Heroku! It will:
- ✅ Load from GitHub
- ✅ Connect to Airtable for data
- ✅ Run 24/7 on Heroku
- ✅ Be accessible from any browser

---

## 🔧 Updating Your App

When you make changes:

```bash
# 1. Commit changes to Git
git add .
git commit -m "Your update message"
git push origin claude/fix-spinner-loading-issue-NVMsw

# 2. Deploy to Heroku
# If using GitHub deploy: Just click "Deploy Branch" in Heroku dashboard
# If using CLI: git push heroku claude/fix-spinner-loading-issue-NVMsw:main
```

---

## 🔒 Security Best Practices

✅ **Already Done:**
- Config vars are used for API keys (not in code)
- `config.js` is in `.gitignore` (not pushed to GitHub)
- Environment variables are secure on Heroku

❌ **Don't Do:**
- Don't commit API keys to GitHub
- Don't share your Heroku config vars publicly
- Don't push `config.js` to GitHub

---

## 💰 Pricing

**Heroku Free Tier includes:**
- 550-1000 free dyno hours per month
- Sleeps after 30 minutes of inactivity
- Wakes up automatically when visited

**Hobby Tier ($7/month):**
- Never sleeps
- Custom domains
- Better performance

---

## 🐛 Troubleshooting

### App shows error page
```bash
heroku logs --tail
```
Check logs for specific errors.

### "Application error" message
- Check that config vars are set correctly
- Verify API key is complete
- Check `heroku logs`

### Can't connect to Airtable
- Verify config vars: `heroku config`
- Check API key permissions in Airtable
- Test API key with `node test-api.js` locally

### Build fails
- Make sure `package.json` is committed
- Check that `Procfile` exists and is correct
- Review build logs: `heroku logs --tail`

---

## 📚 Useful Commands

```bash
# View app info
heroku apps:info

# View config vars
heroku config

# Restart app
heroku restart

# Open app in browser
heroku open

# View logs
heroku logs --tail

# Run commands on Heroku
heroku run bash

# Scale dynos
heroku ps:scale web=1
```

---

## 🔗 Links

- **Your GitHub Repo**: https://github.com/brockallen24/barkbone-tracker
- **Heroku Dashboard**: https://dashboard.heroku.com/apps
- **Heroku Docs**: https://devcenter.heroku.com/
- **Airtable API**: https://airtable.com/developers/web/api/introduction

---

## Next Steps

1. ✅ Deploy to Heroku (follow steps above)
2. Test your live app
3. Share the URL with your team
4. Set up automatic deploys from GitHub (optional)
5. Consider upgrading to Hobby tier for always-on service

**Your app will be live at:** `https://your-app-name.herokuapp.com` 🎉
