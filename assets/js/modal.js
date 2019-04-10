//Get the modal
let modal = document.getElementById('imgModal');
 modal.addEventListener('click', function() {
  this.style.display = 'none';
});
let span = document.getElementsByClassName('close')[0];

//click on (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

//Get the image
let images = document.getElementsByTagName('img');
let modalImg = document.getElementById('img01');
//var captionText = document.getElementById("caption");

let i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modalImg.style.opacity = '1';
  };
}