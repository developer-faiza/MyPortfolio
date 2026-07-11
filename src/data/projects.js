import images from './images';

export const skills = [
  'HTML',
  'CSS',
  'Sass',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Git',
  'GitHub',
  'Vercel'
];
export const categories = ['All', 'React', 'Next.js', 'HTML/CSS'];

export const projects = [
  {
    category: 'React',
    title: 'React Portfolio Website',
    tech: 'React.js + Sass + Material UI',
    desc: 'A modern portfolio website built with React, Material UI, and Sass, featuring responsive layouts and a clean, professional design.',
    image: images.reactportfolio,
    demo: 'https://react-portfolio-webb.netlify.app',
    github: 'https://github.com/developer-faiza/React-portfolio'
  },

  {
    category: 'React',
    title: 'Dashboard',
    tech: 'React.js + Chart.js + CSS',
    desc: 'A modern admin dashboard UI built with React and Chart.js featuring analytics cards, charts, responsive layouts, and clean data visualization components for better user experience.',
    image: images.dashboard,
    demo: 'https://dashboard-admin-web.netlify.app',
    github: 'https://github.com/developer-faiza/Admin-dashboard'
  },

  {
    category: 'React',
    title: 'EShop',
    tech: 'React.js + Redux + Firebase',
    desc: 'A fully functional e-commerce application built with React, Redux, and Firebase, featuring authentication, shopping cart, and a modern responsive interface.',
    image: images.eshop,
    demo: 'https://eshop-ecommerce-website.netlify.app',
    github: 'https://github.com/developer-faiza/eShop'
  },

  {
    category: 'React',
    title: 'Meals Application',
    tech: 'React.js + TypeScript + CSS',
    desc: 'A meals application built with React and TypeScript featuring recipe browsing, meal categories, and responsive modern UI design.',
    image: images.meals,
    demo: 'https://meals-application-vite.netlify.app',
    github: 'https://github.com/developer-faiza/Meals-Application'
  },

  {
    category: 'React',
    title: 'Weather App',
    tech: 'React.js + CSS + OpenWeather API',
    desc: 'A responsive weather application built with React.js that fetches real-time weather data using the OpenWeather API. Users can search for any city to view the current temperature, weather conditions, humidity, wind speed, pressure, and sunset time through a clean and user-friendly interface.',
    image: images.weather,
    demo: 'https://weather-app-reactjs0.netlify.app/',
    github: 'https://github.com/developer-faiza/Weather-App'
  },

  {
    category: 'React',
    title: 'Social Media App',
    tech: 'React.js + CSS',
    desc: 'A social media application built with React.js featuring interactive posts, responsive layouts, and modern UI design.',
    image: images.social,
    demo: 'https://socialapp-react-js.netlify.app',
    github: 'https://github.com/developer-faiza/SocialApp-React.js'
  },

  {
    category: 'React',
    title: 'Blogs Website',
    tech: 'React.js + CSS + Fetch API + JSON Server',
    desc: 'A responsive blog application built with React.js that allows users to view, create, and delete blog posts. The project uses React Router for navigation, Fetch API for data handling, and JSON Server as a mock REST API.',
    image: images.blogweb,
    demo: 'https://github.com/developer-faiza/Blogs-App',
    github: 'https://github.com/developer-faiza/Blogs-App'
  },

  {
    category: 'React',
    title: 'Team Member Allocation',
    tech: 'React.js + TypeScript + CSS',
    desc: 'A team management application for allocating members efficiently with interactive UI and responsive layouts.',
    image: images.team,
    demo: 'https://team-member-allocation1.netlify.app',
    github: 'https://github.com/developer-faiza/Team-Member-Allocation'
  },

  {
    category: 'React',
    title: 'Youtube Clone',
    tech: 'React.js + RapidAPI + CSS',
    desc: 'A YouTube clone application integrated with Rapid API to display videos, search functionality, and a modern responsive video browsing UI.',
    image: images.youtube,
    demo: 'https://yt-clone-website.netlify.app',
    github: 'https://github.com/developer-faiza/Youtube-Clone'
  },

  {
    category: 'React',
    title: 'Corona Tracker App',
    tech: 'React.js + Chart.js',
    desc: 'A COVID-19 tracker app displaying real-time statistics, charts, and country-wise data with an interactive and responsive interface.',
    image: images.covid19,
    demo: 'https://corona-trackerapp-react.netlify.app',
    github: 'https://github.com/developer-faiza/Corona-Tracker-App'
  },

  {
    category: 'HTML/CSS',
    title: 'Portfolio Website',
    tech: 'HTML + CSS + JS',
    desc: 'A modern and beautifully designed portfolio website featuring smooth animations, responsive layouts, and light/dark mode support. Built to showcase projects, skills, and contact information in a clean professional style.',
    image: images.portfolio,
    demo: 'https://responsive-portfolio-website11.netlify.app/',
    github: 'https://github.com/developer-faiza/Portfolio-website'
  },

  {
    category: 'HTML/CSS',
    title: 'Responsive Social Media UI',
    tech: 'HTML + CSS + JS',
    desc: 'A fully responsive social media website UI inspired by modern platforms. Designed with clean layouts, interactive sections, and optimized responsiveness for desktop, tablet, and mobile devices.',
    image: images.sm,
    demo: 'https://responsive-socialmedia-webbsite.netlify.app',
    github: 'https://github.com/developer-faiza/Responsive-Social-Media-Website'
  },

  {
    category: 'HTML/CSS',
    title: 'University Landing Page',
    tech: 'HTML + CSS + JS',
    desc: 'A modern university landing page with multiple sections including courses, campus information, testimonials, and contact forms. Designed with responsive layouts and smooth user experience for all screen sizes.',
    image: images.uni,
    demo: 'https://university-website-html-css.netlify.app',
    github: 'https://github.com/developer-faiza/University-Website'
  },

  {
    category: 'HTML/CSS',
    title: 'FoodPanda Website',
    tech: 'HTML + CSS',
    desc: 'A responsive FoodPanda website clone designed with modern layouts, food categories, banners, and clean UI sections. Optimized for mobile and desktop screens with an attractive design.',
    image: images.foodpanda,
    demo: 'https://foodpandawebsiteclone.netlify.app',
    github: 'https://github.com/developer-faiza/foodpanda.'
  },

  {
    category: 'React',
    title: 'Gericht Restaurant (React)',
    tech: 'React.js + CSS',
    desc: 'A premium restaurant website built with React.js featuring elegant UI design, smooth layouts, menu sections, and responsive components to deliver a modern restaurant web experience.',
    image: images.gericht,
    demo: 'https://gericht-website-of-restaurant.netlify.app',
    github: 'https://github.com/developer-faiza/Gericht-Restaurent-website'
  },
  {
    category: 'React',
    title: 'GPT3 Website',
    tech: 'React.js + CSS',
    desc: 'A modern GPT-3 landing page built with React.js, featuring responsive sections, clean UI, and contemporary web design.',
    image: images.gpt3,
    demo: 'https://gpt3-website-using-react.netlify.app',
    github: 'https://github.com/developer-faiza/gpt3-website-using-react'
  },
  {
    category: 'HTML/CSS',
    title: 'E-Commerce Website',
    tech: 'HTML + CSS',
    desc: 'A responsive e-commerce website featuring product listings, categories, shopping sections, and a clean modern shopping interface.',
    image: images.ecommerce,
    demo: 'https://e-commerce-products-website.netlify.app/',
    github: 'https://github.com/developer-faiza/e-commerce-products-website'
  },
  {
    category: 'HTML/CSS',
    title: 'Facebook Clone',
    tech: 'HTML + CSS',
    desc: 'A responsive Facebook clone featuring a modern social feed layout, sidebar navigation, and clean user interface inspired by the original platform.',
    image: images.fb,
    demo: 'https://faceb00k-clone.netlify.app/',
    github: 'https://github.com/developer-faiza/Facebook-clone'
  },
  {
    category: 'React',
    title: 'Registration Form',
    tech: 'React.js + Formik + Yup',
    desc: 'Registration form using formik for form handling and yup for form validation.',
    image: images.form,
    demo: 'https://registration-form-with-formik-and-yup.netlify.app',
    github: 'https://github.com/developer-faiza/Resgistration-Form'
  },
  {
    category: 'HTML/CSS',
    title: 'Manage Landing Page',
    tech: 'HTML + JS + Tailwind CSS',
    desc: 'A clean and modern landing page built with Tailwind CSS featuring responsive sections, smooth layouts, and interactive UI components.',
    image: images.manage,
    demo: 'https://managetailwind-landing-page.netlify.app',
    github: 'https://github.com/developer-faiza/tailwind'
  },
  {
    category: 'React',
    title: 'Restaurant Website (React)',
    tech: 'React.js + CSS',
    desc: 'A responsive restaurant website built with React.js, featuring dynamic menu filtering and a clean, modern user interface.',
    image: images.restaurant,
    demo: 'https://react-restaurant-web.netlify.app/',
    github: 'https://github.com/developer-faiza/Restaurant'
  },
  {
    category: 'HTML/CSS',
    title: 'Snake game',
    tech: 'HTML + CSS + JS',
    desc: 'A simple Snake Game inspired by the classic Nokia mobile game. Control the snake, collect food to grow longer, and try to achieve the highest score without hitting the walls.The project demonstrates game logic, collision detection, score tracking, and keyboard controls.',
    image: images.snake,
    demo: 'https://snake-gamme.netlify.app/',
    github: 'https://github.com/developer-faiza/Snake-Game'
  },

  {
    category: 'HTML/CSS',
    title: 'Barber Shop Website',
    tech: 'HTML + CSS',
    desc: 'A responsive barber shop website featuring modern layouts, service sections, pricing, and a clean user-friendly design.',
    image: images.barber,
    demo: 'https://barbarshop-web.netlify.app',
    github: 'https://github.com/developer-faiza/Barbar-Shop-Website'
  },
  {
    category: 'HTML/CSS',
    title: 'Figma To Html',
    tech: 'HTML + CSS',
    desc: 'A responsive website converted from fimga to html',
    image: images.figmatohtml,
    demo: 'https://figma-to-html11.netlify.app/',
    github: 'https://github.com/developer-faiza/Figma-to-Html'
  },
  {
    category: 'HTML/CSS',
    title: 'Image Editor',
    tech: 'HTML + CSS + JS',
    desc: 'A powerful and easy-to-use image editor that lets you enhance photos with filters, apply preset effects, make quick adjustments, reset changes instantly, and download your edited images with ease.',
    image: images.imgeditor,
    demo: 'https://image-editorr1.netlify.app/',
    github: 'https://github.com/developer-faiza/Image-Editor'
  },

  {
    category: 'HTML/CSS',
    title: 'One Page Website',
    tech: 'HTML + CSS',
    desc: 'A stylish one-page website with smooth scrolling sections, responsive design, and modern layouts for showcasing content beautifully.',
    image: images.onepage,
    demo: 'https://1onepage-website.netlify.app',
    github: 'https://github.com/developer-faiza/OnePage-website'
  },

  {
    category: 'HTML/CSS',
    title: 'Foodies Website',
    tech: 'HTML + CSS + JS',
    desc: 'A modern food website featuring attractive food sections, responsive layouts, and interactive UI elements for a better browsing experience.',
    image: images.foodies,
    demo: 'https://the-foodies-web.netlify.app',
    github: 'https://github.com/developer-faiza/The-Foodies-Website'
  },

  {
    category: 'HTML/CSS',
    title: 'Red Store E-Commerce Website',
    tech: 'HTML + CSS',
    desc: 'A responsive e-commerce website with product sections, banners, and a clean shopping interface inspired by modern online stores.',
    image: images.redstore,
    demo: 'https://redstore-ecommerce-website-design.netlify.app',
    github: 'https://github.com/developer-faiza/Red-store-Ecommerce-Website'
  },
  {
    category: 'React',
    title: 'To-Do List (React)',
    tech: 'React.js + CSS',
    desc: 'A clean and responsive To-Do application built with React.js that helps users organize and manage daily tasks efficiently. The app provides an intuitive interface to create, update, complete, and delete tasks, making task management simple and user-friendly.',
    image: images.todoreact,
    demo: 'https://todo-react-js11.netlify.app/',
    github: 'https://github.com/developer-faiza/To-Do-React'
  },
  {
    category: 'HTML/CSS',
    title: 'Random Choices Picker',
    tech: 'HTML + CSS + JS',
    desc: 'A fun JavaScript application that randomly selects choices with smooth animations and an interactive user experience.',
    image: images.random,
    demo: 'https://random-choices-js.netlify.app',
    github: 'https://github.com/developer-faiza/Random-Choices'
  },

  {
    category: 'HTML/CSS',
    title: 'Kanban Board',
    tech: 'HTML + CSS + JS',
    desc: 'A Kanban board application that helps organize tasks by moving them across different workflow stages through an intuitive drag-and-drop interface.',
    image: images.kanban,
    demo: 'https://kanban-board-website.netlify.app/',
    github: 'https://github.com/developer-faiza/Kanban-Board'
  },
  {
    category: 'React',
    title: 'Quiz Application',
    tech: 'React.js + CSS',
    desc: 'An interactive quiz application with multiple-choice questions, score tracking, and a responsive user-friendly interface.',
    image: images.quiz,
    demo: 'https://quizz-app-react-js.netlify.app',
    github: 'https://github.com/developer-faiza/Quiz'
  },
  {
    category: 'React',
    title: 'Admin Dashboard',
    tech: 'React.js + CSS',
    desc: 'A modern admin dashboard built with React.js featuring analytics cards, charts, and responsive management panels.',
    image: images.admindashboard,
    demo: 'https://admin-app-website.netlify.app',
    github: 'https://github.com/developer-faiza/Dashboard-'
  },

  {
    category: 'HTML/CSS',
    title: 'Books',
    tech: 'HTML + CSS + JS',
    desc: 'A beautifully designed books website showcasing book collections, categories, and responsive layouts for readers.',
    image: images.books,
    demo: 'https://books-website11.netlify.app',
    github: 'https://github.com/developer-faiza/Books-Website'
  },
  {
    category: 'HTML/CSS',
    title: 'Live User Filter',
    tech: 'HTML + CSS + JS',
    desc: 'A live user filter application that dynamically searches and filters users instantly with a clean responsive interface.',
    image: images.liveuserfilter,
    demo: 'https://live-user-filter-website.netlify.app',
    github: 'https://github.com/developer-faiza/live-user-filter'
  },
  {
    category: 'HTML/CSS',
    title: 'CSS Grid',
    tech: 'HTML + CSS',
    desc: 'A CSS Grid layout project demonstrating responsive grid designs and modern web layout techniques.',
    image: images.cssgrid,
    demo: 'https://css-gridd.netlify.app',
    github: 'https://github.com/developer-faiza/Css-Grid'
  },
  {
    category: 'Next.js',
    title: 'Blog App',
    tech: 'Next.js + React.js + Tailwind CSS + Sass',
    desc: 'A nicely styled blog app!',
    image: images.blog,
    demo: 'https://graphcms-blog-eight-delta.vercel.app',
    github: 'https://github.com/developer-faiza/graphcms_blog'
  },
  {
    category: 'HTML/CSS',
    title: 'Dwello Real State Site',
    tech: 'HTML + CSS + JS',
    desc: 'Find your perfect property with our real estate website. Browse residential and commercial listings, compare options, and connect with trusted property agents.',
    image: images.dwello,
    demo: 'https://dwello-real-state-site.netlify.app',
    github: 'https://github.com/developer-faiza/Dwello-Real-State-Site'
  },

  {
    category: 'HTML/CSS',
    title: 'Test-Project',
    tech: 'HTML + CSS',
    desc: 'A simple responsive web project designed with clean layouts and modern styling techniques.',
    image: images.testp,
    demo: 'https://test-project-012.netlify.app',
    github: 'https://github.com/developer-faiza/test-project'
  },
  {
    category: 'HTML/CSS',
    title: 'Restaurant Landing Page (HTML/CSS)',
    tech: 'HTML + CSS',
    desc: 'A responsive restaurant website with elegant sections, menu displays, and a modern dining experience design.',
    image: images.restaurant1,
    demo: 'https://restaurant-web11.netlify.app',
    github: 'https://github.com/developer-faiza/Restaurant-web'
  },
  {
    category: 'HTML/CSS',
    title: 'To Do List',
    tech: 'HTML + CSS + JS',
    desc: 'A responsive to-do list application with task management, add/delete functionality, and a clean user interface.',
    image: images.todo,
    demo: 'https://a-to-do-list-web.netlify.app',
    github: 'https://github.com/developer-faiza/to-do-list'
  },
  {
    category: 'HTML/CSS',
    title: 'Vertical Slider',
    tech: 'HTML + CSS + JS',
    desc: 'A smooth vertical slider project with animated transitions and responsive interactive user experience.',
    image: images.verticalslider,
    demo: 'https://vertical-sliderr.netlify.app/',
    github: 'https://github.com/developer-faiza/vertical-slider'
  }
];
