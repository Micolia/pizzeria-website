# Pizzeria Website
This project is a static page for a pizzeria, built using React.

# Description
The page has the following sections:

1) **Navbar**:
  - A "Home" button.
  - A "Total" button (currently a placeholder).
  - "Login" and "Register" buttons if the user is not logged in, "Profile" and "Logout" buttons if the user is logged in.

2) **Main Section**:
- Includes a header and a section showing the products.
- Each product is displayed inside a card containing:
  - The product's image, name, description, price and a list of ingredients.
  - A button to add the item to the cart (currently non-functional).
- The product data is fetched dynamically from an internal API provided by the project's backend using React's `useEffect` and `useState` hooks.

3) **Cart Section**:
- The user can see the items added to the cart (currently only placeholder items are shown).
- Each item in the cart displays the product details (image, name, price), along with buttons to increase or decrease the quantity of the item.
- The total section at the bottom of the cart dynamically calculates and displays the total price based on the prices and quantities of the items in the cart.

4) **Forms Section**:
- Contains two forms, one for creating an account and one for logging in.
- Error messages are displayed in the following cases:
   - If the user does not fill in all required fields.
   - If the password entered is less than 6 characters long.
   - In the registration form, if the password and confirm password fields do not match.

5) **Footer**

# Preview

![Website Preview](./frontend/src/assets/img/preview.png)