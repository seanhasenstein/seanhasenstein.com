// export const everdaysItems = [
//   'Built and shipped features end-to-end from conception to production using React, Next.js, Node.js and Express, deploying almost daily.',
//   'Translated Figma designs and wireframes into pixel-perfect, responsive UI components with seamless user experiences.',
//   'Built scalable backend architecture with optimized database schemas and Express REST APIs, including core business logic for life insurance quotes and underwriting workflows.',
//   'Collaborated cross-functionally with engineering, design, sales, and marketing teams to deliver business-critical features and integrations.',
//   'Integrated 10+ third-party APIs including Salesforce, HubSpot, Klaviyo, Twilio, and multiple insurance partner systems.',
//   'Participated in technical architecture decisions focused on performance, scalability, and security.',
//   'Analyzed technical requirements and delivered innovative solutions under tight deadlines and changing specifications.',
//   'Conducted thorough code reviews and mentored team members to maintain high code quality and knowledge sharing.',
// ];

// export const freelanceItems = [
//   'Designed and developed SEO-optimized marketing websites focused on user conversion and lead generation.',
//   'Built custom full-stack e-commerce applications with Stripe integration, inventory management, and admin dashboards.',
//   'Delivered complete web solutions for 9+ clients across diverse industries including apparel, education, sports organizations, and manufacturing.',
//   'Provided additional IT services including email management, marketing automation, and technical consulting.',
//   'Managed entire project lifecycle from client consultation and requirements gathering to deployment and ongoing support.',
// ];

export const workExamples = [
  {
    id: 1,
    title: 'Macaport',
    description:
      'A screen printing company that provides online stores for businesses, organizations, teams, etc.',
    domain: 'macaport.com',
    img: 'macaport.png',
    height: 42,
    width: 42,
    href: 'https://demo.macaport.com/store/64ee1e2a3eb408000962ac26',
  },
  {
    id: 2,
    title: 'Officials Connection',
    description:
      'A marketing and registration platform for high school and college basketball officials camps.',
    domain: 'officialsconnection.org',
    img: 'officials-connection.png',
    height: undefined,
    width: undefined,
    href: 'https://officialsconnection.org/',
  },
  {
    id: 3,
    title: 'Responsible Driving School LLC',
    description:
      "Sheboygan County's top driver education program, with 25+ years of drivers education instruction.",
    domain: 'driveresponsible.com',
    img: 'responsible-driving-school-llc.png',
    height: 42,
    width: 42,
    href: 'https://www.driveresponsible.com/',
  },
  {
    id: 4,
    title: 'Zabel Monuments',
    description:
      'Serves the Sheboygan, Manitowoc, and Green Bay areas with beautifully crafted memorials.',
    domain: 'zabelmonuments.com',
    img: 'zabel.png',
    height: undefined,
    width: undefined,
    href: 'https://zabelmonuments.com/',
  },
  {
    id: 5,
    title: 'Sheboygan Monument & Stone Works',
    description:
      'Provides the highest quality memorial services in Sheboygan and the surrounding area.',
    domain: 'sheboyganmonuments.com',
    img: 'sheboygan.png',
    height: undefined,
    width: undefined,
    href: 'https://sheboyganmonuments.com/',
  },
  {
    id: 6,
    title: 'Falls Monument Co.',
    description:
      'Has served the Sheboygan Falls and southeast Wisconsin community for over 70 years.',
    domain: 'fallsmonument.com',
    img: 'falls.png',
    height: undefined,
    width: undefined,
    href: 'https://fallsmonument.com/',
  },
  {
    id: 7,
    title: 'Van Gemert Memorials',
    description:
      'Has provided memorial products and services to Green Bay and northeast Wisconsin since 1909.',
    domain: 'vangemertmemorials.com',
    img: 'vangemert.png',
    height: undefined,
    width: undefined,
    href: 'https://vangemertmemorials.com/',
  },
];

