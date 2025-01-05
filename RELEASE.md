# Red CLI v2.0.0

## 🎉 Major Release Highlights

### 🏗 Production-Ready Boilerplates
- All templates now come with a complete production-ready setup
- Enhanced project structure for better scalability
- Pre-configured with industry best practices

### 📚 Node.js Backend Enhancements
- Added Swagger API documentation support
- Integrated MongoDB with Mongoose
- JWT and Google OAuth authentication
- Winston logger for better debugging
- Comprehensive error handling middleware
- Environment configuration setup

### ⚛️ React Frontend Updates
- Migrated to Vite + SWC for faster development
- Added Material UI integration
- Implemented React Query for data fetching
- Pre-configured React Router setup
- Added Toast notifications
- Tailwind CSS styling system

### 📱 React Native Improvements
- Updated to latest React Native version
- Added complete navigation setup (Stack & Bottom Tabs)
- Integrated Google Sign-In
- Added payment gateway support (Stripe & Razorpay)
- Async Storage implementation
- Type-safe API client setup

### 🔄 Next.js Updates
- Migrated to App Router architecture
- Added React Query integration
- Implemented authentication (@react-oauth/google)
- Added payment integrations (Paddle & Razorpay)
- Enhanced Tailwind CSS setup with animations

### 🔧 Common Features Across All Templates
- TypeScript support by default
- Zustand state management
- Proper folder structure
- API integration setup
- Environment configuration
- Type safety improvements

## 🐛 Bug Fixes
- Fixed template generation issues
- Improved error handling during project creation
- Better dependency version management
- Enhanced cross-platform compatibility

## 📝 Documentation
- Updated README with detailed template features
- Added inline documentation in code
- Improved setup instructions
- Added contribution guidelines

## 🔄 Migration Guide
If you're upgrading from v1.x.x to v2.0.0:

1. Uninstall the old version:
```bash
npm uninstall -g red-js-cli
```

2. Install the new version:
```bash
npm install -g red-js-cli
```

3. Clear your global cache:
```bash
npm cache clean --force
```

## 🚀 Getting Started
```bash
# Install the CLI
npm install -g red-js-cli

# Create a new project
red-js-cli
```

## 🤝 Contributing
We welcome contributions! Please see our contributing guidelines for more details.

## 📄 License
MIT License - feel free to use this in your projects!

---

For more information, visit our [GitHub repository](https://github.com/iwint/red-cli).