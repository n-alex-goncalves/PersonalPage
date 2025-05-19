// Profile
export const ABOUT_ME = `Hi, I'm Nuno Goncalves!

I'm a Specialist Programmer based near London. I build data-intensive tools that help clients and co-workers make informed decisions. After earning a First Class Honours in Computer Science from the University of Bath, I joined Infosys, where I develop critical APIs and AI-powered applications using Python, SQLAlchemy, AWS, and OpenAI.

I spend a lot of time learning—through books (currently reading Manufacturing Consent by Edward Herman and Noam Chomsky), Anki flashcards, Discord study groups, side projects, or asking questions.

If you'd like to connect or ask for some insight, please feel free to reach out via LinkedIn or email.
`

// Work experience cards
export const WORK_EXPERIENCE_DATA = {
    title: 'WORK EXPERIENCE',
    cards: [
        { 
            title: 'Infosys', 
            subtitle: 'Specialist Programmer', 
            date: 'Aug 2022 – Present', 
            description: `Built backend Python APIs using SQLAlchemy, GraphQL, AWS to serve/model PostgreSQL fuel cost data to the frontend, achieving fast response times of under 2.1 seconds.

            Built an email mining application using AI, Azure, Python, SQLAlchemy to extract extract information from email data via an ETL pipeline for RAG.

            Awarded the Infosys Rising Star Award (March 2024) and Rise Insta Award (December 2024) due to team mentorship and project contributions.
            `,
            image: {
                url: './infosys-logo.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',

            },
            skills: ['AWS', 'PYTHON', 'SQLALCHEMY', 'GRAPHQL']
        },
        { 
            title: 'Barclays', 
            subtitle: 'LifeSkills Youth Advisory Councillor', 
            date: 'Jan 2020 – May 2023', 
            description: `Appointed to a national youth advisory board shaping Barclays’ LifeSkills strategy; advised and improved digital toolkits used by 1M+ young people annually.
            
            Featured as a panellist at Barclays LifeSkills Unpacked seminar, helping 300+ educators embed career readiness and soft skills into classroom teaching to better prepare students.

            Delivered workshops to students from underprivileged schools in Taunton Deane, Somerset and Bury, Greater Manchester to motivate and support their exam preparation.
            `,
            image: {
                url: './barclays-logo-3.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',
            },
        },
        { 
            title: 'University of Bath', 
            subtitle: 'Administrative Assistant', 
            date: 'Nov 2021 – Jun 2022',
            description: `Reviewed and verified course descriptions for over 50 university offerings to ensure accuracy.
            
            Identified and corrected errors prior to publication on the university website.
            `,
            image: {
                url: './university-of-bath-logo.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',
            },
        },
        { 
            title: 'University of Bath', 
            subtitle: 'Computer Science Student Ambassador', 
            date: 'Jan 2020 – Oct 2021',
            description: `Led campus tours for prospective students and parents, providing insights into student life and campus facilities. 
            
            Spoke in virtual and in-person Q&A sessions, answering questions for over 50 visitors.`,
            image: {
                url: './university-of-bath-logo.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',
            },
        },
        { 
            title: 'Echobox', 
            subtitle: 'Operation Intern', 
            date: 'Jul 2021 – Aug 2021', 
            description: `Analyzed 40% of Echobox's customer base in Q3, researched 200 – 360 customers weekly and added 2,000+ new company accounts into Salesforce, enhancing Echobox's customer insights.
            
            Built a Salesforce backend solution to reduce no-shows in BDR meetings using automated reminders in SalesForce Flow and Apex.`,            
            image: {
                url: './echobox-logo.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',
            },
            skills: ['JAVA', 'APEX', 'SALESFORCE', 'ANALYTICS']
        },
        { 
            title: 'J.P. Morgan',  
            subtitle: 'Spring Into Technology Intern', 
            date: 'Mar 2020 – Apr 2020', 
            description: `Successfully completed the J.P. Morgan Spring into Technology program, gaining foundational fintech knowledge and valuable insights into the industry.
            
            Took part in J.P. Morgan workshops on distributed databases, cybersecurity, and machine learning, gaining a deeper understanding of their applications in the industry.
            `,
            image: {
                url: './jp-morgan-logo.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',
            },
            skills: ['FINANCE', 'CYBERSECURITY', 'DATABASE']
        },
        // Add more card objects as needed
    ]
};


