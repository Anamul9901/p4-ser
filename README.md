# Project Name: Tree Oasis

This README file provides instructions for setting up and running the application locally.

## Live URL
 ```url
   https://level2-assignment4-server.vercel.app/
   ```
## Features




### Product and Category Management

- **Sign Up**: Allow users to register with the platform.
- **Login**: Enable users to authenticate and receive JWT tokens.

### Facility Management

- **Product List Table**: Display products with image, title, price, category, and actions.
- **Action Buttons**: Update and delete products with modals.
- **Adding a Product**: Form for adding products with real-time UI updates.

### Product Browsing

- **Filtering, Pagination, Sorting, Searching**: Advanced options for browsing products.
- **Product Details**: View detailed product information.

### Shopping Cart
- **Add to Cart**: Add products with quantity management.
- **Proceed to Checkout**: Navigate to the checkout page.

### Checkout and Payment
- **Order Creation**: Collect customer details and manage stock.
- **Payment Options**: Stripe integration and Cash on Delivery (COD).



## Technologies Used
- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

# Getting Started

## Prerequisites

* **Software:**
    * Node.js (version 20.11.1 or higher)
    * npm Package Manager

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anamul9901/p4-ser.git
   ```

2. **Navigate to my project directory**
```bash
 cd p4-ser
```

3. **Install dependencies**

    install the required dependencies using npm:

   ```bash
   npm install
   npm install express --save
   npm install mongoose --save
   npm install typescript --save-dev
   npm install cors
   npm install dotenv
   npm install zod
   npm install typescript-eslint
   npm install --save-dev eslint-config-prettier
   npm install ts-node-dev --save-dev
   npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
   npx eslint --init
   ```

4. **Add ENV file**

Add you `.env` file on the root

Add this environment variables on this `.env` file. 
And also add your mongoDB  `DATABASE_URL`.
```bash
NODE_ENV= development
PORT=5000
DATABASE_URL= <<your mongoDB database url>>
STRIPE_SECRET_KEY= << strip secret_key >>
```



## Running the application

1. **Start the development server**

   Run the following command to start the development server:

   ```bash
   npm run build
   npm run start:dev
   ```

   This will typically start the server on port 5000 by default

2. **Access the application**

   Open your web browser and navigate to http://localhost:5000 to access the running application.

## Contributing

This format provides clear instructions for running my application locally.