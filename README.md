# NoteHub

NoteHub is a web application for creating, organizing, and managing notes. It allows users to browse notes, filter them by category, view detailed information, and create their own notes through a convenient interface.

## Preview

![NoteHub Preview](./public/preview.webp)

## Live Demo

[Live Demo](https://09-auth-eight-ebon.vercel.app/)

## GitHub Repository

[GitHub Repository](https://github.com/Romanna-Brych/NoteHub)

## Features

- Home page
- Authentication (Sign In / Sign Up)
- Protected (private) routes
- Notes list with filtering
- Dynamic routing for note details
- Create new notes
- Sidebar navigation (parallel routes)
- User profile and edit page
- Loading and error states handling

## Tech Stack

- Next.js
- TypeScript
- React
- TanStack Query
- Axios
- Zustand
- CSS Modules

## Project Structure

app/
├── (auth routes)
│   ├── sign-in
│   └── sign-up
│
├── (private routes)
│   ├── notes/
│   │   ├── [id]
│   │   ├── action/create
│   │   ├── filter
│   │   ├── […slug]
│   │   ├── @sidebar
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── profile/
│   │   └── edit
│
├── @modal
├── api
├── layout.tsx
├── loading.tsx
├── not-found.tsx
└── page.tsx

## Pages

- `/` — Home page  
- `/sign-in` — Login page  
- `/sign-up` — Registration page  
- `/notes` — Notes list  
- `/notes/[id]` — Note details  
- `/notes/action/create` — Create note  
- `/profile` — User profile  
- `/profile/edit` — Edit profile

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/Romanna-Brych/NoteHub.git
```
2. Navigate to the project folder:
```bash
cd NoteHub
```
3. Install dependencies:
```bash
npm install
```
4. Create a .env.local file:
```bash
NEXT_PUBLIC_API_URL=your_api_url
```
5. Start the development server:
```bash
npm run dev
```
6. Open the app in your browser:
```bash
http://localhost:3000
```

