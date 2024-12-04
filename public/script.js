document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");
    
    const navagation = document.querySelectorAll(".navagation");
    const closeButton = document.querySelectorAll("#close-btn");
  console.log(closeButton)
  
    const today = new Date().toISOString().split("T")[0];
    const lastShown = localStorage.getItem("lastShown");
  
    // Show the card if it hasn't been shown today
    if (lastShown !== today) {
      card.classList.add("show");
    navagation[0].style.display="flex"
      localStorage.setItem("lastShown", today);
    }
  
    // Close the card and prevent it from showing again today
    closeButton[0].addEventListener("click", () => {
      card.classList.remove("show");
      navagation[0].style.display="none"
    });
  });
  

const topics = [
    {
        "name": "Introduction to JavaScript",
        "subtopics": ["History and Evolution", "Importance of JavaScript in Web Development", "How JavaScript Works (JS Engines, Browser vs Node.js)"]
    },
    {
        "name": "Setting Up Environment",
        "subtopics": ["Using Browsers for Development (DevTools)", "Code Editors (VS Code)", "Running Scripts in HTML"]
    },
    {
        "name": "Syntax and Structure",
        "subtopics": ["Variables (var, let, const)", "Data Types and Type Conversion", "Comments and Coding Best Practices"]
    },
    {
        "name": "Operators",
        "subtopics": ["Arithmetic, Comparison, Logical Operators", "Assignment Operators", "Ternary Operator and Nullish Coalescing"]
    },
    {
        "name": "Control Structures",
        "subtopics": ["if, else, else if", "switch", "Loops (for, while, do-while)", "Labels and break, continue"]
    },
    {
        "name": "Functions",
        "subtopics": ["Function Declaration, Expression, and Arrow Functions", "Parameters and Default Arguments", "Callback Functions", "Higher-Order Functions"]
    },
    {
        "name": "Scope and Closures",
        "subtopics": ["Global vs Local Scope", "Block Scope (let and const)", "Closures and Lexical Environment"]
    },
    {
        "name": "Hoisting",
        "subtopics": ["Variables and Function Hoisting", "Temporal Dead Zone"]
    },
    {
        "name": "Object-Oriented Programming (OOP)",
        "subtopics": ["Objects and Prototypes", "Classes (class, constructor, extends)", "Inheritance and Polymorphism"]
    },
    {
        "name": "Event Loop and Asynchronous JavaScript",
        "subtopics": ["Call Stack and Web APIs", "Event Loop and Task Queue", "Microtasks vs Macrotasks"]
    },
    {
        "name": "Promises",
        "subtopics": ["Creating and Using Promises", "Chaining Promises", "Error Handling in Promises"]
    },
    {
        "name": "Async/Await",
        "subtopics": ["Syntax and Error Handling", "Combining with Promises"]
    },
    {
        "name": "Fetch API",
        "subtopics": ["Making HTTP Requests", "Handling Responses and Errors"]
    },
    {
        "name": "DOM Basics",
        "subtopics": ["What is DOM?", "DOM Tree and Nodes", "DOM Methods (getElementById, querySelector, etc.)"]
    },
    {
        "name": "Modifying DOM Elements",
        "subtopics": ["Changing Styles", "Adding/Removing Elements", "Attributes and Classes"]
    },
    {
        "name": "Event Handling",
        "subtopics": ["Event Listeners (addEventListener)", "Event Bubbling, Capturing, and Delegation", "Preventing Default Behavior"]
    },
    {
        "name": "Web APIs",
        "subtopics": ["Timers (setTimeout, setInterval)", "Working with LocalStorage and SessionStorage"]
    },
    {
        "name": "Error Handling",
        "subtopics": ["try, catch, finally", "Custom Errors"]
    },
    {
        "name": "Regular Expressions",
        "subtopics": ["Syntax and Common Use Cases", "Validating Inputs"]
    },
    {
        "name": "Performance Optimization",
        "subtopics": ["Debouncing and Throttling", "Understanding Callbacks in Timers"]
    }
];


const savedProgress = JSON.parse(localStorage.getItem("learningProgress")) || {};

function toggleCompletion(element, key) {
  const isCompleted = savedProgress[key];
  const circle = element.querySelector(".circle");
  const text = element.querySelector(".text");

  if (isCompleted) {
      circle.textContent = "○";
      text.style.textDecoration = "none";
      text.style.color = "black";
      delete savedProgress[key];
  } else {
      circle.textContent = "●";
      text.style.textDecoration = "line-through";
      text.style.color = "#1B1212";
      savedProgress[key] = true;
  }

  localStorage.setItem("learningProgress", JSON.stringify(savedProgress));
}

function createItem(name, key) {
  const item = document.createElement("li");
  const circle = document.createElement("span");
  const text = document.createElement("span");

  circle.className = "circle";
  circle.textContent = savedProgress[key] ? "●" : "○";
  circle.style.cursor = "pointer";

  text.className = "text";
  text.textContent = ` ${name}`;
  text.style.marginLeft = "8px";
  if (savedProgress[key]) {
      text.style.textDecoration = "line-through";
      text.style.color = "#1B1212";
  }

  item.appendChild(circle);
  item.appendChild(text);

  item.addEventListener("click", () => {
      toggleCompletion(item, key);
  });

  return item;
}

const topicList = document.getElementById("topic-list");

topics.forEach((topic, topicIndex) => {
  const topicKey = `${topicIndex}`;
  const topicItem = createItem(topic.name, topicKey);

  if (topic.subtopics && topic.subtopics.length > 0) {
      const subtopicList = document.createElement("ul");
      subtopicList.style.marginLeft = "20px";

      topic.subtopics.forEach((subtopic, subtopicIndex) => {
          const subtopicKey = `${topicIndex}-${subtopicIndex}`;
          const subtopicItem = createItem(subtopic, subtopicKey);
          subtopicList.appendChild(subtopicItem);
      });

      topicItem.appendChild(subtopicList);
  }

  topicList.appendChild(topicItem);
  topicItem.classList.add('animate');
});

// Animation code
const animateItems = document.querySelectorAll('.animate');

animateItems.forEach((item) => {
  item.style.opacity = 0;
  item.style.transform = 'scale(0.5)';
});

animateItems.forEach((item, index) => {
  setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = 'scale(1)';
  }, index * 100);
});