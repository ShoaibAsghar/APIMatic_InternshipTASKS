console.log("This is index.js");

// All variables

let upload = document.getElementById('upload');
let outputBx = document.getElementById('outputBx');

// Listen for file upload/change

upload.addEventListener("change", ()=>{
     // Initialize file reader

     let fr = new FileReader();
     fr.readAsText(upload.files[0]);
     fr.onload = function() {
          outputBx.innerHTML = fr.result;
     };
});