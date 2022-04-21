var acc = document.getElementsByClassName("accordion");
var i;

var slide = new Array("foret-peuplier.jpg", "paysage-montagne.jpg", "chemin-automne.jpg", "prairie-alpes.jpg");
var numero = 0;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e){
  e.preventDefault();
  let myInput1 = document.getElementById('username');
  let myInput2 = document.getElementById('email');
  let myInput3 = document.getElementById('message');

  let myRegex1 = /^[a-zA-Z-\s]+$/;

  let myRegex2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let myRegex3 = /^[a-zA-Z-\s]+$/;

  if(myInput1.value.trim() == ""){
    let myError = document.getElementById('error-name');
    myError.innerHTML = "Le champs username est requis.";
    myError.style.color = 'red'; 
  } else if(myRegex1.test(myInput1.value) == false){
    let myError = document.getElementById('error-name');
    myError.innerHTML = "Le nom doit comporter des lettres, des tirets uniquement.";
    myError.style.color = 'red';
  }
  
  if(myInput2.value.trim() == ""){
    let myError2 = document.getElementById('error-mail');
    myError2.innerHTML = "Le champs mail est requis.";
    myError2.style.color = 'red';
    } 
  else if(myRegex2.test(myInput2.value) == false){
    let myError2 = document.getElementById('error-mail');
    myError2.innerHTML = "L'email doit comporter des lettres, @.com.";
    myError2.style.color = 'red';
  } 
  
  if(myInput3.value.trim() == ""){
    let myError3 = document.getElementById('error-message');
    myError3.innerHTML = "Le champs message est requis.";
    myError3.style.color = 'red'; 
  }
  else if(myRegex3.test(myInput3.value) == false){
    let myError3 = document.getElementById('error-message');
    myError3.innerHTML = "Le message doit comporter des lettres, des tirets uniquement.";
    myError3.style.color = 'red';
  }
  
});


