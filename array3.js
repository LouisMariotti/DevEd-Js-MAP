// Calbacks higher order functions

const videos = [
  "pranking my sister! is she Okay (gone wrong)",
  "How to Javascript",
  "html tutorial",
  "learning piano",
];

// videos.forEach(function (video) {
//   // This is the callback function and runs everytime we loop over each element in the above array
//   console.log("run");
//   console.log(video);
// });

// button.addEventListner("click", function () {
//   // function() is the callback function, this wait for the order to run, so when we click on the button the function run in this case
// });

// videos.forEach(function (video) {
//   // forEach is a higher order function. It is a function that takes another function as parameter
//   console.log(video); // Going to run over for each individual string in the videos array
// });

// Higher order function

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello There!");
// }

// repeater(sayHello); // Function take another function as a parameter

// Can do it clearer Higher order function

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// repeater(function () {
//   console.log("Hello There");
// });

// Callback is the function that get added and get executed later

// MAP bit different than higher order functions.
/* MAP allow us to create a copy of an array that we will be able to
modify it, add some modifications */

const newVideos = videos.map(function (video) {
  return video.toUpperCase();
});

newVideos.push("LOL");

console.log(videos);

console.log(newVideos); // All our items will be uppercased

/* Big different is that forEach runs over each element and 
allow us to run some kinds of functionality, but doesn't return us
a value that we can store inside a variable. Use mapping more for
creating modifications */
