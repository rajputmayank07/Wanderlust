# Wanderlust Project

This is **Wanderlust**, a project designed to provide a comprehensive platform for listing and booking accommodations for travelers. The application offers features like user accounts, reviews, and map-based listings.

## Technologies Used

Wanderlust is built using the following technologies:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web framework for handling routes and server logic.
- **MongoDB**: A NoSQL database for storing user, listing, and review data.
- **Mongoose**: An object data modeling library for MongoDB.
- **EJS**: Templating engine to render dynamic views.
- **Passport.js**: Middleware for authentication with session management.
- **Cloudinary**: For image storage and management.
- **Mapbox**: For map integration and geocoding services.
- **Bootstrap 5**: CSS framework for responsive and visually appealing UI.
- **Joi**: Data validation for requests and schema definitions.
- **dotenv**: Environment variable management for sensitive data.

## Features

1. **User Authentication**:
   - Sign up and log in using Passport.js.
   - Secure password management with session-based authentication.
   
2. **Listings**:
   - Create, edit, view, and delete accommodation listings.
   - Upload and manage images for listings using Cloudinary.
   - Geolocation and map integration using Mapbox.

3. **Reviews**:
   - Leave and manage reviews for listings, including ratings and comments.
   - Authenticated users can delete their reviews.

4. **Dynamic Views**:
   - Fully responsive layouts for users on different devices.
   - Interactive map for listing locations.

5. **Session Management**:
   - Persistent sessions with secure cookies using MongoDB as the store.

## Pre-requisites

Before running the project, ensure the following are installed:
- **Node.js** (LTS version recommended)
- **MongoDB** (local or cloud-based)
- **Cloudinary account** (for image hosting)
- **Mapbox API key** (for geocoding and maps)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/rajputmayank07/Wanderlust
   cd wanderlust

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   SECRET=your_secret_key
   MAP_TOKEN=your_mapbox_token
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the application**:
   ```bash
   node app.js
   ```

5. **Access the application** at:
   ```
   http://localhost:8080
   ```

---

## Usage

1. Sign up or log in to create listings.
2. Use the navigation bar to explore accommodations.
3. View listing details, add reviews, or manage your listings.
4. Delete listings or reviews as needed.

---

## Contribution

If you'd like to contribute:

1. **Fork the repository**:
   ```bash
   git clone https://github.com/rajputmayank07/Wanderlust
   ```

2. **Create a new branch**:
   ```bash
   git checkout -b feature/new-feature
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to your branch**:
   ```bash
   git push origin feature/new-feature
   ```

5. **Submit a pull request** with detailed information about your changes.

---

## Future Enhancements

- **Payment Integration**: Add online payment methods for booking listings.
- **Advanced Filtering**: Filter listings by price, location, or reviews.
- **Mobile App**: Build a mobile-friendly version of the application.

---

## Author

- Mayank Singh(https://github.com/rajputmayank07)

---

Enjoy using Wanderlust to find your perfect stay!
```
