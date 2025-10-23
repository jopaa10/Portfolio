const skillColors = {
  // ==== Frontend ====
  React: 'linear-gradient(90deg, #61dafb, #21d4fd)',
  Svelte: 'linear-gradient(90deg, #ff3e00, #ff6b35)',
  'Next.js': 'linear-gradient(90deg, #ffffff, #888888)',
  HTML: 'linear-gradient(90deg, #ff3e00, #ff6b35)', // same as Svelte
  'CSS / SCSS': 'linear-gradient(90deg, #264de4, #563d7c)',
  TypeScript: 'linear-gradient(90deg, #3178c6, #2f74c0)',

  // ==== Design ====
  Figma: 'linear-gradient(90deg, #a259ff, #f24e1e)',
  Lightroom: 'linear-gradient(90deg, #388e3c, #aed581)',
  'Adobe Photoshop': 'linear-gradient(90deg, #8d6e63, #d7ccc8)',

  // ==== Backend ====
  'Node.js': 'linear-gradient(90deg, #68a063, #8cc84b)',
  Express: 'linear-gradient(90deg, #ff6b35, #f7931e)',
  MongoDB: 'linear-gradient(90deg, #4db33d, #2c3e50)',
  Supabase: 'linear-gradient(90deg, #3ecf8e, #2f9e7f)',
  Render: 'linear-gradient(90deg, #4263eb, #7c9aff)',

  // ==== WCAG / Accessibility ====
  'Semantic HTML': 'linear-gradient(90deg, #ff9900, #ff5f00)',
  'ARIA Roles': 'linear-gradient(90deg, #ffcc00, #ffaa00)',
  'Keyboard Navigation': 'linear-gradient(90deg, #0033cc, #3366ff)',
  'Screen Reader Testing': 'linear-gradient(90deg, #800080, #9933ff)',

  // ==== Photography ====
  Photography: 'linear-gradient(90deg, #4caf50, #8bc34a)',
  'Drone Usage': 'linear-gradient(90deg, #2196f3, #00bcd4)',
  'Video Creation': 'linear-gradient(90deg, #e91e63, #9c27b0)',

  // ==== Soft Skills ====
  'English Communication': 'linear-gradient(90deg, #007acc, #00bfff)',
  'Problem Solving': 'linear-gradient(90deg, #ff5722, #ff9800)',
  'Team Collaboration': 'linear-gradient(90deg, #4caf50, #81c784)',
  'Continuous Learning': 'linear-gradient(90deg, #009688, #4db6ac)',

  // ==== Project Management ====
  Linear: 'linear-gradient(90deg, #5e60ce, #48bfe3)',
  Jira: 'linear-gradient(90deg, #0052cc, #2684ff)',

  // ==== Testing ====
  Jest: 'linear-gradient(90deg, #99425b, #f29111)',
  Storybook: 'linear-gradient(90deg, #ff4785, #ffae00)',

  // ==== Mobile ====
  'React Native': 'linear-gradient(90deg, #61dafb, #1e90ff)',

  // ==== DevOps & Deployment ====
  Git: 'linear-gradient(90deg, #f1502f, #f7931e)',
  Vercel: 'linear-gradient(90deg, #ff9900, #ffb84d)',
  Netlify: 'linear-gradient(90deg, #00c7b7, #00adb5)',
  RenderDev: 'linear-gradient(90deg, #5a67d8, #667eea)',

  // ==== Databases ====
  Prisma: 'linear-gradient(90deg, #0c344b, #47a8bd)',
  PostgreSQL: 'linear-gradient(90deg, #336791, #648bbf)',

  // ==== Defaults (optional fallback aliases) ====
  JavaScript: 'linear-gradient(90deg, #f7df1e, #f0db4f)',
  Default: 'linear-gradient(90deg, #999, #ccc)'
};

export const getSkillColor = (name) =>
  skillColors[name] || 'linear-gradient(90deg, #61dafb, #21d4fd)';
