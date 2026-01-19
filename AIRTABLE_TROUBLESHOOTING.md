# Airtable Connection Troubleshooting

## Issue: 401 Unauthorized Error

### Step 1: Verify Personal Access Token

1. Log in to Airtable: https://airtable.com/
2. Go to Account → Developer Hub → Personal access tokens
3. Find your token (starts with `patjBXtoM35hEkfLn`)
4. Check:
   - [ ] Token still exists (not deleted)
   - [ ] Token has not expired
   - [ ] Token has correct scopes:
     - `data.records:read`
     - `data.records:write`
     - `schema.bases:read`

### Step 2: Verify Base Access

1. Go to your base: https://airtable.com/app79OgMIUBu9sCpq
2. Check:
   - [ ] You can access this base
   - [ ] The base ID is correct: `app79OgMIUBu9sCpq`
   - [ ] Your token has access to this base (check token scopes)

### Step 3: Verify Table Exists

1. In the base, check:
   - [ ] Table ID `tbl0w2qfQMtTI7fwh` exists
   - [ ] Table has the expected columns:
     - PartNumber
     - Description
     - OpenPO
     - BoxSize
     - CasePack
     - BackerStock
     - AmountNeeded
     - Priority
     - SortOrder (optional)

### Step 4: Check Heroku Config Vars

1. Go to: https://dashboard.heroku.com/apps/[your-app]/settings
2. Click "Reveal Config Vars"
3. Verify:
   - [ ] `AIRTABLE_API_KEY` = `patjBXtoM35hEkfLn.b238478eb6ecf40db2e80e66bc29b6cce3846b1d80fb5be1949fe0ca4b3efd53`
   - [ ] `AIRTABLE_BASE_ID` = `app79OgMIUBu9sCpq`
   - [ ] `AIRTABLE_TABLE_ID` = `tbl0w2qfQMtTI7fwh`
   - [ ] (Optional) Delete `AIRTABLE_TOKEN` if it exists

### Step 5: Test the Fix

After verifying all above:
1. Visit: `https://your-app.herokuapp.com/config.js`
2. Verify apiKey is not empty
3. Hard refresh your app (Ctrl+Shift+R)
4. Check browser console for errors

### Common Issues:

**401 Error Causes:**
- API key expired or revoked
- API key missing required scopes
- API key not added to the base's allowed tokens
- Wrong API key value in Heroku

**How to Fix:**
1. **Regenerate Token**: Create new Personal Access Token with correct scopes
2. **Update Heroku**: Set new token in AIRTABLE_API_KEY config var
3. **Redeploy**: Merge PR or manually redeploy

### Need New API Key?

If your current key is invalid:
1. Go to: https://airtable.com/create/tokens
2. Create new token with scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
3. Add access to base: `app79OgMIUBu9sCpq`
4. Copy the new token
5. Update Heroku config var: `AIRTABLE_API_KEY`
6. Redeploy
