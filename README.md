# ViZBL Backend API

This backend API provides various endpoints for user authentication, profile management, and email functionalities. It utilizes Node.js along with several packages such as Nodemailer, Bcrypt, Crypto, and Handlebars for email verification and password reset functionalities. The API also interacts with MongoDB for user data storage and AWS S3 for profile image uploads.

## Endpoints

### User Authentication

#### POST /api/signup
- Creates a new user account with email verification.
- Required Parameters: `email`, `password`, `invitation`, `source`.
- Returns: `id` of the newly created user.

#### POST /api/login
- Logs in an existing user with email and password.
- Required Parameters: `email`, `password`.
- Returns: User information including `id`, `name`, `email`, `username`, `image`, `dob`, and `authMethod`.

#### POST /api/google-auth
- Logs in or creates a user using Google OAuth.
- Required Parameters: `token`.
- Returns: User information similar to the login endpoint.

### Email Verification

#### GET /api/email-confirmation
- Confirms the user's email address based on the provided token.
- Required Query Parameters: `email`, `token`.

#### POST /api/resend-email
- Resends the verification email to the user's email address.
- Required Parameters: `email`.

### Password Management

#### POST /api/add-password
- Adds a password to an existing user account.
- Required Parameters: `password`.
- Requires user to be logged in.

#### PUT /api/update-password
- Updates the password of the logged-in user.
- Required Parameters: `oldPassword`, `newPassword`.
- Requires user to be logged in.

#### POST /api/send-reset-password-email
- Sends an email with a reset password link to the user's email address.
- Required Parameters: `email`.

#### GET /api/reset-password
- Validates the reset password token and email address.
- Required Query Parameters: `email`, `token`.

#### PUT /api/reset-password
- Resets the user's password based on the provided token and email address.
- Required Body Parameters: `email`, `token`, `password`.

### Profile Management

#### PUT /api/update-display-name
- Updates the display name of the logged-in user.
- Required Parameters: `name`.

#### PUT /api/update-username
- Updates the username of the logged-in user.
- Required Parameters: `name`.

#### PUT /api/update-dob
- Updates the date of birth of the logged-in user.
- Required Parameters: `date`.

#### POST /api/update-image
- Updates the profile image of the logged-in user.
- Required Parameters: `image`.

### Other User Operations

#### GET /api/check-user
- Checks if the logged-in user is initialized.
- Requires user to be logged in.

#### GET /api/get-user
- Retrieves the profile information of the logged-in user.

#### GET /api/get-user-video
- Retrieves the video information of the logged-in user.

#### GET /api/get-video-data
- Retrieves data of a video based on the provided video ID.

#### GET /api/get-registration-date
- Retrieves the registration date of the logged-in user.

#### GET /api/get-notifications
- Retrieves the notifications of the logged-in user.

#### PUT /api/update-notifications
- Updates the notifications settings of the logged-in user.

#### PUT /api/update-freeze
- Updates the freeze status of the logged-in user.

#### DELETE /api/delete-user
- Deletes the logged-in user account along with associated data.

## Dependencies
- Nodemailer
- Bcrypt
- Crypto
- Node-fetch
- Handlebars
- fs (file system)
- MongoDB (for user data storage)
- AWS S3 (for profile image storage)

## Configuration
Ensure to configure the SMTP service (e.g., Gmail) and AWS S3 credentials in the `config/config.js` file.

