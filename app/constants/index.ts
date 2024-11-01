
// Work experience cards
export const WORK_EXPERIENCE_DATA = {
    title: 'WORK EXPERIENCE',
    cards: [
        { 
            title: 'Infosys', 
            subtitle: 'Specialist Programmer', 
            date: 'Aug 2022 – Present', 
            description: "Built backend Python APIs using SQLAlchemy, GraphQL, AWS to serve/model PostgreSQL fuel cost data to the frontend, achieving fast response times of under 2.1 seconds. Awarded the Rising Star Award (March 2024) due to exceptional team contributions.",
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
            description: "Selected as a panellist at the Barclays LifeSkills Unpacked seminar, helping over 300 teachers nationally on integrating career-ready skills into their curriculum to prepare students for the workforce.",
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
            description: "Performed quality checks on course descriptions, guaranteeing accuracy for over 50+ university offerings. Identified and corrected course errors prior to web publication.",
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
            description: "Led campus tours for parents and prospective students. Answered their questions regarding the on-campus experience. Volunteered for virtual and in-person Q&A sessions for over 50+ visitors.",
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
            description: "Analyzed 40% of Echobox's customer base in Q3, researched 200 – 360 customers weekly and added 2,000+ new company accounts into Salesforce, greatly enhancing Echobox's customer insights.",            
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
            description: "Participated in fintech workshops focused on distributed databases, cybersecurity, and machine learning, gaining insights into core fintech technologies.",
            image: {
                url: './jp-morgan-logo.svg',
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
            description: "Recreated the Portuguese multiplayer card game Bisca using React. Created a server-client architecture for real-time communication between players.",
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
            description: "Created a JavaScript web application interpreter that reduces lambda calculus expressions to their simplest beta normal form. Tested via Jest.",            
            skills: ['JAVASCRIPT', 'LAMBDA CALCULUS'],
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
            description: "Built a realtime vanilla chat application that allows users to join rooms and communicate between users online.",            
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
            title: 'Options Pricing Calculator', 
            description: "Built a C++ program that calculates the price of a European call option using the Black-Scholes option pricing model. Tested using Google Test.",            
            skills: ['C++', 'FINANCE', 'GOOGLE TEST'],
            githubLink: 'https://github.com/n-alex-goncalves/OptionsPricingCalculator'
        }
        // Add more card objects as needed
    ]
};