# Trimzy - URL Shortener

Trimzy is a simple URL shortener built with Next.js (App Router) and MongoDB. It lets users pick a custom short path and redirects it to the original URL.

## Features

- Custom short URLs
- Fast redirects via dynamic route
- MongoDB-backed storage
- Client-side toasts for success/error feedback

## Tech Stack

- Next.js (App Router)
- React
- MongoDB
- Tailwind CSS

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root and add:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 3) Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run lint checks
```

## Routes

- `/` - Landing page
- `/shorten` - URL creation form
- `/[shorturl]` - Redirects to the original URL
- `/about` - About page
- `/contact` - Contact page

## API

### POST `/api/generate`

Creates a short URL.

Request body:

```json
{
	"url": "https://example.com",
	"shorturl": "my-alias"
}
```

Response (success):

```json
{
	"success": true,
	"error": false,
	"message": "url generated successfully"
}
```

Response (already exists):

```json
{
	"success": false,
	"error": true,
	"message": "URL already exists!"
}
```

## Database

MongoDB database: `trimzy`

Collection: `url`

Document shape:

```json
{
	"url": "https://example.com",
	"shorturl": "my-alias"
}
```

## Notes

- The short URL shown after generation uses `NEXT_PUBLIC_HOST`.
- Ensure `MONGODB_URI` is set or the app will throw on startup.
