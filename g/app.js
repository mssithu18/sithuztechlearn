// Sithuz Tech Learn - JavaScript Learning Platform
// ================================================

// Comprehensive Course Data
const coursesData = [
    {
        id: 1,
        title: 'JavaScript Basics',
        level: 'beginner',
        description: 'Learn the fundamentals of JavaScript programming',
        icon: '📚',
        lessons: [
            {
                title: 'What is JavaScript?',
                content: 'JavaScript is a versatile programming language that powers interactive web applications. It runs in browsers, servers (Node.js), and modern applications. Originally created in 1995, JavaScript is now one of the most popular programming languages worldwide.',
                code: `// JavaScript can run anywhere!
console.log('Hello from JavaScript!');
console.log('This is running in your browser!');`
            },
            {
                title: 'Variables and Data Types',
                content: 'Variables are containers for storing data. JavaScript has dynamic typing, meaning variables can hold any data type. Common data types include: String, Number, Boolean, Array, Object, null, and undefined.',
                code: `// Variable declaration
let name = 'Sithuz';
const age = 25;
var isLearning = true;

// Data types
let string = 'Hello World';
let number = 42;
let decimal = 3.14;
let isActive = true;
let emptyValue = null;`
            },
            {
                title: 'Operators and Expressions',
                content: 'Operators are used to perform operations on variables. JavaScript supports arithmetic, comparison, logical, and assignment operators.',
                code: `// Arithmetic operators
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1 (remainder)

// Comparison operators
console.log(10 > 5);  // true
console.log(10 === '10');  // false (strict)
console.log(10 == '10');   // true (loose)`
            },
            {
                title: 'Conditional Statements',
                content: 'Use if, else if, and else to execute code based on conditions. The switch statement is useful for multiple conditions.',
                code: `// If-Else
let score = 75;
if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else {
    console.log('Grade: F');
}

// Switch statement
let day = 3;
switch (day) {
    case 1: console.log('Monday'); break;
    case 2: console.log('Tuesday'); break;
    case 3: console.log('Wednesday'); break;
    default: console.log('Other day');
}`
            },
            {
                title: 'Loops',
                content: 'Loops are used to repeat code. JavaScript supports for, while, do-while, and forEach loops.',
                code: `// For loop
for (let i = 0; i < 5; i++) {
    console.log('Iteration ' + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log('Count: ' + count);
    count++;
}

// For-of loop (ES6)
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}`
            }
        ]
    },
    {
        id: 2,
        title: 'Functions & Scope',
        level: 'beginner',
        description: 'Master functions, closures, and scope in JavaScript',
        icon: '⚙️',
        lessons: [
            {
                title: 'Function Declaration',
                content: 'Functions are reusable blocks of code. They can take parameters and return values.',
                code: `// Function declaration
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('Sithuz'));

// Function with default parameter
function introduce(name = 'Guest') {
    console.log('Welcome ' + name);
}

introduce();  // Welcome Guest
introduce('John');  // Welcome John`
            },
            {
                title: 'Arrow Functions (ES6)',
                content: 'Arrow functions provide a concise syntax for writing functions using the => (fat arrow) notation.',
                code: `// Arrow function
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));  // 8

// Concise arrow function (implicit return)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // 20

// Single parameter without parentheses
const square = x => x * x;
console.log(square(6));  // 36`
            },
            {
                title: 'Scope & Closures',
                content: 'Scope determines where variables are accessible. Closures allow inner functions to access outer function variables.',
                code: `// Global scope
let global = 'I am global';

function outer() {
    let outerVar = 'I am in outer';
    
    function inner() {
        let innerVar = 'I am in inner';
        console.log(global);  // Accessible
        console.log(outerVar);  // Accessible
    }
    
    inner();
}

// Closure example
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter());  // 1
console.log(myCounter());  // 2
console.log(myCounter());  // 3`
            },
            {
                title: 'Higher-Order Functions',
                content: 'Higher-order functions take functions as arguments or return functions. They are powerful for functional programming.',
                code: `// Function as parameter
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));      // 8
console.log(operate(5, 3, multiply)); // 15

// Function returning function
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(10));  // 20
console.log(triple(10));  // 30`
            }
        ]
    },
    {
        id: 3,
        title: 'Arrays & Objects',
        level: 'intermediate',
        description: 'Work with arrays and objects - fundamental data structures',
        icon: '📦',
        lessons: [
            {
                title: 'Array Basics',
                content: 'Arrays are ordered collections of elements. They can contain any data type and are zero-indexed.',
                code: `// Array creation
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'two', true, null];

// Accessing elements
console.log(numbers[0]);  // 1
console.log(numbers.length);  // 5

// Array methods
numbers.push(6);  // Add to end
numbers.pop();    // Remove from end
numbers.shift();  // Remove from start
numbers.unshift(0);  // Add to start

console.log(numbers);  // [0, 1, 2, 3, 4, 5]`
            },
            {
                title: 'Array Methods',
                content: 'Learn powerful array methods like map, filter, reduce that transform and manipulate arrays.',
                code: `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep elements that match condition
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// reduce - combine elements into single value
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);  // 15

// find - get first element matching condition
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven);  // 2

// includes - check if array contains value
console.log(numbers.includes(3));  // true`
            },
            {
                title: 'Objects',
                content: 'Objects are key-value pairs used to store related data and functionality. They are the foundation of JavaScript.',
                code: `// Object creation
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    greet: function() {
        return 'Hello, I am ' + this.name;
    }
};

// Accessing properties
console.log(person.name);  // John
console.log(person['age']);  // 30

// Adding properties
person.email = 'john@example.com';

// Method call
console.log(person.greet());  // Hello, I am John

// Iterating over object
for (let key in person) {
    console.log(key + ': ' + person[key]);
}`
            },
            {
                title: 'Destructuring',
                content: 'Destructuring allows extracting values from arrays and objects into distinct variables.',
                code: `// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first);  // red

// Object destructuring
const user = {
    id: 1,
    name: 'Alice',
    role: 'Developer'
};
const { name, role } = user;
console.log(name);  // Alice

// With default values
const { email = 'no-email@example.com' } = user;
console.log(email);  // no-email@example.com

// Nested destructuring
const data = {
    user: {
        profile: {
            username: 'john_doe'
        }
    }
};
const { user: { profile: { username } } } = data;
console.log(username);  // john_doe`
            }
        ]
    },
    {
        id: 4,
        title: 'DOM Manipulation',
        level: 'intermediate',
        description: 'Interact with HTML elements using the DOM API',
        icon: '🎨',
        lessons: [
            {
                title: 'Selecting Elements',
                content: 'Learn how to select DOM elements using various methods for manipulation.',
                code: `// getElementById
const heading = document.getElementById('myHeading');

// querySelector
const button = document.querySelector('.btn');
const allDivs = document.querySelectorAll('div');

// getElementsByClassName
const items = document.getElementsByClassName('item');

// getElementsByTagName
const paragraphs = document.getElementsByTagName('p');

// querySelector is more flexible
const firstDiv = document.querySelector('div.container');
const activeItems = document.querySelectorAll('.item.active');`
            },
            {
                title: 'Modifying Elements',
                content: 'Change element content, attributes, and styles dynamically.',
                code: `const element = document.getElementById('content');

// Change text content
element.textContent = 'New text content';

// Change HTML content
element.innerHTML = '<strong>Bold content</strong>';

// Change attributes
element.setAttribute('data-id', '123');
element.id = 'newId';
element.className = 'new-class';

// Change styles
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';

// Add/Remove classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');`
            },
            {
                title: 'Event Handling',
                content: 'Respond to user interactions like clicks, typing, and form submissions.',
                code: `const button = document.getElementById('myButton');

// Event listener
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function
button.addEventListener('click', () => {
    console.log('Clicked with arrow function');
});

// Multiple event types
const input = document.getElementById('userInput');

input.addEventListener('change', (e) => {
    console.log('Input value:', e.target.value);
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        console.log('Enter pressed');
    }
});

// Form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent default submission
    console.log('Form submitted');
});`
            },
            {
                title: 'Creating Elements',
                content: 'Dynamically create, add, and remove DOM elements.',
                code: `// Create elements
const newParagraph = document.createElement('p');
const newDiv = document.createElement('div');

// Set content
newParagraph.textContent = 'This is a new paragraph';
newDiv.innerHTML = '<h3>New Section</h3>';

// Append to document
document.body.appendChild(newDiv);

// Insert before element
const container = document.getElementById('container');
container.insertBefore(newParagraph, container.firstChild);

// Remove elements
const oldElement = document.getElementById('toRemove');
oldElement.remove();

// Clone elements
const original = document.getElementById('original');
const clone = original.cloneNode(true);  // true = deep clone
document.body.appendChild(clone);`
            }
        ]
    },
    {
        id: 5,
        title: 'Async Programming',
        level: 'advanced',
        description: 'Master callbacks, promises, and async/await',
        icon: '⚡',
        lessons: [
            {
                title: 'Callbacks',
                content: 'Callbacks are functions passed as arguments to be executed later. They are the foundation of asynchronous JavaScript.',
                code: `// Simple callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

// Callback with arguments
function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

add(5, 3, (sum) => {
    console.log('Sum is: ' + sum);
});

// setTimeout - asynchronous callback
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);`
            },
            {
                title: 'Promises',
                content: 'Promises represent the eventual completion of an async operation. They are the modern way to handle async code.',
                code: `// Create a promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    if (success) {
        resolve('Operation successful!');
    } else {
        reject('Operation failed!');
    }
});

// Handle promise
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Promise chaining
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });`
            },
            {
                title: 'Async/Await',
                content: 'Async/await provides a cleaner syntax for handling promises, making async code look synchronous.',
                code: `// Async function
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

// Multiple awaits
async function getUser() {
    try {
        const userResponse = await fetch('/api/user');
        const user = await userResponse.json();
        
        const postsResponse = await fetch('/api/posts');
        const posts = await postsResponse.json();
        
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
    }
}

// Parallel awaits with Promise.all
async function getMultiple() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('/api/users').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comments').then(r => r.json())
        ]);
        console.log({ users, posts, comments });
    } catch (error) {
        console.error('Error:', error);
    }
}`
            }
        ]
    },
    {
        id: 6,
        title: 'ES6+ Features',
        level: 'advanced',
        description: 'Modern JavaScript features and syntax improvements',
        icon: '🚀',
        lessons: [
            {
                title: 'Template Literals',
                content: 'Template literals use backticks and allow string interpolation with ${} expressions.',
                code: `// Basic string concatenation (old way)
const name = 'John';
const message = 'Hello ' + name;

// Template literals (modern way)
const greeting = \`Hello \${name}\`;

// Multi-line strings
const multiline = \`
    This is a
    multi-line string
    using template literals
\`;

// Expressions in templates
const a = 5, b = 3;
console.log(\`\${a} + \${b} = \${a + b}\`);

// Function in template
function bold(text) {
    return \`<strong>\${text}</strong>\`;
}

console.log(bold('Important'));`
            },
            {
                title: 'Spread Operator',
                content: 'The spread operator (...) expands arrays and objects into individual elements.',
                code: `// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Spread with objects
const user = { name: 'John', age: 30 };
const userWithEmail = { ...user, email: 'john@example.com' };
console.log(userWithEmail);

// Rest parameters in functions
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15`
            }
        ]
    },
    {
        id: 7,
        title: 'Full-Stack Basics',
        level: 'advanced',
        description: 'Introduction to backend, database, and full-stack concepts',
        icon: '🔧',
        lessons: [
            {
                title: 'Frontend Concepts',
                content: 'Understanding the frontend layer that users interact with directly.',
                code: `// Frontend: HTML, CSS, and JavaScript
// Fetch data from backend
async function loadUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        
        // Render to DOM
        const container = document.getElementById('users');
        container.innerHTML = users.map(user => \`
            <div class="user-card">
                <h3>\${user.name}</h3>
                <p>\${user.email}</p>
            </div>
        \`).join('');
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

// Send data to backend
async function saveUser(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        console.log('User saved:', result);
    } catch (error) {
        console.error('Error saving user:', error);
    }
}`
            },
            {
                title: 'Backend Concepts',
                content: 'Introduction to server-side JavaScript with Node.js and Express basics.',
                code: `// Node.js / Express Example
// Create a simple server (conceptual)
/*
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// API endpoint - GET
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' }
    ];
    res.json(users);
});

// API endpoint - POST
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log('New user:', newUser);
    res.json({ success: true, user: newUser });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
*/

// Client-side usage
fetch('/api/users')
    .then(res => res.json())
    .then(users => console.log(users));`
            },
            {
                title: 'Database Basics (SQL)',
                content: 'Understanding SQL for data storage and retrieval.',
                code: `// SQL Database Operations

// CREATE TABLE
/*
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

// INSERT
/*
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 30);
*/

// SELECT
/*
SELECT * FROM users;
SELECT name, email FROM users WHERE age > 25;
SELECT * FROM users ORDER BY age DESC;
*/

// UPDATE
/*
UPDATE users SET email = 'newemail@example.com' 
WHERE id = 1;
*/

// DELETE
/*
DELETE FROM users WHERE id = 1;
*/

// JavaScript can execute these queries
async function getUsers() {
    const users = await database.query('SELECT * FROM users');
    return users;
}`
            }
        ]
    }
];

