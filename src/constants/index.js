const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Live Map",
    link: "#live-map",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Maps", imgPath: "/images/pin.svg" },
  { text: "Spatial Insights", imgPath: "/images/layers.svg" },
  { text: "Patterns", imgPath: "/images/pattern.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Created Maps" },
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "GIS Tools and Languages" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "ArcGIS Pro",
    imgPath: "/images/logos/arcGIS.png",
  },
  {
    name: "QGIS",
    imgPath: "/images/logos/qgis.png",
  },
  {
    name: "ArcGIS Online",
    imgPath: "/images/logos/arcGISOnline.png",
  },
  {
    name: "SNAP",
    imgPath: "/images/logos/snap.png",
  },
  {
    name: "Experience Builder",
    imgPath: "/images/logos/experienceBuilder.png",
  },
  {
    name: "Earth Engine Code Editor",
    imgPath: "/images/logos/earth-engine.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sql.png",
  },
  {
    name: "Power BI",
    imgPath: "/images/logos/power-bi.png",
  },
  {
    name: "Tableau",
    imgPath: "/images/logos/tableau.png",
  },
  {
    name: "FME",
    imgPath: "/images/logos/fme.png",
  },
  {
    name: "Project Management",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    logoPath: "/images/logo1.png",
    title: "Recruiting File Administrator",
    organization: "Department of National Defence",
    date: "Feb 2026 - Present",
    responsibilities: [
      "Spearheaded the development and implementation of a streamlined travel reimbursement process and data management system, improving operational efficiency within the detachment.",
      "Ensured the quality and accuracy of 50+ applicant files weekly, conducting thorough validation at each stage of the application process.",
      "Upheld strict confidentiality protocols in the management of sensitive applicant data, ensuring compliance with privacy regulations and organizational security standards.",
      "Led applicant bookings for medicals and aircrew selection testing, coordinating schedules and ensuring timely completion of assessments.",
    ],
  },
  {
    logoPath: "/images/logo2.png",
    title: "Data & Analytics Technician (Co-op)",
    organization: "The Regional Municipality of York - Econonmic and Development Services",
    date: "January 2024 - December 2024",
    responsibilities: [
      "Classified and visualized York Region's Yellow Belt by cross-referencing municipal zoning bylaw data in ArcGIS Pro to support affordable housing initiatives.",
      "Identified over 100+ provincially owned sites suitable for affordable housing through weighted multi-criteria analysis and supervised machine learning.",
      "Co-led the development of an interactive resource hub using Esri's Experience Builder to help users navigate urban development tools.",
      "Automated recurring workflows in FME, reducing manual data update times and improving data accuracy for public geospatial data.",
      "Streamlined processing of 300+ development applications (reading, comprehending, and drawing boundaries of site plans), ensuring compliance and management of workflow documentation."
    ],
  },
  {
    logoPath: "/images/logo2.png",
    title: "GIS Analyst (Co-op)",
    organization: "The Regional Municipality of York - Data Analytics and Visualization",
    date: "May 2023 - August 2023",
    responsibilities: [
      "Processed LiDAR data to develop a tool that enables York Region residents to visualize potential rooftop solar energy generation for over 300,000+ buildings",
      "Pushed edits and created the 2023 York Street Atlas using ArcMap, enhancing navigation and urban planning resources.",
      "Validated and corrected 400+ address points for York Region's Next Generation 911 initiative, strengthening emergency response accuracy.",
    ],
  },
  {
    logoPath: "/images/logo3.png",
    title: "Monitoring and Data Services Strategist Support Officer (Co-op)",
    organization: "Environment and Climate Change Canada",
    date: "September 2022 - December 2022",
    responsibilities: [
      "Led Pacific Needs Index analysis at ECCC to identify optimal locations for additional moored buoys using spatial data to enhance marine weather data accuracy.",
      "Produced monthly maps illustrating the status and location of marine moored buoys to support monitoring and analysis efforts.",
    ],
  },
  {
    logoPath: "/images/logo4.png",
    title: "Junior Engineer (Co-op)",
    organization: "Trakcom",
    date: "January 2022 - April 2022",
    responsibilities: [
      "Developed system visualizations for the communications network of the Mark V train, clarifying project scope and implementation steps.",
      "Built and tested an in-house model of the Mark V train communications system to assess feasibility, operational reliability, and performance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/danielhangyilee/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/dhl4488",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
