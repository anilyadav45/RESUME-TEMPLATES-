const express = require('express');
const app = express(); //express obj called
const path = require('path');
//we dont have to require ejs bcoz bydefault it is int express obj
// const port = 8080;
const PORT = process.env.PORT || 3002;
app.set("view engine", "ejs");
//we can use this template later by using Database for different persons

//---------------------------------------------------------------------------

const resumeData1 = {
    title: 'Anil Yadav - Resume',
    name: 'Anil Yadav',
    profession: 'Software Engineer',
    email: 'rebelanil885@gmail.com',
    phone: '988637-7890',
    summary: 'Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.',
    experience: [{
            title: 'Senior Software Engineer',
            company: 'GOOGLE Company',
            duration: '2018 - Present',
            responsibilities: [
                'Developed and maintained web applications using JavaScript, Node.js, and Express.',
                'Led a team of 5 developers to build scalable and efficient software solutions.',
                'Collaborated with cross-functional teams to define project requirements and deliverables.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'GOOGLE',
            duration: '2015 - 2018',
            responsibilities: [
                'Software Develoopmets and implemented front-end components using HTML, CSS, and JavaScript.',
                'Worked on backend development with Node.js and MongoDB.',
                'Provided technical support and troubleshooting for web applications.',
            ],
        },
    ],
    education: 'Bachelor of Science in Computer Science | University of Example | 2011 - 2015',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'HTML/CSS', 'React', 'MongoDB'],
};

const resumeData2 = {
    title: 'Rupak Yadav - Resume',
    name: 'Rupak Yadav',
    profession: 'Web Developer',
    email: 'rupakyadav45@gmail.com',
    phone: '(123) 456-7890',
    summary: 'Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.',
    experience: [{
            title: 'Junior Software Engineer',
            company: 'AMAZON',
            duration: '2018 - Present',
            responsibilities: [
                'Developed and maintained web applications using JavaScript, Node.js, and Express.',
                'Led a team of 5 developers to build scalable and efficient software solutions.',
                'Collaborated with cross-functional teams to define project requirements and deliverables.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'AMAZON',
            duration: '2015 - 2018',
            responsibilities: [
                'Software Testing,Debugging,Flutter app,React Native',
                'Worked on backend development with Node.js and MongoDB.',
                'Provided technical support and troubleshooting for web applications.',
            ],
        },
    ],
    education: 'Bachelor of Science in Computer Science | University of Example | 2011 - 2015',
    skills: ['UI/UX', 'Node.js', 'Express.js', 'HTML/CSS', 'React', 'MongoDB'],
};


const resumeData3 = {
    title: 'Nitesh Yadav - Resume',
    name: 'Nitesh Yadav',
    profession: 'Web Developer',
    email: 'Niteshyadav45@gmail.com',
    phone: '(123) 456-7890',
    summary: 'Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.',
    experience: [{
            title: 'Junior Software Engineer',
            company: 'PornHub',
            duration: '2022 - Present',
            responsibilities: ['Created RESTful APIs using Node.js and Express.',
                'Optimized database performance for large-scale applications.',
                'Collaborated with front-end developers to integrate user-facing elements with server-side logic.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'PornHub Company',
            duration: '2022 - 2024',
            responsibilities: [
                'Designed and implemented front-end components using HTML, CSS, and JavaScript.',
                'Worked on backend development with Node.js and MongoDB.',
                'Provided technical support and troubleshooting for web applications.',
            ],
        },
    ],
    education: 'Bachelor of Science in Computer Science | University of Example | 2011 - 2015',
    skills: ['HTML', 'CSS', 'WORDPRESS', 'REACTJS', 'ABCD', 'PYTHON'],
};
// ------------------------------------------------------------
//differents routes
app.get("/anil", (req, res) => {
    res.render('template', resumeData1); //passing data1 for 'anil' route
})

app.get("/rupak", (req, res) => {
    res.render('template', resumeData2); //passing data2 for 'rupak' route
})

app.get("/nitesh", (req, res) => {
    res.render('template', resumeData3); //passing data3 for 'nitesh' route
})


//seting for public file servings css 
app.use(express.static(path.join(__dirname, "/public")));

//listening the port

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})