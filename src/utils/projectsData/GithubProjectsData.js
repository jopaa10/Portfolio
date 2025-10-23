import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const githubProjects = [
  {
    id: 1,
    title: 'Synonyms Search',
    description: `A web application for searching synonyms, built with Next.js, TypeScript, and SCSS Modules, following accessibility standards (WCAG) with ARIA attributes.`,
    topics: ['nextjs', 'typescript', 'wcag', 'synonyms', 'glass UI'],
    icon: '🔎',
    link: 'https://github.com/jopaa10/synonymsSearch',
    liveSite: 'https://synonyms-search-em47.vercel.app/'
  },
  {
    id: 2,
    title: 'latest news',
    description:
      'A full-stack, accessible web application that displays the latest headlines using the New York Times API. Users can explore trending and recent news articles through a clean and responsive UI.',
    topics: ['react', 'node', 'fullstack', 'ts', 'orm', 'wcag', 'prisma', 'supabase'],
    icon: '📰',
    link: 'https://github.com/jopaa10/latest-news',
    liveSite: 'https://latest-news-ruby.vercel.app/'
  },
  {
    id: 3,
    title: 'portfolio',
    description:
      'Personal portfolio site showcasing projects, responsive layout and subtle animations.',
    topics: ['react', 'portfolio', 'responsive', 'css-animations'],
    icon: '💼',
    link: 'https://github.com/jopaa10/Portfolio',
    liveSite: 'https://portfolio-josipa-znaor.vercel.app/'
  },
  {
    id: 4,
    title: 'charterag',
    description:
      'Charterag is a responsive web application built using Next.js. It features smooth animations powered by the AOS (Animate on Scroll) library. The styling of the application is crafted using Sass',
    topics: ['nextjs', 'sass', 'aos', 'responsive', 'ts'],
    icon: '⚓️',
    link: 'https://github.com/jopaa10/fe-task/tree/master/charterag',
    liveSite: 'https://charterag.vercel.app/'
  },
  {
    id: 5,
    title: 'photo book',
    description:
      'Responsive photo gallery app with search, modal viewer and accessibility improvements.',
    topics: ['react', 'photo-gallery', 'accessibility', 'responsive'],
    icon: '📷',
    link: 'https://github.com/jopaa10/HCI_Project',
    liveSite: 'https://photo-page.netlify.app/'
  },
  {
    id: 6,
    title: 'random users',
    description: 'User directory using the Random User API with pagination and search.',
    topics: ['react', 'api', 'pagination', 'hooks'],
    icon: '🙎‍♂️',
    link: 'https://github.com/jopaa10/RandomUsers',
    liveSite: ''
  },

  {
    id: 7,
    title: 'pagination',
    description: 'Demo of pagination patterns and client-side state handling.',
    topics: ['javascript', 'pagination', 'ui', 'state-management'],
    icon: '👀',
    link: 'https://github.com/jopaa10/Pagination',
    liveSite: ''
  },
  {
    id: 8,
    title: 'star wars',
    description: 'Star Wars character browser using SWAPI with search and detail views.',
    topics: ['react', 'react native', 'api', 'swapi', 'routing'],
    icon: '⭐️',
    link: 'https://github.com/jopaa10/starWars',
    liveSite: ''
  },

  {
    id: 9,
    title: 'imotski and region',
    description:
      'MERN/Android tourism app (master’s project) featuring attractions, events and maps.',
    topics: ['android', 'mern', 'tourism', 'mobile', 'react native', 'google api', 'mongo'],
    icon: '🏞️',
    link: 'https://github.com/jopaa10/Imotski---Android-Project',
    liveSite: ''
  }
];

export default githubProjects;
