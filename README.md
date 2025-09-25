# Portfolio Website

A modern, responsive portfolio website built with Next.js, Mantine UI components, and a neutral color palette.

## Features

- 🎨 **Modern Design**: Clean, minimal design with neutral color palette
- 📱 **Responsive**: Fully responsive across all device sizes
- ⚡ **Fast**: Built with Next.js 14 for optimal performance
- 🎯 **Accessible**: Built with accessibility best practices
- 🛠️ **TypeScript**: Full TypeScript support for better development experience
- 🎨 **Mantine UI**: Beautiful, customizable components

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: Mantine
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Tabler Icons

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/          # Reusable components
└── styles/              # Additional styles
```

## Customization

### Colors

The site uses a neutral color palette defined in the Mantine theme configuration. You can modify colors in `src/app/layout.tsx`:

```typescript
theme={{
  colors: {
    gray: [...], // Your custom gray palette
    slate: [...], // Your custom slate palette
  },
  primaryColor: 'gray',
}}
```

### Content

Update the content in `src/app/page.tsx` to reflect your personal information:

- Hero section: Name and description
- About section: Personal story and links
- Skills section: Your technical skills
- Projects section: Your featured projects
- Contact section: Contact information and form

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).