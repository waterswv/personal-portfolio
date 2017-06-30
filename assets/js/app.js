// sanity check
console.log("app.js linked.");


  var clickFunction = function (event) {
      //do some stuff here
      alert("Thanks for visiting my site!");
      window.removeEventListener('click',clickFunction, false );

  };
  window.addEventListener("click", clickFunction, false);
