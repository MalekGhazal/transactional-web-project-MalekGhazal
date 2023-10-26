# Project Final Report (E-commerce Website)

## Aim
To develop an e-commerce platform for selling trendy Men fashion products.

## Description
Our e-commerce platform, "Ebra", provides users with a wide range of men's clothing products, from hats to shoes. The platform aims to make fashion shopping easy, fun, and accessible.

## Functional and Non-Functional Requirements

### Functional Requirements
- Users must be able to register and log in.
- Users should be able to browse products.
- A search functionality should be present to find products.
- Users should be able to filter the products by favorites.
- Users should be able to add products to the cart and proceed to checkout.
- Users should be able to add products to Wishlist.
- Payment gateway integration for processing payments.

### Non-Functional Requirements
- The website should load within 3 seconds.
- The website should be represented in English and French.
- It should be mobile-responsive.
- The system should be able to handle up to 10,000 concurrent users.
- Data backups should occur daily.
- System uptime of 99.9%.

## User Stories

- **Browse Products:**  
  As a user, I want to browse products and filter them by favorites so that I can quickly find what I am looking for.

- **Search for a Product:**  
  As a user, I want to search for a specific product so that I can find it without browsing through multiple pages.

- **Add to Cart:**  
  As a user, I want to add products to my cart so that I can purchase multiple items at once.

- **Add to Wishlist:**  
  As a user, I want to add products to my Wishlist so that I can save my items for later.

- **Checkout:**  
  As a user, I want to be able to securely check out and make a payment so I can receive my ordered products.

## Test Cases

- **User Registration:**  
  Input: Valid email and password.  
  Expected Output: Successful registration and redirection to the login page.  
  Actual Output: Registration successful, user redirected to the login page.

- **Add Product to Cart:**  
  Input: Click "Add to Cart" on a product.  
  Expected Output: The product is added to the cart, and the cart count increases by 1.  
  Actual Output: Product added, cart count increased.

- **User Login:**  
  Input: Valid email and password.  
  Expected Output: Successful login and redirection to the homepage.  
  Actual Output: Login successful, user redirected to homepage.

- **Admin Panel:**  
  Input: Path /admin.  
  Expected Output: Only signed-in admin users should access this endpoint.  
  Actual Output: Authorization checked of the signed-in user if admin → get page / else to redirect to the homepage.

## Individual’s Role and Responsibilities

### Wei Jin
- Developed the database schema.
- Internationalization and localization.
- Admin Panel.
- API CRUD Operations.

### Malek Kazal
- Designed the UI/UX of the website.
- Stripe Integration / Checkout Logic.
- Firestore configuration / Integration.
- AWS Hosting.
- Full Routing.
- Authorization.

### Sean Burke
- Firebase Signup/Login.
- Authentication.
- Single Product Component.
- Code Refactoring.
