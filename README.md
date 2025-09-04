# Aura - Mental Wellness Website (HTML/CSS Version)

A beautiful, responsive mental wellness website built with pure HTML, CSS, and JavaScript. This version provides all the core functionality of the Aura platform without requiring any backend dependencies.

## Features

### 🏠 **Home Page** (`index.html`)
- Clean, modern landing page with glassmorphism design
- Navigation cards to all major sections
- Inspirational quotes and wellness messaging
- Dark/light theme toggle
- Fully responsive design

### 💜 **Daily Check-in** (`daily-checkin.html`)
- Interactive mood selection (Great, Okay, Struggling)
- Thoughtful reflection text area
- Form validation and user feedback
- Secure and private data handling

### 📊 **Data Insights** (`data-insights.html`)
- Visual mood trends with mock charts
- Weekly summary statistics
- Check-in streak tracking
- Mood distribution charts
- Progress tracking and motivational messages

### ✨ **Explore Resources** (`explore.html`)
- Six categories of wellness resources:
  - Mindfulness & Meditation
  - Breathing Exercises
  - Self-Care Activities
  - Stress Management
  - Sleep & Rest
  - Emotional Wellness
- Quick access tools for emergency support
- Detailed resource descriptions with time estimates

### 🤖 **Luna ChatBot** (`luna-chatbot.html`)
- AI-powered chat interface simulation
- Quick suggestion buttons
- Real-time message input with character counter
- Helpful resource cards
- Privacy and safety disclaimers

### 📖 **Personal Journaling** (`journaling.html`)
- Rich text journal entry form
- Mood tagging system
- Character/word counters
- Writing prompts for inspiration
- Previous entries viewing
- Draft saving functionality

## Technical Details

### Architecture
- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Mobile-first responsive design** - Works on all devices
- **Glassmorphism UI** - Modern, blurred glass aesthetic
- **Dark/Light themes** - Automatic theme persistence
- **Smooth animations** - CSS transitions and keyframes

### Color Scheme
- **Primary**: Purple/pink gradient (`hsl(270, 50%, 65%)`)
- **Secondary**: Soft purple (`hsl(315, 40%, 85%)`)
- **Background**: Light purple gradient in light mode, dark purple in dark mode
- **Accent colors**: Varied per section (blue, green, orange, etc.)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing**: Uses `clamp()` for fluid typography

## File Structure

```
html-css-website/
├── index.html              # Home page
├── daily-checkin.html      # Daily mood check-in
├── data-insights.html      # Analytics and insights
├── explore.html            # Wellness resources
├── luna-chatbot.html       # AI chatbot interface
├── journaling.html         # Personal journaling
├── styles.css              # Global styles and theme system
├── checkin.css            # Daily check-in specific styles
├── insights.css           # Data insights specific styles
├── explore.css            # Explore page specific styles
├── chatbot.css            # Chatbot interface styles
├── journaling.css         # Journaling page specific styles
├── script.js              # Global JavaScript functionality
└── README.md              # This file
```

## Getting Started

### Quick Start
1. Download or clone the `html-css-website` folder
2. Open `index.html` in any modern web browser
3. Navigate through the site using the navigation cards

### For Development
1. Use a local web server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` in your browser

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Features in Detail

### Theme System
- **Automatic persistence** using localStorage
- **Smooth transitions** between light and dark modes
- **CSS custom properties** for easy theme customization
- **Consistent styling** across all pages

### Form Handling
- **Client-side validation** with user-friendly error messages
- **Character counters** for inputs and text areas
- **Toast notifications** for user feedback
- **Form persistence** (draft saving)

### Interactive Elements
- **Mood selection** with visual feedback
- **Chat simulation** with predefined responses
- **Resource cards** with hover effects
- **Navigation** with smooth transitions

### Accessibility
- **Semantic HTML** structure
- **ARIA labels** where appropriate
- **Keyboard navigation** support
- **Color contrast** compliance
- **Screen reader** friendly

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --background: hsl(330, 30%, 98%);
  --foreground: hsl(330, 15%, 15%);
  --primary: hsl(270, 50%, 65%);
  /* ... more variables */
}
```

### Content
- **Navigation cards**: Edit in `index.html`
- **Wellness resources**: Modify in `explore.html`
- **Journal prompts**: Update in `journaling.html`
- **Chat responses**: Change in `script.js`

### Styling
- **Page-specific styles**: Each page has its own CSS file
- **Global styles**: Shared styles in `styles.css`
- **Responsive breakpoints**: 768px and 480px

## Team Credits

Created by:
- **Vedant Gophane**
- **Arya Yadav** 
- **Kaivalya Lehekar**
- **Chirashree Bapuli**
- **Amey Bondre**

## License

This project is created for educational and demonstration purposes. Feel free to use and modify for your own projects.

## Notes

- All data is simulated and stored locally in the browser
- No actual AI functionality - responses are predefined
- Charts and statistics are mock data for demonstration
- No real data persistence - refreshing the page resets most data

This HTML/CSS version provides the complete visual and interactive experience of the Aura mental wellness platform while remaining lightweight and easy to deploy anywhere.