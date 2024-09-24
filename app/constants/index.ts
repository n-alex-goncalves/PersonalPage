
// Work experience cards
export const WORK_EXPERIENCE_DATA = {
    title: 'WORK EXPERIENCE',
    cards: [
        { 
            title: 'Infosys', 
            subtitle: 'Specialist Programmer', 
            date: 'Aug 2022 – Present', 
            description: "Built backend Python APIs using SQLAlchemy, GraphQL, AWS to serve/model PostgreSQL fuel cost data to the frontend, achieving fast response times of under 2.1 seconds.",
            image: {
                url: './infosys-logo.png',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',

            },
            skills: ['AWS CLOUD', 'PYTHON', 'SQLALCHEMY', 'GRAPHQL']
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
            description: "Conducted quality checks on course descriptions, guaranteeing accuracy for over 50+ university offerings. Identified and corrected course errors prior to web publication.",
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
            description: "Conducted campus tours for parents and prospective students by answering their concerns and queries about the on-campus experience. Volunteered for virtual and in-person Q&A sessions for over 50 individuals.",
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
            skills: ['JAVA', 'APEX', 'SALESFORCE']
        },
        { 
            title: 'J.P. Morgan',  
            subtitle: 'Spring Into Technology Intern', 
            date: 'Mar 2020 – Apr 2020', 
            description: "Participated in fintech workshops focused on distributed databases, cybersecurity, and machine learning, gaining insights into core fintech technologies and the ordinary day-to-day proceedings.",
            image: {
                url: './jp-morgan-logo.svg',
                width: 180,
                height: 70,
                responsiveWidth: 'w-1/3',
            },
            skills: ['FINANCE', 'CYBERSECURITY']
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
            description: "Created a web application and interpreter for translating between the weak lambda calculus and Turing machines within polynomial time.",            
            skills: ['JAVASCRIPT', 'LAMBDA CALCULUS', 'TURING MACHINE'],
            image: {
                url: './turing-machine-lambda-calculus-gif.gif',
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
            description: "Created a web application interpreter that can reduce lambda calculus expressions to their simplest beta normal form. Developed using the applicative-order evaluation strategy and tested via Jest.",            
            skills: ['JAVASCRIPT', 'LAMBDA CALCULUS', 'JEST'],
            githubLink: 'https://github.com/n-alex-goncalves/LambdaCalculusInterpreter',
            pageLink: 'https://n-alex-goncalves.github.io/LambdaCalculusInterpreter/'
        },
        { 
            title: 'Options Pricing Calculator', 
            description: "Created a C++ program that calculates the price of a European call option using the Black-Scholes option pricing model. Created for educational purposes and tested using Google Test.",            
            skills: ['C++', 'FINANCE', 'GOOGLE TEST'],
            githubLink: 'https://github.com/n-alex-goncalves/OptionsPricingCalculator'
        },
        // Add more card objects as needed
    ]
};