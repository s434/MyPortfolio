$(document).ready(function() {

let m = document.querySelector('#menu');
let header = document.querySelector('header');

m.onclick =() =>{

    m.classList.toggle('fa-times');
    header.classList.toggle('active');
}
$("article img").click(function() {
  var modal = $('#image-modal');
  var modalImg = $('#modal-image');
  
  // Set the src of the modal image to the clicked image's src
  modalImg.attr('src', $(this).attr('src'));

  // Add the 'show' class to make the modal visible and fade it in
  modal.addClass('show').fadeIn();
});

// When the close button is clicked
$(".close").click(function() {
  // Remove 'show' class and hide the modal
  $("#image-modal").fadeOut(function() {
    $(this).removeClass('show');
  });
});

// When the user clicks outside the modal content, close the modal
$(window).click(function(event) {
  if ($(event.target).is("#image-modal")) {
    $("#image-modal").fadeOut(function() {
      $(this).removeClass('show');
    });
  }
});
// Open the modal with the full image
// function openImage(imgElement) {
//     const modal = document.getElementById("imageModal");
//     const fullImage = document.getElementById("fullImage");
    
//     modal.style.display = "block";
//     fullImage.src = imgElement.src; // Set full image source to thumbnail source
//   }
  
  // Close the modal
  // function closeImage() {
  //   const modal = document.getElementById("imageModal");
  //   modal.style.display = "none";
  // }
  // document.querySelectorAll('.article-wrapper figure').forEach((figure) => {
  //   figure.addEventListener('click', function() {
  //     this.classList.toggle('enlarged');
  //   });
  // });
})
/*window.onscroll =() =>{

    m.classList.remove('fa-times');
    header.classList.remove('active');
}
  */