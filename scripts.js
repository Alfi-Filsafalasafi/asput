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

  const decrementBtn1 = document.getElementById('decrement1');
  const incrementBtn1 = document.getElementById('increment1');
  const quantityInput1 = document.getElementById('quantity1');
  
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

  if (decrementBtn1 && incrementBtn1 && quantityInput1) {
    decrementBtn1.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput1.value);
      if (currentValue > 1) {
        quantityInput1.value = currentValue - 1;
      }
    });
  
    incrementBtn1.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput1.value);
      quantityInput1.value = currentValue + 1;
    });
  }
  



    