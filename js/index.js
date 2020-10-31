// Your code goes here
/* ### Task 2: Create listeners for 10 types of events*/

/* * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:*/
/* * `mouseover`*/
/*Adding a hover effect to the navigation bar */
const navBar = document.querySelector(".nav");
navBar.addEventListener("mouseover", function(event){
    event.target.style.color= "blue";
})

/* mouseout  to remove the blue color*/
navBar.addEventListener("mouseout", function(event) {
    event.target.style.color= "black";
});
/*adding background to the Heading Logo*/
const headingLogo = document.querySelector(".logo-heading");
headingLogo.addEventListener("mouseover", function(event){
    event.target.style.background ="coral";
})

/*mouseout to remove the background color on the headinglogo*/ 
headingLogo.addEventListener("mouseout", function(event){
    event.target.style.background= "white";
});




/* * `keydown` */
/*  * `wheel` */
/* * `load` */
/* * `focus` */
/*const signUp = document.querySelector('div[class= "btn"]');

signUp.addEventListener('focus', (event) => {
    event.target.style.color = 'red';
})*/
/*  * `resize` */
/*const resizeImg = document.querySelector('.intro img');
window.addEventListener('resize', () => {
resizeImg.src = "img/fun-bus.jpg"
  }); */
/* * `scroll` */
/*  * `select` */
/*  * `dblclick` */
/* * `drag / drop` */

/* Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`*/

/*### Task 3: Stretch
* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.*/

/*#### Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.*/