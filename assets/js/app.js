// sanity check
console.log("app.js linked.");
//need to wrap everything in document.ready (event listeners etc)


  var clickFunction = function (event) {
      //do some stuff here
      alert("Thanks for visiting my site!");
      window.removeEventListener('click',clickFunction, false );

  };
  // window.addEventListener("click", clickFunction, false);
