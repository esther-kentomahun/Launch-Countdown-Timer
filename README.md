# Launch Countdown Timer

A responsive launch countdown timer built with React.js and Tailwind CSS. The application displays the remaining days, hours minutes, and seconds until a specified launch date, with a dynamic countdown that updates every second.

## Preview

![Launch Countdown Timer Preview](./screenshots/countdown-preview.png)

## Live Demo

**Live Website:** [project-launch-timer.netlify.app]

**Frontend Mentor Challenge:** https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-

## Project Overview

The Launch Countdown Timer is a frontend development project completed as part of the TechWithChinaza Week 2 Build Camp.

The project was developed using React.js to create reusable UI components and manage the countdown functionality. It features a real time countdown, responsive layouts, a star patterned background, and interactive social media icons.

The countdown automatically calculates the remaining time until the specified launch date and updates every second. When the target date is reached, the timer stops and displays zero across all countdown units.

## Features

- **Real-time Countdown:** Displays the remaining days, hours, minutes, and seconds.
- **Automatic Updates:** Updates the countdown every second without requiring a page refresh.
- **Dynamic Date Calculation:** Calculates the remaining time using JavaScript Date methods.
- **Countdown Expiry:** Automatically stops the timer and resets all values to zero when the target date is reached.
- **Reusable Components:** Uses React components to maintain a clean and organised codebase.
- **Responsive Design:** Adapts the layout to different screen sizes.
- **Interactive Social Icons:** Includes hover effects on the social media icons.
- **Custom Styling:** Recreates the visual design using Tailwind CSS.

## Technologies Used

| Technology        | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| React.js          | Building reusable UI components and managing application state |
| JavaScript (ES6+) | Countdown calculations and application logic                   |
| Tailwind CSS v4   | Styling and responsive layouts                                 |
| HTML5             | Application structure                                          |
| Vite              | Development server and build tool                              |
| Git & GitHub      | Version control and source code management                     |
| Netlify           | Project deployment                                             |

## Project Structure

```text
launch-countdown-timer/
│
├── public/
│   └── images/
│       ├── bg-stars.svg
│       ├── pattern-hills.svg
│       ├── icon-facebook.svg
│       ├── icon-instagram.svg
│       └── icon-pinterest.svg
│
├── src/
│   ├── components/
│   │   ├── CountdownCard.jsx
│   │   ├── CountdownTimer.jsx
│   │   └── SocialLinks.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## How It Works

The countdown functionality is implemented using React hooks and JavaScript date calculations.

### 1. State Management

React's `useState` hook manages the countdown values:

- Days
- Hours
- Minutes
- Seconds

Whenever the countdown values change, React updates the displayed components.

### 2. Countdown Calculation

JavaScript's `Date` object is used to establish the target launch date and retrieve the current timestamp.

The difference between both timestamps gives the remaining time in milliseconds.

The remaining milliseconds are converted into days, hours, minutes, and seconds using mathematical operations such as `Math.floor()` and the remainder operator (`%`).

### 3. Automatic Updates

React's `useEffect` hook manages the countdown interval.

The countdown calculation runs immediately when the component mounts and subsequently updates every 1,000 milliseconds using `setInterval()`.

A cleanup function using `clearInterval()` prevents unnecessary intervals from continuing when the component unmounts.

### 4. Countdown Expiry

The application checks whether the remaining time is zero or less.

When the target date is reached, the countdown values are reset to zero and the interval is cleared.

## Challenges Faced and Solutions

Building this project provided an opportunity to strengthen my understanding of React hooks, JavaScript date manipulation, component organisation, and responsive styling.

Here are some of the challenges I encountered:

### 1. Calculating the Remaining Time

**Challenge:**

Understanding how to convert the difference between two timestamps from milliseconds into days, hours, minutes, and seconds was initially challenging.

**Solution:**

I broke down the calculation into smaller operations using `Math.floor()` and the remainder operator (`%`).

This helped me understand how to extract complete time units and calculate the remaining values accurately.

### 2. Managing the Countdown with React Hooks

**Challenge:**

Implementing a countdown that updates every second while ensuring that React displays the latest values correctly.

**Solution:**

I used `useState` to store the countdown values and `useEffect` to manage the timer interval.

I also implemented an immediate function call before `setInterval()` to ensure the countdown displays the correct values as soon as the component loads.

### 3. Handling Countdown Expiry

**Challenge:**

Ensuring the countdown stops when the target date is reached instead of continuing into negative values.

**Solution:**

I implemented a conditional check to determine when the remaining time is zero or less. I then reset all countdown values to zero and used `clearInterval()` to stop the timer.

### 4. Component Organisation and Data Flow

**Challenge:**

Organising the application into reusable components while ensuring that the countdown logic and displayed values were properly connected.

**Solution:**

I separated the application into three main components:

- `CountdownTimer`: Handles the countdown calculations, state management, and rendering of the countdown cards.
- `CountdownCard`: Handles the appearance of each individual countdown card.
- `SocialLinks`: Displays the social media icons and their interactive hover effects.

This separation made the application easier to understand, maintain, and update.

### 5. Responsive Card Sizing and Styling

**Challenge:**

Adjusting the countdown cards to fit smaller screens without overflowing or touching the edges of the viewport.

**Solution:**

I used Tailwind CSS responsive utility classes to adjust the card dimensions, spacing, and typography at different breakpoints.

I also customised the card colours, shadows, and background elements to achieve a closer match to the original design.

## Installation and Setup

To run this project locally:

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate into the Project Directory

```bash
cd launch-countdown-timer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Build for Production

To create an optimised production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is intended to be deployed using **Netlify**.

To deploy:

1. Push the project repository to GitHub.
2. Log in to Netlify.
3. Select **Add new project** and import the GitHub repository.
4. Set the build command to `npm run build`.
5. Set the publish directory to `dist`.
6. Deploy the project.

Once deployed, add the live website URL to the Live Demo section of this README.

## What I Learned

Through this project, I strengthened my practical understanding of:

- React functional components and component reusability.
- State management with `useState`.
- Side effects and interval management with `useEffect`.
- JavaScript Date objects and timestamp calculations.
- Mathematical operations for time conversion.
- Passing data between React components using props.
- Responsive design using Tailwind CSS.
- Debugging React applications and handling runtime errors.
- Organising and maintaining a React project.

## Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io/) for providing the project challenge and design inspiration.
- TechWithChinaz Week 2 Frontend Build Camp for the opportunity to practise, build, and improve my frontend development skills.

---

**Built with React.js, JavaScript, and Tailwind CSS.**
