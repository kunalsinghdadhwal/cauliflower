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

## Tech Stack
- **Frontend**: Next.js, ShadCN (UI Library), TypeScript
- **Backend**: PostgreSQL (Database), Drizzle ORM (for SQL Injection prevention)
- **Security**: Role-based authentication to ensure data protection

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

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
   Create a `.env` file in the root directory and add your PostgreSQL database credentials:
   ```sh
   DATABASE_URL=your_postgres_connection_string
   ```

4. **Run Database Migrations**:
   ```sh
   npx drizzle-kit push
   ```

5. **Start the Development Server**:
   ```sh
   npm run dev
   ```

6. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or queries, feel free to reach out through GitHub Issues.

---
**Developed by Team Cauliflower** 🚀
