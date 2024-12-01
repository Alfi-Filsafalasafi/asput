document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
  
      if (currentScroll > 60) {
        // Munculkan navbar jika jarak scroll lebih dari 100px
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
      } else {
        // Sembunyikan navbar jika kurang dari 100px
        navbar.classList.remove("navbar-visible");
        navbar.classList.add("navbar-hidden");
      }
    });
  });

  
  const decrementBtn = document.getElementById('decrement');
  const incrementBtn = document.getElementById('increment');
  const quantityInput = document.getElementById('quantity');
  
  if (decrementBtn && incrementBtn && quantityInput) {
    decrementBtn.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    incrementBtn.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  }
  



    