# Cinema Streaming Platform

## Overview

This project is an online streaming platform that allows clients to watch movies on-demand (VOD). The application is designed for both subscribers and basic account holders, offering features for movie streaming, ratings, comments, and user account management. The platform also includes an administrator dashboard for managing content and users.

## Features

### Client Features
- **Streaming Access**: Clients can watch movies on our platform if they have a subscribed account.
- **Movie Ratings**: Clients can rate videos.
- **Genre Filtering**: Clients can filter movies by genre.
- **Movie Search**: Clients can search for movies by name.
- **Comments**: Clients can leave comments on movies.
- **Latest Movies**: Display the most recently added movies on the homepage.
- **Related Movies**: On each movie detail page, display related films (same genre, similar names, or release dates).
- **Account Management**: Clients can manage their accounts, including updating their name, date of birth, email, password, and profile picture from a single dashboard.
- **Favorites Management**: Clients can manage their favorite movies from their dashboard.

### Administrator Features
- **Admin Dashboard**: An ergonomic dashboard for administrators to manage the platform.
- **Video Uploading**: Administrators can upload videos.
- **User Management**: Administrators can manage users (ban or activate accounts) and view metrics (number of clients, movies, visits, time spent on pages or videos, etc.).
- **Video Visibility Settings**: Videos can be set to public, private, or scheduled for publication.

### Payment Integration
- **Payment Interface**: Create a mock-up interface for clients to enter their credit card information using ReactJS (frontend only).

### Documentation
- **API Documentation**: All endpoints will be documented using Swagger for easy reference and integration.

### Storage
- **MinIO Integration**: Use MinIO for storing videos, ensuring proper access management.

## Technology Stack
- **Frontend**: ReactJS for building the user interface.
- **Backend**: Node.js with Express for server-side logic.
- **Database**: MongoDB for storing user data, movies, ratings, and comments.
- **Storage**: MinIO for video storage.
- **API Documentation**: Swagger for documenting API endpoints.

## Getting Started

### Prerequisites
- Node.js (version >= 14.x)
- MongoDB (running locally or hosted)
- MinIO (running locally or hosted)
- Docker (optional, if you prefer to run MinIO in a container)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cinema-streaming-platform
