// bookmark buttons
var bm1 = document.getElementById("bm1");
var bm2 = document.getElementById("bm2");
var bm3 = document.getElementById("bm3");
var bm4 = document.getElementById("bm4");
var bm5 = document.getElementById("bm5");

// when bookmark 1 is clicked
bm1.onclick = function() {
  window.location.href = "BookPersonal.html";
};

// when bookmark 2 is clicked
bm2.onclick = function() {
  window.location.href = "BookEducation.html";
};

// when bookmark 3 is clicked
bm3.onclick = function() {
  window.location.href = "BookSkill.html";
};

// when bookmark 4 is clicked
bm4.onclick = function() {
  window.location.href = "BookHobbies.html";
};

// when bookmark 5 is clicked
bm5.onclick = function() {
  window.location.href = "BookContact.html";
};

// close book button
var closeBookBtn = document.getElementById("closeBookBtn");

closeBookBtn.onclick = function() {
  window.location.href = "SelectingPage.html";
};