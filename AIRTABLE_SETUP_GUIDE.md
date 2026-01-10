# 🎯 Airtable Setup Guide for Barkbone Tracker
## Step-by-Step Instructions (5-10 minutes)

---

## 📋 Part 1: Create Your Airtable Account & Base (2 minutes)

### Step 1: Sign Up for Airtable
1. **Open your browser** and go to: https://airtable.com/signup
2. **Sign up** using:
   - Your email address, OR
   - Google account, OR
   - Microsoft account
3. **Verify your email** if prompted
4. You'll land on the Airtable home page

### Step 2: Create a New Base
1. **Click** the big **"Start from scratch"** button (or "+ Create a base")
2. **Name your base:** `Barkbone Inventory Tracker`
3. **Click** anywhere outside the name field to save it
4. You'll see a blank table with default fields

---

## 📊 Part 2: Import the Template (1 minute - EASIEST METHOD)

### Option A: Import CSV (Recommended - Automatic Setup)

1. **Download the template file:**
   - File location: `airtable_template.csv` (in your project folder)

2. **In Airtable, click** the dropdown arrow next to your table name (top-left, says "Table 1")

3. **Select:** "Import data" → "CSV file"

4. **Upload** the `airtable_template.csv` file

5. **Airtable will automatically:**
   - ✅ Create all 9 fields with correct names
   - ✅ Set up 3 sample products
   - ✅ Configure field types

6. **Click "Import"**

7. **Done!** All fields are now set up correctly.

### Option B: Manual Field Setup (If CSV import doesn't work)

If the CSV import has issues, follow these manual steps:

1. **Click the "+" button** at the right of the field headers

2. **Add these fields one by one:**

| Click "+ Add Field" | Field Name | Field Type | Notes |
|---------------------|------------|------------|-------|
| 1️⃣ | PartNumber | Single line text | (Rename "Name" field if it exists) |
| 2️⃣ | Description | Long text | - |
| 3️⃣ | Priority | Single select | Add options: none, low, medium, high, critical |
| 4️⃣ | OpenPO | Number | Format: Integer, Precision: 0 |
| 5️⃣ | BoxSize | Single line text | - |
| 6️⃣ | CasePack | Number | Format: Integer, Precision: 0 |
| 7️⃣ | BackerStock | Number | Format: Integer, Precision: 0 |
| 8️⃣ | AmountNeeded | Number | Format: Integer, Precision: 0 |
| 9️⃣ | SortOrder | Number | Format: Integer, Precision: 0 |

**For Priority field specifically:**
- Choose "Single select"
- Add these options exactly: `none`, `low`, `medium`, `high`, `critical`
- You can set colors for each (optional)

---

## 🔑 Part 3: Get Your Base ID & Table ID (1 minute)

### Get Base ID:
1. **Look at your browser's address bar**
2. You'll see a URL like: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. **Copy the part starting with `app`** (example: `appVFThGxG2FiB1ig`)
4. **Save it somewhere** - you'll need this in a moment

### Get Table ID:
1. **Look at the same URL**
2. You'll see: `https://airtable.com/appXXXX/tblYYYYYYYYYYYYY/...`
3. **Copy the part starting with `tbl`** (example: `tblqNkvmQn9cGgLpo`)
4. **Save it somewhere** - you'll need this too

**Example URL breakdown:**
```
https://airtable.com/appVFThGxG2FiB1ig/tblqNkvmQn9cGgLpo/viwAbCdEfGh
                      ↑________________↑  ↑________________↑
                         Base ID              Table ID
```

---

## 🔐 Part 4: Create Your API Token (2 minutes)

### Step 1: Go to Token Creation Page
1. **Open a new tab** and go to: https://airtable.com/create/tokens
2. **Click** the **"Create new token"** button

### Step 2: Configure Your Token
1. **Token name:** `Barkbone Tracker API`

2. **Add scopes** - Click "Add a scope" and select:
   - ✅ `data.records:read` (allows reading records)
   - ✅ `data.records:write` (allows creating/updating/deleting records)

3. **Add access** - Click "Add a base" and select:
   - ✅ Your "Barkbone Inventory Tracker" base

4. **Click** the **"Create token"** button

### Step 3: Copy Your Token
1. **IMPORTANT:** You'll see your token **ONLY ONCE**
2. **Click** "Copy" or manually select and copy the entire token
3. It will look like: `patAbCdEfGhIjKlMnOpQrStUvWxYz1234567890AbCdEfGh` (40+ characters)
4. **Save it somewhere safe** - you'll need it immediately

⚠️ **WARNING:** If you lose this token, you'll need to create a new one!

---

## ✅ Part 5: Provide Credentials to Claude

Now that you have all three pieces of information, **reply to Claude with:**

```
Base ID: appXXXXXXXXXXXXXX
Table ID: tblYYYYYYYYYYYYY
API Token: patAbCdEfGhIjKlMnOpQrStUvWxYz1234567890AbCdEfGh
```

**Claude will then:**
1. ✅ Update your `config.js` file
2. ✅ Configure Heroku environment variables
3. ✅ Update GitHub secrets (if applicable)
4. ✅ Test the connection

---

## 🎉 You're Done!

After Claude configures everything:
- Your local app will connect to Airtable
- Your Heroku app will connect to Airtable
- All data will be synced across devices
- You can view/edit data in both the app AND Airtable

---

## 🐛 Troubleshooting

### "Can't find the Base ID or Table ID"
- Make sure you're looking at the actual Airtable base (not the home page)
- Click on your base, then look at the URL
- The IDs are always in the URL after you open the base

### "Token creation page asks for payment"
- You don't need a paid plan for this
- The free plan includes API access
- Just skip any payment prompts

### "Import CSV failed"
- That's okay! Use Option B (manual field setup)
- It takes a few extra minutes but works perfectly

### "Don't see my base after creation"
- Refresh the page
- Check the left sidebar for your bases
- Make sure you're logged into the correct account

---

## 📞 Need Help?

Just ask Claude:
- "I can't find the Base ID"
- "The CSV import isn't working"
- "I need help with the Priority field"
- Any other questions!

---

**Ready? Let's go! Start with Part 1 above. 🚀**
