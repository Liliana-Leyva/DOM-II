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


/* click  sign up buttons*/
let btn = document.querySelectorAll(".btn");
btn.forEach(b => {
    b.addEventListener("click", function(){
         b.style.backgroundColor = "#a6f6f1";})
});

btn.forEach(b => {
    b.addEventListener("mouseout", function(){
         b.style.backgroundColor = "#41aea9";})
    });


/* * `scroll` */

window.addEventListener('scroll', () => {
    const mouseScroll = document.documentElement.scrollHeight - window.innerHeight;
    const  mouseScrolled = window.scrollY; /* scrollY is the number of pixels we scrolled*/
    if(Math.ceil(mouseScroll) === mouseScrolled) {
        alert ("Don't forget to Sign Up!");
    }

})

/* * `load` */
const busImg = document.querySelector(".intro img");
busImg.addEventListener('load', function(){
    alert("page loaded!")
})


/*  * `dblclick` */
const changeImage = document.querySelector('.intro img');
changeImage.addEventListener('dblclick', () => {
  changeImage.src = "https://images.unsplash.com/photo-1577459640575-219cbf231b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1254&q=80";
});


/*  * `resize` */
let navBackground = document.querySelector('nav')
window.addEventListener('resize', () => {
    navBackground.style.backgroundColor = "#a6f6f1"
})



/* mouseenter */
const img = document.querySelectorAll('img')
img.forEach(i => {
    i.addEventListener("mouseenter", () => {
        i.style.transform = "scale(1.2)";
      });
       i.style.transition = "all 0.3s";
});



/*mouse leave */
img.forEach(i => {
    i.addEventListener("mouseleave", () => {
        i.style.transform = "scale(1)";
      });
       i.style.transition = "all 0.3s";
});





/* * `keydown` */
window.addEventListener('keydown', () => {
    alert('Would you like to ride the bus and have fun?')
})




/*  * `wheel` */

const wheel = document.querySelectorAll('h2');
wheel.forEach(i => {
    i.addEventListener('wheel', () => {
        i.style.fontSize = "50px";
        i.style.color= "blue";
    })
})

/** [ ] Stop the navigation items from refreshing the page by using `preventDefault()`*/
document.querySelector('nav').addEventListener('click', function(event) {
    event.preventDefault()
});
/*  * `select` */

/* * `drag / drop` */
/* Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`*/

/*### Task 3: Stretch
* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.*/

/*#### Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.*/