// Application State
let currentTheme = localStorage.getItem('theme') || 'light';
let currentCourse = null;
let currentLessonIndex = 0;
let userProgress = JSON.parse(localStorage.getItem('progress')) || {};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderCourses();
    setupEventListeners();
    updateProgress();
});

// Theme Management
function initializeTheme() {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
}

document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', currentTheme);
    const icon = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    document.getElementById('themeToggle').innerHTML = icon;
});

// Render Courses
function renderCourses(filter = 'all') {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? coursesData : coursesData.filter(c => c.level === filter);

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-header">
                <span class="course-level">${course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
                <h3 class="course-title">${course.icon} ${course.title}</h3>
                <p class="course-description">${course.description}</p>
            </div>
            <div class="course-footer">
                <span class="lessons-count">${course.lessons.length} Lessons</span>
                <button class="btn btn-primary" onclick="startCourse(${course.id})">Start</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Courses
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderCourses(e.target.dataset.filter);
    });
});

// Start Course
function startCourse(courseId) {
    currentCourse = coursesData.find(c => c.id === courseId);
    currentLessonIndex = 0;
    document.getElementById('courses').style.display = 'none';
    document.getElementById('courseContent').classList.remove('hidden');
    showLesson(0);
    window.scrollTo(0, 0);
}

