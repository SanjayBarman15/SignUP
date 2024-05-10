Project Name: Signup

Description:
This project, named "Signup," is a React Vite application consisting of three main pages: Home, Signup, and Login. It facilitates user authentication through both traditional email/password sign-up and Google OAuth for streamlined access. Firebase serves as the backend service for securely storing user data.

Pages:
- Home Page: The landing page of the application, providing an overview or introduction to the platform.
- Signup Page: Allows users to register for an account using their email and password or through Google OAuth.
- Login Page: Enables existing users to log in using their registered email/password credentials or via Google OAuth for faster authentication.

Features:
- Firebase Integration: Utilizes Firebase Authentication and Firestore for securely managing user authentication and storing user data.
- Email/Password Sign-up: Users can register for an account by providing their email address and creating a password.
- Google OAuth: Offers the option for users to authenticate through their Google accounts, providing a seamless login experience.
- Protected Routes: Restricts access to certain pages or resources based on user authentication status.
- Responsive Design: Ensures compatibility and optimal viewing across various devices and screen sizes.

Technologies Used:
- React: Frontend library for building dynamic user interfaces.
- Vite: Next-generation frontend tooling for React applications.
- Firebase: Backend service for authentication and data storage.
- Google OAuth: OAuth 2.0 authentication service provided by Google.

Installation:
1. Clone the repository:
   git clone https://github.com/SanjayBarman15/signup.git
2. Navigate to the project directory:
   cd signup
3. Install dependencies:
   npm install
4. Set up Firebase project and configure Firebase SDK in the project.
5. Run the application:
   npm start

Configuration:
- Firebase Setup: Follow Firebase documentation to set up Firebase Authentication and Firestore Database for storing user information.

Usage:
1. Access the application through the browser.
2. Navigate to the appropriate page:
   - Home Page: Introduction to the platform.
   - Signup Page: Register for a new account.
   - Login Page: Log in with existing credentials or through Google OAuth.
3. Upon successful authentication, users can access protected resources or features.
