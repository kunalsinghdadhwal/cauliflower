# Smart College Management System

## Overview
The **Smart College Management System** is a centralized platform designed to streamline academic and administrative operations in colleges. It offers features such as student enrollment, faculty allocation, attendance tracking, and resource management. The system ensures an efficient digital experience while maintaining data security and scalability.

## Features
### Core Functionalities
- **User Roles & Authentication**: Admin, Faculty, and Student access levels.
- **Student Enrollment & Record Management**: Manage student admissions, profiles, and academic history.
- **Course & Faculty Management**: Assign faculty to courses, manage schedules, and allocate resources.
- **Attendance Tracking**: Digital system for students and faculty to record and monitor attendance.
- **Examination & Grade Management**: Manage student assessments, exams, and results.
- **Notification System**: Announcements, alerts, and push notifications for students and faculty.

### Bonus Features
- **Voice Assistant**: Quick access to timetables and events using voice commands.

### [Demo Video](https://drive.google.com/file/d/1HWnGsgIelp3fDGNVS--6aDoabazhctYj/view?usp=sharing)

### [PPT](https://drive.google.com/file/d/1r9LqUn8Mf1jcNdRBD684-fYLtIg3pfmR/view?usp=drive_link)

## Tech Stack
- **Frontend**: Next.js, ShadCN,
- **Backend**: PostgreSQL, Drizzle, better-auth, Docker
- **Security**: Role-based authentication to ensure data protection

## Installation & Setup

### Steps to Run the Project
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/kunalsinghdadhwal/cauliflower.git
   cd cauliflower
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and copy the `.env.example`:
   ```sh
   # Enter all the variables as given in file also add the resend api key
   cp .env.example .env
   # To sping up the database
   docker-compose up -d
   ```

4. **Run Database Migrations**:
   ```sh
   npx drizzle-kit push
   # To see the database
   npx drizzle-kit studio
   ```

5. **Start the Development Server**:
   ```sh
   npm run dev
   ```

6. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---
**Developed by Team Cauliflower** 🚀
