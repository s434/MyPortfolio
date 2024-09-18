

let m = document.querySelector('#menu');
let header = document.querySelector('header');

m.onclick =() =>{

    m.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// Open the modal with the full image
function openImage(imgElement) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    
    modal.style.display = "block";
    fullImage.src = imgElement.src; // Set full image source to thumbnail source
  }
  
  // Close the modal
  function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
/*window.onscroll =() =>{

    m.classList.remove('fa-times');
    header.classList.remove('active');
}
  */