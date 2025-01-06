# Puros.me - Your Professional Portfolio Hub

Puros.me is a modern web application that allows users to create personalized portfolio pages and showcase their projects through a single, customizable link. Built with Next.js and Firebase, it offers a seamless experience for professionals to display their work and track engagement.

## 🎯 Features

- **Custom Profile URLs**: Create your unique `puros.me/username` link
- **Project Showcase**: Add and manage multiple projects with images and descriptions
- **Social Media Integration**: Connect all your social media profiles in one place
- **Visit Analytics**: Track profile and project visits
- **Responsive Design**: Optimized for all devices
- **Real-time Updates**: Changes reflect immediately
- **Image Optimization**: Automatic image compression and optimization
- **Authentication**: Secure Google sign-in

## 🎬 Demo

https://github.com/user-attachments/assets/681210d6-b410-4eba-bb76-8d2714ba28e0

## 🛠 Technical Stack

### Frontend
- **Framework**: Next.js 15.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### Backend
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Authentication**: Google OAuth
- **Server**: Next.js API Routes with Server Actions

## 🏗 Architecture

### Frontend Architecture

The application follows a component-based architecture with:

1. **Page Components**:
```typescript
app/(pages)/page.tsx
startLine: 1
endLine: 17
```
2. **UI Components**:
- Button
- Modal
- TextInput
- TextArea

3. **Feature Components**:
- UserCard
- ProjectCard
- TotalVisits
- FAQ

### Backend Architecture


1. **Authentication Flow**:
```typescript
app/lib/auth.ts
startLine: 1
endLine: 12
```

2. **Database Operations**:
- Profile Management
- Project Management
- Visit Tracking
- Social Media Integration

3. **Server Actions**:
- CreateProject
- SaveProfile
- AddCustomLinks
- IncreaseVisits

## 💾 Data Models

### Profile

```typescript
type ProfileData = {
userId: string;
name?: string;
imagePath?: string;
description?: string;
totalVisits: number;
createdAt: number;
socialMedias?: {
github: string;
linkedin: string;
instagram: string;
twitter: string;
}
link1?: Link;
link2?: Link;
link3?: Link;
updatedAt?: number;
}
```

### Project
```typescript
type ProjectData = {
id: string;
userId: string;
projectName: string;
projectDescription: string;
projectUrl: string;
imagePath: string;
createdAt: number;
totalVisits?: number;
}

```
## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
3. Set up environment variables:

```env
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
FIREBASE_STORAGE_BUCKET=
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 💰 Pricing Model

- **Free Trial**: 3 days
- **Monthly**: $1.99/month
- **Lifetime**: $14.99 (one-time payment)

## 🔒 Security Features

- Secure Google Authentication
- Protected API Routes
- Image Upload Validation
- URL Sanitization
- Visit Tracking Protection

## 🎨 UI/UX Features

- Dark Mode Design
- Responsive Layouts
- Interactive Components
- Loading States
- Error Handling
- Modal Interactions
- Custom Animations

## 🔄 State Management

- Server-Side State
- Client-Side State with React Hooks
- Form State Management
- Modal State Control
- Authentication State

