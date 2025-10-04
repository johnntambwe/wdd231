
let currentYear = document.querySelector(".jsCurrentYear");
let lastModified = document.querySelector("#lastModified");
const date = new Date();

currentYear.innerHTML = date.getFullYear();
lastModified.innerHTML = document.lastModified;

// humbuger menu
// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// --------------------------------------
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]


//Displaying course details

const courseName = document.querySelector('.course-name');
const courseTaken = document.querySelector('.course-taken');

function displayCourse(courses) {
    courses.forEach(course => {

        const courseCode = document.createElement('div');
        courseCode.className = 'course-code';
        courseCode.textContent = `${course.subject} ${course.number}`;

        if (course.completed == false) {
            courseCode.style.color = '#eee';
            courseCode.style.backgroundColor = 'rgb(3, 80, 131)';
        }
        courseName.appendChild(courseCode);
        courseTaken.textContent = `The total credits for course listed above is ${courses.length}`;

    });
}


// Appplying filters
const allCourse = document.querySelector('.all-bn');
const cseCourse = document.querySelector('.cse-bn');
const wddCourse = document.querySelector('.wdd-bn');

allCourse.addEventListener('click', () => {
    courseName.textContent = '';
    displayCourse(courses);
});

cseCourse.addEventListener('click', () => {
    let newcourses = courses.filter(course => course.subject === 'CSE');
    courseName.textContent = '';
    displayCourse(newcourses);

});

wddCourse.addEventListener('click', () => {
    let newcourses = courses.filter(course => course.subject == 'WDD');
    courseName.textContent = '';
    displayCourse(newcourses);
});

// Dialog

const courseDetails = document.querySelector('#course-details');

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${courses.technology}</p> 
    
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseName.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * courses.length);
    displayCourseDetails(courses[randomNumber]);
});


