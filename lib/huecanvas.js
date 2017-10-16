document.addEventListener("DOMContentLoaded", function(){
  let modal = document.getElementById('aboutModal');
  let openBtn = document.getElementsByClassName("open-btn")[0];
  let closeBtn = document.getElementsByClassName("close-btn")[0];

  openBtn.onclick = () => {
      modal.style.display = "block";
  }

  closeBtn.onclick = () => {
      modal.style.display = "none";
  }

  window.onclick = (event) => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
