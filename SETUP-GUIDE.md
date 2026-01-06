# 🔧 Airtable Connection Setup Guide

## Step 1: Get Your Airtable API Credentials

### A. Create a Personal Access Token (API Key)

1. **Go to Airtable Tokens page:**
   - Visit: https://airtable.com/create/tokens
   - Log in to your Airtable account

2. **Create a new token:**
   - Click "Create new token"
   - Give it a name (e.g., "Inventory Tracker")

3. **Set the scopes (permissions):**
   - Check these boxes:
     - ✅ `data.records:read` - Read records
     - ✅ `data.records:write` - Create/update/delete records

4. **Add access to your base:**
   - Under "Access", click "Add a base"
   - Select your inventory base from the list

5. **Create the token:**
   - Click "Create token"
   - **IMPORTANT:** Copy the token NOW - you won't be able to see it again!
   - It should look like: `patAbCdEfGhIjKlMnOpQrStUvWxYz1234567890`
   - Length: typically 40-50 characters

---

### B. Get Your Base ID and Table ID

1. **Go to your Airtable base:**
   - Open the base you want to connect to

2. **Open the API documentation:**
   - Click "Help" in the top-right corner
   - Select "API documentation"

3. **Find your Base ID:**
   - Look at the URL or the first line of the docs
   - Format: `appXXXXXXXXXXXXXX`
   - Example: `appitB9dLQE7CzqpR`

4. **Find your Table ID:**
   - In the API docs, look for "AUTHENTICATION" section
   - Or check the "List records" endpoint URL
   - Format: `tblXXXXXXXXXXXXXX`
   - Example: `tblR5cWG21aBDfi49`
   - **Note:** Sometimes you can just use the table name instead

---

## Step 2: Update config.js

Open `config.js` and replace with your credentials:

```javascript
// Airtable Configuration
const AIRTABLE_CONFIG = {
    baseId: 'appXXXXXXXXXXXXXX',    // Replace with your Base ID
    apiKey: 'patYourFullTokenHere',   // Replace with your FULL token (40+ chars)
    tableId: 'tblXXXXXXXXXXXXXX',   // Replace with your Table ID or name
};
```

**Example with real format:**
```javascript
const AIRTABLE_CONFIG = {
    baseId: 'appitB9dLQE7CzqpR',
    apiKey: 'patAbCdEfGhIjKlMnOpQrStUvWxYz1234567890',  // This is the full length!
    tableId: 'tblR5cWG21aBDfi49',
};
```

---

## Step 3: Test Your Connection

### Option A: Use the test page
1. Open `test.html` in your browser
2. Click "Run Connection Test"
3. Check for any errors

### Option B: Use the command-line test
```bash
node test-api.js
```

### Option C: Check the main app
1. Open `index.html` in your browser
2. Open DevTools (F12) → Console tab
3. Look for console messages:
   - ✅ `fetchProducts - Response status: 200` = Success!
   - ❌ `fetchProducts - Response status: 401` = Bad API key
   - ❌ `fetchProducts - Response status: 404` = Wrong base/table ID

---

## Step 4: Troubleshooting

### Error: "401 Unauthorized"
- Your API key is wrong or incomplete
- Make sure you copied the ENTIRE token (40+ characters)
- Regenerate a new token if needed

### Error: "404 Not Found"
- Your baseId or tableId is incorrect
- Double-check the IDs in Airtable API docs

### Error: "403 Forbidden" or CORS error
- You're running in a restricted environment
- Solution: Run the HTML file locally (not from a server with restrictions)
- Or deploy to proper web hosting (Netlify, Vercel, etc.)

### Spinner still showing
- Open browser console (F12)
- Look for detailed error messages
- The console will tell you exactly what's wrong

---

## 🔒 Security Notes

⚠️ **IMPORTANT:** Never share your API key publicly!

- Don't commit `config.js` to public Git repositories
- Don't share screenshots that show your API key
- If you accidentally expose it, regenerate a new token immediately

---

## 📝 Quick Checklist

- [ ] Created Personal Access Token on Airtable
- [ ] Copied FULL token (40+ characters)
- [ ] Found Base ID (appXXXX...)
- [ ] Found Table ID (tblXXXX...)
- [ ] Updated `config.js` with all three values
- [ ] Tested connection using `test.html` or `test-api.js`
- [ ] Opened `index.html` and checked browser console
- [ ] Spinner stops and data loads!

---

## Need Help?

If you're still having issues:

1. Run `node test-api.js` and share the output
2. Open browser console and share any error messages
3. Check `TEST-RESULTS.md` for detailed diagnostics

---

**Current config.js status:**
- ⚠️ API key is only 17 characters (needs to be 40+)
- ✅ Base ID looks correct
- ✅ Table ID looks correct

You just need to update the API key with your complete token!
