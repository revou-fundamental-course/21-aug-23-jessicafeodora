window.onscroll = function () { myFunction() };

var header = document.getElementById("persist-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//banner autoslide
var slideIndex = 1

setInterval(function(){
  plusIndex(1)
}, 2000)

function plusIndex(index){
  showImage(slideIndex += index)
}

function showImage(index) {
  var autoSlide = document.getElementsByClassName("image-slide")
  var i;
  if (index > autoSlide.length) {
    slideIndex = 1
  }
  if(index < 1) {
    slideIndex = autoSlide.length
  }
  for (i = 0; i < autoSlide.length; i++) {
    autoSlide[i].style.display = "none";
  }
  autoSlide[slideIndex - 1].style.display = "block"
}

//validate form
function setSenderUI(nameOutput, birthOutput, genderOutput, messageOutput) {
  const output = 
      "Nama: " + nameOutput +
      "\nTanggal lahir: " + birthOutput +
      "\nJenis Kelamin: " + genderOutput +
      "\nPesan: " + messageOutput;
  document.getElementById("form-output").value = output;
  document.getElementById("welcome-name").textContent = nameOutput;
}

function validateForm() {
  const nameOutput =  document.forms["message-form"]["name-input"].value;
  const birthOutput =  document.forms["message-form"]["birth-input"].value;
  const genderOutput =  document.querySelector('input[name="gender"]:checked').value;
  const messageOutput =  document.forms["message-form"]["message-input"].value;
  
  if (nameOutput == "" || birthOutput == "" || genderOutput == "" || messageOutput == "") {
      alert("Please fill out all the fields");
      return false;
  }
  setSenderUI(nameOutput, birthOutput, genderOutput, messageOutput);
  return false;
}