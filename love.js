document
        .getElementById("loveIcon")
        .addEventListener("click", function () {
          const icon = this;
          const currentState = icon.getAttribute("data-state");

          // Toggle icon based on the current state
          if (currentState === "outline") {
            icon.src = "icon/love-filled.png";
            icon.setAttribute("data-state", "filled");
          } else {
            icon.src = "icon/love.png"; // Path ke ikon 'outline'
            icon.setAttribute("data-state", "outline");
          }
        });