// Show Lesson
function showLesson(index) {
    if (index < 0 || index >= currentCourse.lessons.length) return;
    currentLessonIndex = index;

    const lesson = currentCourse.lessons[index];
    document.getElementById('courseTitle').textContent = currentCourse.title;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonContent').innerHTML = `<p>${lesson.content}</p>`;
    document.getElementById('codeExample').textContent = lesson.code;

    // Render lessons list
    const list = document.getElementById('lessonsList');
    list.innerHTML = '';
    currentCourse.lessons.forEach((l, i) => {
        const item = document.createElement('div');
        item.className = 'lesson-item' + (i === index ? ' active' : '');
        item.textContent = l.title;
        item.onclick = () => showLesson(i);
        list.appendChild(item);
    });

    // Update navigation buttons
    document.getElementById('prevLesson').disabled = index === 0;
    document.getElementById('nextLesson').disabled = index === currentCourse.lessons.length - 1;

    // Highlight code
    hljs.highlightElement(document.getElementById('codeExample'));

    // Track progress
    if (!userProgress[currentCourse.id]) {
        userProgress[currentCourse.id] = [];
    }
    if (!userProgress[currentCourse.id].includes(index)) {
        userProgress[currentCourse.id].push(index);
    }
    localStorage.setItem('progress', JSON.stringify(userProgress));
    updateProgress();
}

