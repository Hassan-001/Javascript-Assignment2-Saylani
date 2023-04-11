// Q1 .Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. 
//   For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function createAdder(num) {
    return function(x) {
      return x + num;
    };
  }
  
  // Create a closure with num = 5
  const addFive = createAdder(5);
  
  // Use the closure to add 5 to a number
  console.log(addFive(10)); // Output: 15
  
  // Create a closure with num = -2
  const addNegTwo = createAdder(-2);
  
  // Use the closure to add -2 to a number
  console.log(addNegTwo(8)); // Output: 6  

  // Q2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, 
  //   and false if it is not. You can assume that the array is not nested.

function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    }
    if (array[0] === value) {
      return true;
    }
    return searchArray(array.slice(1), value);
    }

  // Q3. Write a function that adds a new paragraph element to the bottom of an HTML document. 
  //    The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
    const newParagraph = document.createElement("p"); // create a new <p> element
    const content = document.createTextNode(text); // create a text node with the passed text
    newParagraph.appendChild(content); // add the text node to the new <p> element
    document.body.appendChild(newParagraph); // add the new <p> element to the end of the <body> element
    }
  
addParagraph("For Adding paragraph");
  
  // Q4. Write a function that adds a new list item to an unordered list in an HTML document. 
  //    The function should take a string argument that will be used as the text content of the new list item.

function addListItem(text) {
    const newItem = document.createElement('li');
    
    newItem.textContent = text;
    
    const list = document.querySelector('ul');
    
    list.appendChild(newItem);
    }
  
  addListItem('New Item');
  
// Q5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, 
//    and the second argument is a string representing the new background color.

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.querySelector('#my-element');
  changeBackgroundColor(myElement, 'red');
  

  
// Q6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string 
//    representing the key to use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  
// Q7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. 
//     The function should return the object.

function getObjectFromLocalStorage(key) {
    const serializedObject = localStorage.getItem(key);
    if (serializedObject === null) {
      return null;
    }
    return JSON.parse(serializedObject);
  }
  
  const myObject = getObjectFromLocalStorage('myKey');
  if (myObject === null) {
    // Handle the case where the object is not found in localStorage
  } else {
    // Use the object as needed
  }

  
// Q8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. 
//    The function should also retrieve the object from localStorage and return it as a new object

function saveObjectToLocalStorage(obj) {
    for (const [key, value] of Object.entries(obj)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    
    const newObj = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    
    // Return the new object
    return newObj;
  }
  