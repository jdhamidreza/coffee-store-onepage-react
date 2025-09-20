<img width="3800" height="1937" alt="image" src="https://github.com/user-attachments/assets/7bcf87ed-dff5-49bc-a9f3-04fdd6831ded" />
# ☕ Corner Cafe - React One-Page Website

A modern, responsive one-page website for a coffee shop built with React and Tailwind CSS.
 Features a beautiful design with smooth animations, mobile-responsive navigation, and interactive coffee menu.



## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, modern design with smooth animations
- **Mobile Navigation**: Hamburger menu with slide-out navigation for mobile devices
- **Interactive Menu**: Coffee menu with product cards and ordering functionality
- **Customer Reviews**: Testimonials section with customer profiles
- **Newsletter Signup**: Contact section with newsletter subscription
- **Persian/Farsi Support**: Multi-language support with custom fonts
- **Smooth Scrolling**: Smooth navigation between sections
- **Accessibility**: ARIA labels and keyboard navigation support



## 🛠️ Technologies Used

- **React 18.3.1** - Frontend framework
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **React Icons 5.4.0** - Icon library
- **Swiper 11.2.1** - Touch slider component
- **Create React App** - Build tooling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jdhamidreza(your username)/coffee-store-onepage-react.git
   cd coffee-store-onepage-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.


```

## 🎨 Components Overview

### Header Component
- Responsive navigation bar
- Mobile hamburger menu with slide-out animation
- Logo and navigation links
- Sign up/Login buttons

### Hero Section
- Eye-catching background image
- Main branding and tagline
- Call-to-action button
- Responsive text sizing

### Menu Component
- Grid layout of coffee products
- Product images, names, and prices
- Order buttons for each item
- Responsive grid (2-4 columns based on screen size)

### Customer Reviews
- Customer testimonials with profile images
- Smooth carousel/slider functionality
- Star ratings and review text

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

### Adding New Coffee Items
Edit `src/data.js` to add new coffee items:

```javascript
const coffeeMenu = [
  {
    id: 5,
    name: "New Coffee",
    image: newCoffeeImage,
    price: 60000,
    ingredients: ["Espresso", "New Ingredient"],
    description: "Description of the new coffee"
  }
];
```

### Styling
The project uses Tailwind CSS. Customize styles by:
- Modifying `tailwind.config.js` for theme customization
- Adding custom CSS in `src/index.css`
- Using Tailwind utility classes in components

### Fonts
Custom Persian fonts are included in `src/assets/font/`. To add new fonts:
1. Add font files to the assets/font directory
2. Import and define in `src/index.css`
3. Use in your components

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Deploy: `npm run deploy`