// Navigation
function nextLesson() {
    showLesson(currentLessonIndex + 1);
}

function previousLesson() {
    showLesson(currentLessonIndex - 1);
}

function backToCourses() {
    document.getElementById('courseContent').classList.add('hidden');
    document.getElementById('courses').style.display = 'block';
    window.scrollTo(0, 0);
}

// Copy Code
function copyCode() {
    const code = document.getElementById('codeExample').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
    });
}

// Compiler Functions
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const outputConsole = document.getElementById('outputConsole');
    outputConsole.innerHTML = '';

    // Capture console.log
    const originalLog = console.log;
    const logs = [];

    console.log = function(...args) {
        logs.push(args.map(arg => {
            if (typeof arg === 'object') {
                return JSON.stringify(arg, null, 2);
            }
            return String(arg);
        }).join(' '));
    };

    try {
        eval(code);
        logs.forEach(log => {
            const line = document.createElement('div');
            line.className = 'output-line';
            line.textContent = log;
            outputConsole.appendChild(line);
        });
        if (logs.length === 0) {
            outputConsole.innerHTML = '<div class="output-line">Code executed successfully (no output)</div>';
        }
    } catch (error) {
        const errorLine = document.createElement('div');
        errorLine.className = 'output-line output-error';
        errorLine.textContent = '❌ Error: ' + error.message;
        outputConsole.appendChild(errorLine);
    }

    console.log = originalLog;
    outputConsole.scrollTop = outputConsole.scrollHeight;
}

