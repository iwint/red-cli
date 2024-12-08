# Red CLI

A powerful and flexible CLI tool that helps you quickly scaffold modern web and mobile projects using production-ready boilerplates.

## Features

- 🚀 Quick project setup with production-ready boilerplates
- 📚 Built-in Swagger API documentation for Node.js projects
- 🎯 Type-safe development with TypeScript support
- 🔄 State management solutions (Zustand) pre-configured
- 📱 Cross-platform support (Web, Mobile, Server)
- ⚡️ Modern development setup (Vite, Next.js App Router, React Native CLI)
- 🔍 API integration ready with React Query
- 🛠 Customizable project structure

## Installation

```bash
npm install -g red-js-cli
# or clone the repository
git clone https://github.com/iwint/red-cli.git
```

## Usage

Simply run:

```bash
red-js-cli
```

Follow the interactive prompts:

1. Choose your template from the available options
2. Enter your project name

### Project Naming Rules

- Can contain letters (a-z, A-Z)
- Numbers (0-9)
- Underscores (_)
- Hashes (-)
- No spaces or special characters

## Available Templates

### Node.js Backend
- TypeScript-based Express.js setup
- Swagger API documentation
- Authentication ready (JWT, Google OAuth)
- MongoDB integration with Mongoose
- Winston logger
- Environment configuration
- Error handling middleware

### Next.js Frontend
- App Router architecture
- React Query for data fetching
- Authentication setup (@react-oauth/google)
- Payment integrations (Paddle, Razorpay)
- Tailwind CSS with animations
- Type-safe development

### React Frontend
- Vite + SWC for fast development
- Material UI components
- React Query integration
- React Router setup
- Toast notifications
- Tailwind CSS styling

### React Native Mobile
- Latest React Native setup
- Navigation (Stack & Bottom Tabs)
- Google Sign-In integration
- Payment gateways (Stripe, Razorpay)
- Async Storage
- Type-safe API calls

## Creating Custom Templates

1. Navigate to the `templates` directory
2. Create a new folder with your template name
3. Add your template files and structure
4. The template will automatically appear in the CLI options

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**[Iwin Issac](https://linkedin.com/in/iwin-t) 👑**

---

⭐️ If you found this project helpful, please consider giving it a star!