export const freelanceProjects = [
  {
    title: 'Macaport',
    openModal: true,
    description:
      'Built a comprehensive e-commerce platform for this custom apparel screen printing company. Developed customer-facing marketing site with SEO optimization, individual client storefronts, and robust admin dashboard managing multi-store operations, inventory tracking, order processing, and fulfillment workflows for the business.',
    featuredImg: '/macaport-featured.webp',
    hrefs: [
      {
        label: 'macaport.com',
        url: 'https://macaport.com/store/64ee1e2a3eb408000962ac26',
      },
    ],
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'React Query',
      'Styled Components',
      'Node.js',
      'MongoDB',
      'Stripe',
      'AWS',
      'Vercel',
    ],
    projectImagesPath: '/projects/macaport',
    totalImages: 40,
  },
  {
    title: 'Monument Company Websites',
    openModal: false,
    description:
      'Designed and developed a series of SEO-optimized marketing websites for local monument companies. Each site includes detailed information about products and services, photo galleries, and integrated contact forms to facilitate customer inquiries and lead generation.',
    featuredImg: '/zabel-featured.webp',
    hrefs: [
      { label: 'zabelmonuments.com', url: 'https://zabelmonuments.com/' },
      { label: 'fallsmonument.com', url: 'https://fallsmonument.com/' },
      {
        label: 'sheboyganmonuments.com',
        url: 'https://sheboyganmonuments.com/',
      },
      {
        label: 'vangemertmemorials.com',
        url: 'https://vangemertmemorials.com/',
      },
    ],
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'Styled Components',
      'AWS',
      'Vercel',
    ],
    projectImagesPath: '/projects/monument-companies',
    totalImages: 44,
  },
  {
    title: 'Officials Connection',
    openModal: true,
    description:
      'Designed and developed a marketing and registration platform for high school and college basketball officials camps. Created a responsive, SEO-optimized website with integrated registration forms, payment processing, and automated email confirmations to streamline the sign-up process for participants. Also includes a custom admin dashboard for managing camp details, registrations, and communications.',
    featuredImg: '/officials-connection-featured.webp',
    hrefs: [
      {
        label: 'officialsconnection.org',
        url: 'https://officialsconnection.org/',
      },
    ],
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'React Query',
      'Styled Components',
      'Node.js',
      'MongoDB',
      'Stripe',
      'AWS',
      'Vercel',
    ],
    projectImagesPath: '/projects/officials-connection',
    totalImages: 18,
  },
  {
    title: 'Lakeshore Officials Association',
    openModal: true,
    description:
      'Designed and developed a membership management platform for the high school sports officials association. Features include account creation and onboarding, availability scheduling, game assignment coordination, annual dues processing, member directory access, and an email communication system for association-wide and sport-specific messaging.',
    featuredImg: '/lakeshore-officials-featured.webp',
    hrefs: [
      {
        label: 'lakeshoreofficials.com',
        url: 'https://www.lakeshoreofficials.com/',
      },
    ],
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'React Query',
      'SCSS',
      'Node.js',
      'MongoDB',
      'Stripe',
      'Vercel',
    ],
    projectImagesPath: '/projects/lakeshore-officials',
    totalImages: 22,
  },
  {
    title: 'Responsible Driving School LLC',
    openModal: false,
    description:
      'Created a modern, responsive website for a local driver education program. The site features detailed information about courses, schedules, and pricing, along with integrated registration forms and contact options to facilitate easy communication with prospective students and parents.',
    featuredImg: '/responsible-driving-featured.webp',
    hrefs: [
      { label: 'driveresponsible.com', url: 'https://driveresponsible.com/' },
    ],
    tags: ['TypeScript', 'React', 'Next.js', 'SCSS', 'MongoDB', 'Vercel'],
    projectImagesPath: '/projects/responsible-driving-school',
    totalImages: 8,
  },
  {
    title: 'Cross Country Application',
    openModal: false,
    description:
      'Developed a comprehensive team management application to streamline my work as a high school cross country coach. Features athlete roster management, meet statistics tracking, automated mile split calculations, letter point determination, season performance analytics, and PDF report generation for athletes and families.',
    featuredImg: '/cross-country-featured.webp',
    hrefs: [],
    tags: ['TypeScript', 'React', 'Next.js', 'SCSS', 'Prisma', 'PostgreSQL'],
    projectImagesPath: '/projects/cross-country',
    totalImages: 18,
  },
];