// Project cards
export const PROJECT_DATA = {
    title: 'PROJECTS',
    cards: [
        { 
            title: 'Turing Machine Lambda Calculus Interpreter', 
            description: "Built a bidirectional Turing machine and lambda calculus translator using JavaScript, Bootstrap, Jest, validating the Church-Turing Thesis in polynomial time.",            
            skills: ['JAVASCRIPT', 'INTERPRETER'],
            image: {
                url: './turing-machine-lambda-calculus-demo-gif.gif',
                width: 360,
                height: 70,
                responsiveWidth: 'w-2/3',
            },
            githubLink: 'https://github.com/n-alex-goncalves/TuringMachineLambdaCalculusInterpreter',
            pageLink: 'https://n-alex-goncalves.github.io/TuringMachineLambdaCalculusInterpreter/'
        },
        { 
            title: 'Bisca Multiplayer', 
            description: "Recreated the Portuguese multiplayer card game Bisca using React; built using a server-client architecture to enable real-time interaction between players.",
            skills: ['REACT', 'BOOTSTRAP', 'NODE.JS', 'SOCKET.IO'],
            image: {
                url: './demo-gif.gif',
                width: 360, 
                height: 70,
                responsiveWidth: 'w-3/4',
            },
            githubLink: 'https://github.com/n-alex-goncalves/OptionsPricingCalculator'
        },
        { 
            title: 'Lambda Calculus Interpreter', 
            description: "Built a JavaScript web app that interprets and reduces lambda calculus expressions to beta normal form; implemented tests using Jest.",            
            skills: ['JAVASCRIPT', 'LAMBDA CALCULUS', 'JEST'],
            image: {
                url: './lambda-calculus-gif.gif',
                width: 360,
                height: 70,
                responsiveWidth: 'w-2/3',
            },
            githubLink: 'https://github.com/n-alex-goncalves/LambdaCalculusInterpreter',
            pageLink: 'https://n-alex-goncalves.github.io/LambdaCalculusInterpreter/'
        },
        { 
            title: 'Chatcord Application', 
            description: "Built a real-time chat application with vanilla JavaScript, enabling users to join rooms and exchange messages online.",            
            skills: ['JAVASCRIPT', 'NODE.JS', 'SOCKET.IO'],
            image: {
                url: './chatcord-demo-gif.gif',
                width: 360, 
                height: 70,
                responsiveWidth: 'w-3/4',
            },
            githubLink: 'https://github.com/n-alex-goncalves/Chatcord-Clone'
        },
        { 
            title: 'Template-Based Icon Matching Tool', 
            description: "Built a Python tool using OpenCV and SIFT to detect and localize specific icons in complex images with 98.5% accuracy and 10.29s runtime.",            
            skills: ['PYTHON', 'OPENCV', 'SIFT'],
            image: {
                url: './stop_recognition_output.png',
                width: 360, 
                height: 70,
                responsiveWidth: 'w-3/4',
            },
        },
        { 
            title: 'Options Pricing Calculator', 
            description: "Built a C++ program that calculates the price of a European call option using the Black-Scholes option pricing model; implemented tests using Google Test.",            
            skills: ['C++', 'FINANCE', 'GOOGLE TEST'],
            githubLink: 'https://github.com/n-alex-goncalves/OptionsPricingCalculator'
        },
        { 
            title: 'Image Reconstruction and Filtering with Gaussian Models', 
            description: "Used NumPy to reconstruct tilted 2D images with Gaussian blobs and apply image filters (blur, edge detection), with Matplotlib for visualization and Pandas for Gaussian parameters.",            
            skills: ['PYTHON', 'PANDAS', 'MATPLOTLIB'],
        },
        // Add more card objects as needed
    ]
};