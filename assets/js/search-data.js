// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed papers, preprints, and presentations. See also my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected projects across sustainability, computer vision, and language models.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, research, industry experience, awards, and skills. Download the full PDF above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-won-1st-place-in-the-sustainability-track-at-hackharvard-2024-for-u-plan-an-ai-powered-urban-heat-island-mitigation-platform",
          title: 'Won 1st Place in the Sustainability Track at HackHarvard 2024 for U-Plan, an...',
          description: "",
          section: "News",},{id: "news-our-paper-on-joint-local-grounded-action-transformation-for-sim-to-real-multi-agent-traffic-control-was-published-in-the-reinforcement-learning-journal-and-presented-at-rlc-2025",
          title: 'Our paper on Joint-Local Grounded Action Transformation for sim-to-real multi-agent traffic control was...',
          description: "",
          section: "News",},{id: "news-received-an-honorable-mention-for-the-cra-outstanding-undergraduate-researcher-award-2025-26",
          title: 'Received an Honorable Mention for the CRA Outstanding Undergraduate Researcher Award (2025–26).',
          description: "",
          section: "News",},{id: "news-honored-to-be-named-a-fulton-outstanding-graduate-by-asu-s-ira-a-fulton-schools-of-engineering",
          title: 'Honored to be named a Fulton Outstanding Graduate by ASU’s Ira A. Fulton...',
          description: "",
          section: "News",},{id: "news-starting-my-m-s-in-machine-learning-at-carnegie-mellon-university",
          title: 'Starting my M.S. in Machine Learning at Carnegie Mellon University! 🐾',
          description: "",
          section: "News",},{id: "projects-circle-ooo",
          title: 'Circle.ooo',
          description: "Capstone Project — AI event and sponsorship marketplace",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_circle/";
            },},{id: "projects-u-plan",
          title: 'U-Plan',
          description: "AI-driven urban heat island mitigation — HackHarvard 2024 winner 🏆",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_uplan/";
            },},{id: "projects-feal",
          title: 'Feal?',
          description: "Fake vs. real image classifier — 97.3% accuracy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_feal/";
            },},{id: "projects-transformersnotfound",
          title: 'TransformersNotFound',
          description: "Building an open-source GPT from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_transformersnotfound/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/ShreyasBachiraju_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%72%65%79%61%73%62%61%63%68%69%72%61%6A%75@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shreyasbachi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shreyasbachiraju", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HBA8ZHwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
