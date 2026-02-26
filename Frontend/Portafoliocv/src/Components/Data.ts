
type CardDataType = {
    id: string;
    title: string;
    description: string;
    link: string;
}

const CardData: { movie: CardDataType, weather: CardDataType, menu: CardDataType, mern: CardDataType } = {

  movie: {
    id: "slideid1",
    title: "Landing Page Star Wars",
    description: 
    `Interactive page featuring information about the first six Star Wars films, highlighting synopses and main characters. 
    React was used to create a dynamic interface, JavaScript for functionality, and CSS for the visual design, 
    all with Vite optimizing development and page load performance.`,
    link: "https://starlanding.onrender.com"
  },
  weather: {
    id: "slideid2",
    title: "Weather Wizard",
    description: 
    `Interactive web application allowing users to check weather
    forecasts in various locations using the OpenWeather API.
    Developed with React, JavaScript, and CSS.`,
    link: "https://weather-wizard-je9z.onrender.com"
  },
  menu: {
    id: "slideid3",
    title: "Menu Chicken Burger",
    description: 
    `Interactive digital menu for a fast-food restaurant, accessible via URL or QR code, 
    making it easy to browse products and check their availability. 
    Built with React, JavaScript, Tailwind CSS, and Vite to provide a smooth, optimized user experience.`,
    link: "https://chickenburgers.onrender.com"
  },
  mern: {
    id: "slideid4",
    title: "DnD Notes",
    description: 
    `Web platform for creating and editing digital notes.
    Backend built with Node.js and Express.js, with MongoDB handling user and note storage.
    Frontend developed with React and Tailwind CSS. Deployment and version control via GitHub and Render`,
    link: "https://dndnotes-5faa.onrender.com/"
  },
} 

export default CardData;