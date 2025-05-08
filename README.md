# SolTech Hub - Technology Solutions Provider

SolTech Hub is a leading technology solutions provider based in Zimbabwe, specializing in custom software development, system integration, and digital transformation services.

## 🌟 Features

- **Modern Documentation**: Built with Nextra for a beautiful, responsive documentation site
- **Interactive Case Studies**: Showcase our successful projects with interactive slideshows
- **Contact System**: Professional contact form with automated email notifications
- **Blog Platform**: Share insights and updates about technology trends
- **Responsive Design**: Optimized for all devices and screen sizes

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Documentation**: Nextra
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm
- Gmail account for email functionality

## 🛠️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/solozzz1/soltech-hub.git
   cd soltech-hub
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_gmail_app_password
   EMAIL_TO=your.email@gmail.com
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Setup

1. Enable 2-Step Verification in your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings > Security
   - Under "2-Step Verification", click "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Name it "SolTech Hub Contact Form"
   - Copy the generated password
3. Add the password to your `.env.local` file

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

1. Build the project:
   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 📁 Project Structure

```
soltech-hub/
├── components/     # React components
├── pages/         # Next.js pages and API routes
├── public/        # Static assets
├── styles/        # Global styles
└── theme.config.tsx  # Nextra theme configuration
```

## 🔧 Configuration

- `theme.config.tsx`: Main theme configuration
- `next.config.mjs`: Next.js configuration
- `.env.local`: Environment variables (not in git)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: solomonmukonda0@gmail.com
- **Phone**: +263782980290 / +263719110713
- **Address**: Tech Innovation Park, Harare Zimbabwe

## 🙏 Acknowledgments

- [Nextra](https://nextra.site) for the documentation framework
- [Next.js](https://nextjs.org) for the React framework
- [Vercel](https://vercel.com) for hosting and deployment
