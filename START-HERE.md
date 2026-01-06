# 🚀 How to Start Your Inventory Tracker

## ⚠️ Important: Don't Double-Click index.html!

Opening `index.html` directly causes CORS errors and shows "Failed to load products" error.

**Instead, use the local web server:**

---

## ✅ Quick Start (Recommended)

### Step 1: Start the Server
```bash
cd /home/user/barkbone-tracker
./start.sh
```

### Step 2: Open Your Browser
Go to: **http://localhost:8000**

That's it! Your app will load with data from Airtable. 🎉

---

## 🔧 Alternative Methods

### Method 1: Python (if start.sh doesn't work)
```bash
cd /home/user/barkbone-tracker
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Method 2: Node.js
```bash
cd /home/user/barkbone-tracker
npx http-server -p 8000
```
Then open: http://localhost:8000

### Method 3: PHP
```bash
cd /home/user/barkbone-tracker
php -S localhost:8000
```
Then open: http://localhost:8000

---

## 🐛 Troubleshooting

### "Failed to load products" Error
**Cause:** You opened `index.html` directly (file://)
**Fix:** Use one of the methods above to run a local server

### "Connection Error" in the app
**Cause:** API key issue or network problem
**Fix:**
1. Check browser console (F12) for error details
2. Verify `config.js` has your complete API key
3. Run `node test-api.js` to test connection

### Port 8000 already in use
**Fix:** Use a different port:
```bash
python3 -m http.server 8001
# Then open http://localhost:8001
```

---

## 📊 What You'll See

When working correctly:
1. **Browser Console** (F12):
   ```
   DOMContentLoaded - Starting initialization
   fetchProducts - Starting fetch from: ...
   fetchProducts - Response status: 200
   fetchProducts - Products fetched successfully: X
   ```

2. **On the page:**
   - Spinner shows briefly
   - Then your inventory data appears
   - Statistics display at the top

---

## 🔒 Security Note

Your `config.js` file with the API key is in this directory but **not tracked by Git**. Keep it safe and don't share it!

---

## Need Help?

- Check `SETUP-GUIDE.md` for configuration help
- Check `TEST-RESULTS.md` for diagnostic info
- Open browser DevTools (F12) → Console to see detailed logs
