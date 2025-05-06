# Cactus Cloud Media Website

A modern website for Cactus Cloud Media, a professional aerial photography and videography service.

## Features

- Modern, responsive design
- Service packages showcase
- Portfolio gallery
- Contact form
- Mobile-friendly navigation

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd cactuscloudmedia
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Cloudflare Pages:

1. Push your code to your Git repository
2. Go to Cloudflare Dashboard > Pages
3. Create a new project and connect to your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18
5. Deploy!

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## License

MIT
