# 📦 Barkbone Inventory Tracker

A modern, cloud-based inventory tracking application with Airtable backend integration.

## 🌟 Features

- ✅ Real-time inventory tracking with Airtable
- ✅ Priority management (Critical, High, Medium, Low)
- ✅ Drag-and-drop reordering
- ✅ Receive inventory & process shipments
- ✅ Activity history tracking
- ✅ PDF export functionality
- ✅ Cloud-synced data
- ✅ Responsive design for mobile & desktop

## 🚀 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js + Express (for production hosting)
- **Database:** Airtable (Cloud NoSQL)
- **Hosting:** Heroku | Netlify | Vercel
- **Version Control:** GitHub

---

## 📋 Quick Start Guide

### For Local Development:

```bash
# 1. Clone the repository
git clone https://github.com/brockallen24/barkbone-tracker.git
cd barkbone-tracker

# 2. Install dependencies
npm install

# 3. Configure Airtable (edit config.js with your credentials)
# See SETUP-GUIDE.md for details

# 4. Start local server
./start.sh
# Or: npm start

# 5. Open browser to http://localhost:8000
```

### For Production (Heroku):

See **[HEROKU-DEPLOY.md](./HEROKU-DEPLOY.md)** for complete deployment instructions.

---

## 🔧 Configuration

### Airtable Setup

1. Create Airtable account at https://airtable.com
2. Create a base with required fields (see SETUP-GUIDE.md)
3. Get your API credentials
4. Update `config.js` locally or set Heroku environment variables

**Required Airtable Fields:**
- PartNumber, Description, Priority
- OpenPO, BoxSize, CasePack
- BackerStock, AmountNeeded, SortOrder

---

## 📁 Project Structure

```
barkbone-tracker/
├── index.html              # Main application UI
├── config.js               # Airtable config (local only, in .gitignore)
├── server.js               # Express server for production
├── package.json            # Node.js dependencies
├── Procfile                # Heroku configuration
├── start.sh                # Local development server
├── test.html               # API connection tester
├── test-api.js             # CLI API tester
├── HEROKU-DEPLOY.md        # Heroku deployment guide
├── SETUP-GUIDE.md          # Initial setup instructions
├── START-HERE.md           # Quick start guide
└── README.md               # This file
```

---

## 🌐 Three-Platform Integration

This app uses three platforms working together:

### 1. GitHub (Code Storage)
- Version control
- Code hosting
- Collaboration
- Automatic deploys

### 2. Airtable (Data Storage)
- Product inventory database
- Real-time sync
- Cloud-based
- API access

### 3. Heroku (Web Hosting)
- Application hosting
- Always-on service
- HTTPS included
- Easy deployment

**Workflow:** Code on GitHub → Deploy to Heroku → Data stored in Airtable

---

## 🚀 Deployment Options

### Option 1: Heroku (Recommended)
- See [HEROKU-DEPLOY.md](./HEROKU-DEPLOY.md)
- Free tier available
- Automatic HTTPS
- GitHub integration

### Option 2: Netlify
- Deploy static site
- Environment variables
- Serverless functions

### Option 3: Vercel
- Import from GitHub
- Environment variables
- Auto-deploy

### Option 4: Local Server
- `./start.sh` or `npm start`
- Good for development
- No deployment needed

---

## 🔒 Security

- ✅ API keys in environment variables
- ✅ `config.js` excluded from Git
- ✅ GitHub push protection enabled
- ✅ No secrets in codebase
- ✅ Secure HTTPS on Heroku

---

## 🐛 Troubleshooting

### "Failed to load products" error
**Solution:** Don't open `index.html` directly. Use `./start.sh` or deploy to Heroku.

### API connection errors
1. Check browser console (F12)
2. Verify API key is correct
3. Run `node test-api.js`
4. Check Airtable API status

### Heroku issues
```bash
heroku logs --tail    # View logs
heroku config         # Check environment variables
heroku restart        # Restart app
```

---

## 📚 Documentation

- **[SETUP-GUIDE.md](./SETUP-GUIDE.md)** - Airtable configuration
- **[HEROKU-DEPLOY.md](./HEROKU-DEPLOY.md)** - Heroku deployment
- **[START-HERE.md](./START-HERE.md)** - Quick start
- **[RESOLUTION.md](./RESOLUTION.md)** - Bug fixes

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## 📝 License

MIT License

---

## 🔗 Links

- **Repository:** https://github.com/brockallen24/barkbone-tracker
- **Airtable API:** https://airtable.com/developers/web/api/introduction
- **Heroku Docs:** https://devcenter.heroku.com/

---

## 📞 Support

For help:
1. Check documentation files
2. Review console errors (F12)
3. Check Heroku logs if deployed
4. Create GitHub issue

---

**Built for efficient inventory management 📦**