function clearEditor() {
    document.getElementById('codeEditor').value = '';
}

function clearOutput() {
    document.getElementById('outputConsole').innerHTML = '';
}

function loadTemplate(type) {
    const templates = {
        'hello': `console.log('Hello World!');`,
        'loop': `for (let i = 0; i < 5; i++) {
    console.log('Iteration: ' + i);
}`,
        'function': `function add(a, b) {
    return a + b;
}

console.log(add(5, 3));`,
        'array': `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
        'object': `const user = {
    name: 'John',
    age: 30,
    greet: function() {
        return 'Hi, I am ' + this.name;
    }
};

console.log(user.greet());`,
        'async': `async function getData() {
    try {
        const data = { message: 'Hello from async!' };
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();`,
        'dom': `// Example: Interact with HTML elements
const heading = document.querySelector('h1');
if (heading) {
    console.log(heading.textContent);
}`,
        'fetch': `// Fetch data from API (example)
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));`
    };

    document.getElementById('codeEditor').value = templates[type] || '';
}

// Update Progress
function updateProgress() {
    let totalCompleted = 0;
    for (const courseId in userProgress) {
        totalCompleted += userProgress[courseId].length;
    }

    const totalLessons = coursesData.reduce((sum, c) => sum + c.lessons.length, 0);
    const percentage = Math.round((totalCompleted / totalLessons) * 100);

    document.getElementById('lessonsCompleted').textContent = totalCompleted;
    document.getElementById('overallProgress').textContent = percentage + '%';
    document.getElementById('currentStreak').textContent = '5 days';

    // Render course progress
    const progressList = document.getElementById('courseProgressList');
    progressList.innerHTML = '';

    coursesData.forEach(course => {
        const completed = userProgress[course.id]?.length || 0;
        const percentage = Math.round((completed / course.lessons.length) * 100);

        const progressDiv = document.createElement('div');
        progressDiv.className = 'course-progress';
        progressDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <strong>${course.title}</strong>
                <span>${completed}/${course.lessons.length}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        progressList.appendChild(progressDiv);
    });
}

// Utility Functions
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const id = link.getAttribute('href').substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}