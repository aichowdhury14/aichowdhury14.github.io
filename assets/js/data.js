/**
 * ============================================================
 *  PORTFOLIO CONTENT — edit this file to update your site.
 *  No HTML/CSS knowledge needed. Save, commit, push — done.
 *  Every array below renders automatically in main.js.
 * ============================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Atiqul Islam Chowdhury",
    initials: "AIC",
    title: "AI & ML Engineer · Senior Data Scientist",
    tagline:
      "I build end-to-end machine learning systems — from raw data pipelines to production models — for banking, fintech, and research.",
    location: "Dhaka, Bangladesh",
    email: "a.i.shovan10@gmail.com",
    phone: "+8801766999954",
    resumeFile: "assets/resume/Atiqul-Islam-Chowdhury-CV.pdf",
    photo: "assets/img/profile.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/atiqulislamchowdhury/",
      github: "https://github.com/aichowdhury14",
      site: "https://sites.google.com/view/atiqulislamchowdhury",
      scholar: "https://scholar.google.com/citations?user=Q-crQH4AAAAJ&hl=en",
      researchgate: "https://www.researchgate.net/profile/Atiqul-Islam-Chowdhury/research",
    },
    researchInterests: ["Machine Learning", "Deep Learning", "Image Processing", "Data Mining", "Internet of Things (IoT)"],
  },

  about: [
    "I turn raw, messy data into machine learning systems that make real decisions — in production, at scale, under regulatory scrutiny. That's the work I've built my career around.",
    "Over 6+ years in the data and AI industry and 8+ years in research, I've taken models from notebook to production across banking, fintech, and applied science: fraud detection that runs in near real-time, AML monitoring that flags what humans miss, credit risk and churn models banks can rely on, and forecasting that changes how businesses plan.",
    "Today that means architecting predictive AI at BRAC Bank PLC — end-to-end, from data pipelines to deployed models. I've partially completed my M.Sc. in Computer Science and Engineering (Data Science) at United International University — major courses done, thesis pending — and completed an Advanced Certificate for Management Professionals (ACMP) from the Institute of Business Administration, University of Dhaka. Alongside that, I've co-authored 22 publications across journals, conferences, and book chapters in machine learning, deep learning, and computer vision.",
    "Beyond delivery, I teach data analytics, judge data science competitions, and mentor the next wave of analysts on responsible AI.",
  ],

  experience: [
    {
      company: "BRAC Bank PLC",
      role: "Associate Manager, R&D (Predictive AI)",
      location: "Dhaka, Bangladesh",
      start: "Apr 2025",
      end: "Present",
      points: [
        "Architect and deploy end-to-end ML pipelines — from data ingestion and feature engineering to model training, evaluation, and on-premise production deployment on Windows Server infrastructure.",
        "Develop and maintain secure, scalable AI/ML solutions in adherence with data privacy regulations (GDPR-equivalent standards) and internal compliance frameworks.",
        "Designed customer segmentation and personalization models using clustering and RFM algorithms, improving targeting precision for banking products.",
        "Fine-tune predictive models for credit risk scoring, churn prediction, and revenue forecasting under strict banking regulatory compliance.",
        "Engineered end-to-end data pipelines and optimized database procedures for production-grade data reliability feeding ML and reporting.",
        "Built an ATM cash-loading optimization model forecasting cash demand across branches, reducing idle cash and cash-out incidents.",
        "Built an occupation-based transaction portfolio monitoring model for AML compliance, flagging anomalous customer behavior.",
        "Designed and deployed a near real-time fraud detection model for bKash transactions, reducing false positives.",
        "Build interactive executive dashboards in Power BI integrating ML-driven KPIs for strategic decision-making.",
        "Mentor junior analysts on ML best practices, model explainability, and responsible AI.",
      ],
    },
    {
      company: "Next Ventures",
      role: "Senior Data Analyst",
      location: "Dhaka, Bangladesh",
      start: "Feb 2024",
      end: "Apr 2025",
      points: [
        "Conducted in-depth EDA and statistical modeling to surface actionable business insights that directly influenced product roadmap decisions.",
        "Built and deployed ML models (regression, time-series forecasting with Prophet/ARIMA) for revenue prediction, improving forecast accuracy.",
        "Designed and maintained interactive dashboards in Metabase and Looker Studio for real-time KPI monitoring.",
        "Architected database replication pipelines for MySQL and PostgreSQL using AWS DMS, ensuring high availability and zero-downtime migrations.",
        "Created comprehensive Data Flow Diagrams (DFDs) and technical documentation for engineering/business stakeholders.",
      ],
    },
    {
      company: "FinSource Limited",
      role: "Team Lead (Data)",
      location: "Dhaka, Bangladesh",
      start: "Jun 2023",
      end: "Jan 2024",
      points: [
        "Managed the Data team's day-to-day operations and deliverables.",
        "Maintained accurate participant records for 401(k) plans.",
        "Developed and optimized complex database objects — stored procedures, functions, triggers, views — for scalable application development.",
        "Partnered cross-functionally to resolve data challenges and support decision-making.",
        "Generated compliance reports for plan sponsors and participants and monitored plan performance.",
      ],
    },
    {
      company: "FinSource Limited",
      role: "Data Analyst",
      location: "Dhaka, Bangladesh",
      start: "Aug 2021",
      end: "May 2023",
      points: [
        "Worked on US Retirement Plan Services.",
        "Developed Crystal Reports/APIs for data migration, scrubbing, and file mapping across stakeholder systems.",
        "Produced operational reports covering essential business metrics for executive decision-making.",
        "Wrote scripts to enhance company application functionality and performance.",
        "Provided Salesforce admin support and cross-department reporting.",
      ],
    },
    {
      company: "SureCash · TallyKhata",
      role: "Associate Data Analyst",
      location: "Dhaka, Bangladesh",
      start: "Dec 2020",
      end: "Jul 2021",
      points: [
        "Designed SQL/PL-SQL and automated Python scripts for data extraction, reporting, and stakeholder email generation.",
        "Created investor-facing dashboards in Google Data Studio (Looker Studio) for board meetings.",
        "Developed Python ETL scripts.",
        "Built ML classification models predicting user behavior categories for a fintech platform.",
      ],
    },
    {
      company: "Pioneer Alpha",
      role: "Research & Data Analyst",
      location: "Dhaka, Bangladesh",
      start: "Dec 2019",
      end: "Dec 2020",
      points: [
        "Developed research projects through to publication.",
        "Collected, organized, and interpreted organizational data to inform decisions.",
        "Built Machine Learning and Neural Network models for research projects.",
      ],
    },
  ],

  projects: [
    {
      title: "BD Invest Hub",
      tag: "Personal Project · FinTech",
      image: "assets/img/projects/bd-invest-hub.jpg",
      description:
        "A live rate-comparison and investment calculator for Bangladeshi savers — tracks 55+ products across 25 institutions (FDR, DPS, Sanchayapatra, Treasury instruments) with tax-aware maturity projections and smart recommendations. Backed by a scheduled scraper pipeline feeding the same database as a manual-entry admin panel, shipped as an installable PWA.",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "GitHub Actions"],
      link: "https://bd-invest-hub.vercel.app/",
      linkLabel: "Visit the live site",
    },
    {
      title: "Real-Time Fraud Detection — bKash Transactions",
      tag: "Banking · Fraud & Risk",
      image: "assets/img/projects/fraud-detection.svg",
      description:
        "Behavioral and transactional feature engineering to identify suspicious mobile-financial-services activity in near real-time while reducing false positives.",
      stack: ["Python", "Scikit-learn", "SQL", "Production ML"],
    },
    {
      title: "ATM Cash-Loading Optimization",
      tag: "Banking · Forecasting",
      image: "assets/img/projects/atm-cash-optimization.svg",
      description:
        "Forecasting model for branch-level cash demand that reduced idle cash and cash-out incidents while improving provisioning efficiency.",
      stack: ["Time-Series", "Prophet", "SQL", "Power BI"],
    },
    {
      title: "AML Transaction Monitoring by Occupation Profile",
      tag: "Banking · Compliance",
      image: "assets/img/projects/aml-monitoring.svg",
      description:
        "Behavioral monitoring model that profiles customer transactions against declared occupation to flag anomalous patterns for AML investigation.",
      stack: ["Python", "Feature Engineering", "SQL"],
    },
    {
      title: "Customer Segmentation & Personalization",
      tag: "Banking · Marketing Analytics",
      image: "assets/img/projects/customer-segmentation.svg",
      description:
        "Clustering and RFM-based segmentation to improve targeting precision for banking product campaigns.",
      stack: ["K-Means", "RFM", "Scikit-learn"],
    },
    {
      title: "Revenue Forecasting (Prophet / ARIMA)",
      tag: "Product Analytics",
      image: "assets/img/projects/revenue-forecasting.svg",
      description:
        "Time-series forecasting models for revenue prediction, improving accuracy of product and business planning.",
      stack: ["Prophet", "ARIMA", "Python", "Looker Studio"],
    },
    {
      title: "Lung Cancer Early Detection Framework (IoT + DSS)",
      tag: "Published Research",
      image: "assets/img/projects/lung-cancer-detection.svg",
      description:
        "A decision-support framework combining IoT signals with ML for early-stage lung cancer detection, published at IEEE 3ICT 2023.",
      stack: ["Machine Learning", "IoT", "Research"],
      link: "https://ieeexplore.ieee.org/document/10391757",
    },
    {
      title: "Credit Risk Scoring & Churn Prediction",
      tag: "Banking · Risk Modeling",
      image: "assets/img/projects/credit-risk-churn.svg",
      description:
        "Predictive models for credit risk scoring and customer churn, tuned to hold up under strict banking regulatory compliance requirements.",
      stack: ["Python", "Logistic Regression", "XGBoost", "SQL"],
    },
    {
      title: "Zero-Downtime Database Migration (AWS DMS)",
      tag: "Data Engineering",
      image: "assets/img/projects/db-migration.svg",
      description:
        "Architected MySQL and PostgreSQL replication pipelines with AWS Database Migration Service, achieving high availability with zero downtime during cutover.",
      stack: ["AWS DMS", "MySQL", "PostgreSQL"],
    },
    {
      title: "Executive KPI Dashboards",
      tag: "Banking · BI",
      image: "assets/img/projects/executive-dashboards.svg",
      description:
        "Interactive, ML-integrated executive dashboards in Power BI that support strategic decision-making across departments at BRAC Bank.",
      stack: ["Power BI", "DAX", "SQL"],
    },
  ],

  skills: [
    { category: "Programming", items: ["Python", "R", "SQL / PL-SQL", "Java", "C"] },
    {
      category: "Machine Learning",
      items: [
        "XGBoost",
        "LightGBM",
        "Random Forest",
        "SVM",
        "KNN",
        "Logistic & Linear Regression",
        "K-Means",
        "Scikit-learn",
        "RFM Analysis",
        "Model Explainability (SHAP/LIME)",
      ],
    },
    {
      category: "Deep Learning & AI",
      items: [
        "TensorFlow",
        "Keras",
        "CNNs",
        "RNNs / LSTMs",
        "Transfer Learning",
        "NLP",
        "Computer Vision",
        "Generative AI / LLMs",
      ],
    },
    {
      category: "Data Science",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "SciPy",
        "OpenCV",
        "Prophet",
        "ARIMA",
        "Feature Engineering",
      ],
    },
    {
      category: "Databases",
      items: ["Oracle", "PostgreSQL", "MySQL", "PL/SQL", "T-SQL", "Stored Procedures", "Query Optimization", "Database Design", "ETL"],
    },
    { category: "Data Migration", items: ["AWS Database Migration Service", "DBConvert"] },
    {
      category: "Visualization & BI",
      items: ["Power BI", "Tableau", "Looker Studio", "Metabase", "Superset", "DAX", "Dashboard Design", "Data Storytelling"],
    },
    { category: "Reporting", items: ["Crystal Reports", "MS Office", "Advanced Excel", "Report Automation"] },
    { category: "Web", items: ["HTML", "CSS", "JavaScript"] },
    { category: "MLOps & Deployment", items: ["Git", "Model Deployment", "CI/CD Pipelines"] },
    { category: "Tools", items: ["ClickUp", "Notion", "Azure DevOps"] },
  ],

  education: [
    {
      school: "United International University",
      degree: "M.Sc. in Computer Science and Engineering — Data Science",
      date: "2020 – 2022",
      detail: "MSCSE Scholarship, Fall 2020 Trimester · Coursework complete, thesis pending",
    },
    {
      school: "Ahsanullah University of Science and Technology",
      degree: "B.Sc. in Computer Science and Engineering",
      date: "Jun 2015 – Jul 2019",
      detail: "Thesis: A Study on Image Processing to Facilitate Business System by Multiple Barcode Detection",
    },
    {
      school: "Institute of Business Administration, University of Dhaka",
      degree: "Advanced Certificate for Management Professionals (ACMP) 4.0",
      date: "Jul 2025 – Sep 2025",
      detail: "",
    },
  ],

  // "link" points to a locally-hosted PDF where we have the actual certificate on file
  // (assets/certificates/) — guaranteed to work, no dependency on third-party verify pages.
  certifications: [
    {
      title: "Google Advanced Data Analytics (Specialization)",
      issuer: "Coursera / Google",
      date: "Apr 2026",
      link: "assets/certificates/google-advanced-data-analytics-specialization.pdf",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
      link: "assets/certificates/oracle-oci-genai-professional.pdf",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "Aug 2025",
      link: "assets/certificates/oracle-ai-foundations-associate.pdf",
    },
    {
      title: "Applied Machine Learning: Algorithms",
      issuer: "LinkedIn Learning",
      date: "Dec 2024",
      link: "assets/certificates/linkedin-applied-ml-algorithms.pdf",
    },
    {
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      date: "Aug 2022",
      link: "https://www.hackerrank.com/certificates/3aa2e454b635",
    },
    {
      title: "Google Data Analytics (Specialization)",
      issuer: "Coursera / Google",
      date: "Mar 2022",
      link: "assets/certificates/google-data-analytics-specialization.pdf",
    },
    {
      title: "Database Design",
      issuer: "DataCamp",
      date: "Apr 2021",
      link: "assets/certificates/datacamp-database-design.pdf",
    },
    {
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "Apr 2021",
      link: "https://www.hackerrank.com/certificates/7d5d74f387f5",
    },
    {
      title: "Machine Learning and AI Foundations: Predictive Modeling Strategy at Scale",
      issuer: "LinkedIn Learning",
      date: "Apr 2020",
      link: "assets/certificates/linkedin-ml-ai-foundations-predictive-modeling.pdf",
    },
    {
      title: "Machine Learning for Everyone",
      issuer: "DataCamp",
      date: "Mar 2020",
      link: "assets/certificates/datacamp-ml-for-everyone.pdf",
    },
    {
      title: "Understanding Machine Learning",
      issuer: "DataCamp",
      date: "Mar 2020",
      link: "https://shorturl.at/HOtUt",
    },
    {
      title: "Machine Learning with Tree-Based Models in Python",
      issuer: "DataCamp",
      date: "Feb 2020",
      link: "assets/certificates/datacamp-ml-tree-based-models.pdf",
    },
  ],

  // 22 publications total, grouped by type — sourced from Google Scholar / sites.google.com/view/atiqulislamchowdhury/publications
  publications: [
    {
      category: "Journal Articles",
      items: [
        {
          title: "A Survey on Dimensionality Reduction Techniques for Time-series Data",
          venue: "IEEE Access",
          date: "Apr 2023",
          link: "https://ieeexplore.ieee.org/document/10107391",
        },
        {
          title: "An Approach to Facilitate Business System by Multiple Barcode Detection using Faster RCNN",
          venue: "International Journal of Applied Information Systems (IJAIS), Vol. 12, No. 26",
          date: "Dec 2019",
          link: "https://www.ijais.org/archives/volume12/number26/1073-2019451835",
        },
        {
          title: "A Study on Multiple Barcode Detection from an Image in Business System",
          venue: "International Journal of Computer Applications (IJCA), Vol. 181, No. 37",
          date: "Jan 2019",
          link: "https://www.ijcaonline.org/archives/volume181/number37/30275-2019918340",
        },
        {
          title: "A Brief Review on Different Driver's Drowsiness Detection Techniques",
          venue: "International Journal of Image, Graphics and Signal Processing (IJIGSP), Vol. 12, No. 3",
          date: "Jun 2020",
          link: "https://www.mecs-press.org/ijigsp/ijigsp-v12-n3/v12n3-5.html",
        },
        {
          title: "A Study to Evaluate Different Classifiers on the Basis of Performance of the Prediction for Major Common Diseases",
          venue: "International Journal of Science and Research (IJSR), Vol. 8, No. 7",
          date: "Jul 2019",
          link: "https://www.ijsr.net/search_index_results_paperid.php?id=ART20199345",
        },
      ],
    },
    {
      category: "Conference Papers",
      items: [
        {
          title: "A Framework for Lung Cancer Detection at Early Stages with IoT and Decision Support System",
          venue: "IEEE 3ICT — Bahrain",
          date: "Nov 2023",
          link: "https://ieeexplore.ieee.org/document/10391757",
        },
        {
          title: "An Automated System in ATM Booth Using Face Encoding and Emotion Recognition Process",
          venue: "ACM IPMV — Thailand",
          date: "Aug 2020",
          link: "https://dl.acm.org/doi/10.1145/3421558.3421567",
        },
        {
          title: "hActNET: An Improved Neural Network based Method in Recognizing Human Activities",
          venue: "IEEE — Multidisciplinary Studies & Innovative Technologies — Turkey",
          date: "Oct 2020",
          link: "https://ieeexplore.ieee.org/document/9254992",
        },
        {
          title: "An Automated Approach for the Recognition of Bengali License Plates",
          venue: "IEEE ICECIT — Bangladesh",
          date: "Sep 2021",
          link: "https://ieeexplore.ieee.org/abstract/document/9641214",
        },
        {
          title: "A Deep Learning Based Approach for Real-time Driver Drowsiness Detection",
          venue: "IEEE ICEEICT — Bangladesh",
          date: "Nov 2021",
          link: "https://ieeexplore.ieee.org/document/9667944",
        },
        {
          title: "An Optimization Approach to Improve Classification Performance in Cancer and Diabetes Prediction",
          venue: "IEEE ECCE — Bangladesh",
          date: "Feb 2019",
          link: "https://ieeexplore.ieee.org/document/8679413",
        },
        {
          title: "A Neural Network Based Approach for Recognition of Basic Emotions from Speech",
          venue: "IEEE TENSYMP — Bangladesh",
          date: "Jun 2020",
          link: "https://ieeexplore.ieee.org/document/9230641",
        },
        {
          title: "A Comparative Analysis of Different Approach for Basic Emotions Recognition from Speech",
          venue: "IEEE ICECIT — Bangladesh",
          date: "Sep 2021",
          link: "https://ieeexplore.ieee.org/abstract/document/9641208",
        },
        {
          title: "Internet of Things (IoT): Vulnerabilities, Security Concerns and Things to Consider",
          venue: "IEEE ICCCNT — India",
          date: "Jul 2020",
          link: "https://ieeexplore.ieee.org/document/9225283",
        },
        {
          title: "A Comparative Analysis on Bangla Handwritten Digit Recognition with Data Augmentation and Non-Augmentation Process",
          venue: "IEEE HORA — Turkey",
          date: "Jun 2020",
          link: "https://ieeexplore.ieee.org/document/9152905",
        },
        {
          title: "A Review on Diabetes Self-management Applications for Android Smartphones: Perspective of Developing Countries",
          venue: "IEEE HORA — Turkey",
          date: "Jun 2020",
          link: "https://ieeexplore.ieee.org/document/9152932",
        },
        {
          title: "An Investigation into the Level of Valence Offered by Different Pointing Devices Against Challenging Tasks",
          venue: "IEEE ICACSIS — Indonesia",
          date: "Oct 2020",
          link: "https://ieeexplore.ieee.org/document/9263179",
        },
      ],
    },
    {
      category: "Book Chapters",
      items: [
        {
          title: "An Exploration of Machine Learning and Deep Learning-Based Diabetes Prediction Techniques",
          venue: "Springer — Emerging Technologies in Data Mining and Information Security (AISC)",
          date: "Sep 2022",
          link: "https://link.springer.com/chapter/10.1007/978-981-19-4676-9_23",
        },
        {
          title: "Artistic Natural Images Generation Using Neural Style Transfer",
          venue: "Springer — Emerging Technologies in Data Mining and Information Security (AISC)",
          date: "2021",
          link: "https://link.springer.com/chapter/10.1007/978-981-15-9927-9_31",
        },
        {
          title: "Robo-friend: Can a Social Robot Empathize with Your Feelings Effectively?",
          venue: "Springer — Advanced Computing and Intelligent Engineering (AISC)",
          date: "2021",
          link: "https://link.springer.com/chapter/10.1007/978-981-33-4299-6_63",
        },
      ],
    },
    {
      category: "Abstracts & Short Papers",
      items: [
        {
          title: "Empowering Bangladesh with the Aid of Artificial Intelligence & Industry 4.0",
          venue: "Academia Letters",
          date: "Aug 2021",
          link: "https://www.academia.edu/50948115",
        },
        {
          title: "A Study to Test the Performance of Different Classifiers for Predicting Major Common Diseases",
          venue: "6th International Conference on Natural Science and Technology (ICNST) — Bangladesh",
          date: "Mar 2019",
          link: "https://scholar.google.com/citations?user=Q-crQH4AAAAJ&hl=en",
        },
      ],
    },
  ],

  // Visual badges/certificate images — drop matching files into assets/img/certificates/
  // Any entry whose image file isn't present yet is automatically hidden (no broken-image icons).
  certificateGallery: [
    { image: "assets/img/certificates/ml.jpg", label: "Machine Learning" },
    { image: "assets/img/certificates/android.jpg", label: "Android Development" },
    { image: "assets/img/certificates/hackerrank-python.png", label: "HackerRank — Python" },
    { image: "assets/img/certificates/sql-1-certificate.png", label: "SQL Certificate I" },
    { image: "assets/img/certificates/sql-2-certificate.png", label: "SQL Certificate II" },
    { image: "assets/img/certificates/cf-jquery.jpg", label: "jQuery" },
    { image: "assets/img/certificates/cf-python.jpg", label: "Python" },
    { image: "assets/img/certificates/cf-sql.jpg", label: "SQL" },
  ],

  academicProjects: [
    { title: "SAir AIR BD LTD — Official Website", image: "assets/img/projects/academic-website.svg", stack: ["HTML", "CSS", "JavaScript", "Python", "Django"] },
    { title: "Face Encoding with Emotion Recognition", image: "assets/img/projects/academic-face-encoding.svg", stack: ["Python", "Jupyter Notebook"] },
    { title: "BMI & CGPA Analysis Based on Personality", image: "assets/img/projects/academic-bmi-cgpa.svg", stack: ["Python", "Jupyter Notebook"] },
    { title: "Banking Management System", image: "assets/img/projects/academic-banking.svg", stack: ["Java", "NetBeans"] },
    { title: "String Recognizer (Android)", image: "assets/img/projects/academic-string-recognizer.svg", stack: ["Java", "Android Studio"] },
    { title: "Text to Speech (Android)", image: "assets/img/projects/academic-text-to-speech.svg", stack: ["Java", "Android Studio"] },
    { title: "Teacher-Student Collaboration System", image: "assets/img/projects/academic-teacher-student.svg", stack: ["C#", "ASP.NET"] },
    { title: "Hospital Management System", image: "assets/img/projects/academic-hospital.svg", stack: ["PL/SQL", "XAMPP"] },
    { title: "Restaurant Management System", image: "assets/img/projects/academic-restaurant.svg", stack: ["MySQL", "XAMPP"] },
  ],

  book: {
    title: "ডেটার রাজ্যে মেশিন লার্নিং এবং এআই",
    titleEn: "Machine Learning and AI in the Realm of Data",
    description:
      "A Bengali-language beginner's guide to data science and machine learning, written for readers starting from zero prior knowledge.",
    rating: 5,
    ratingCount: 6,
    link: "https://www.rokomari.com/book/570822/datar-rajje-machine-learning-ebong-ai?hasEbook=on",
  },

  honors: [
    {
      role: "Data Instructor",
      org: "Data Analytics Career Bootcamp — Human Development Network Bangladesh (HDNB)",
      date: "Jul 2024 – Present",
      location: "Dhaka, Bangladesh",
    },
    {
      role: "Judge",
      org: "1st Data Innovators Challenge by AI Expert Career",
      date: "Oct 2024",
      location: "DIPTI, Dhaka, Bangladesh",
    },
    {
      role: "Guest Speaker",
      org: "Exploring Data Analytics: Basic & Career Opportunities",
      date: "Sep 2024",
      location: "UITS, Dhaka, Bangladesh",
    },
  ],
};
