let portfolio = document.querySelector(".portfolio");
          let letter = document.querySelector(".letter-image");
          let button = document.querySelector("#overlay-btn");
          let arrow = document.querySelector("h3");
          let hidden = document.querySelector(".hidden1");
          let navbar = document.querySelector("#navbar");
          let link = document.querySelector(".profile-link");
          let list = document.querySelector("#overlayed");
          let page_1 = document.querySelector(".welcome-section");
          let overlay = "off";

          button.addEventListener("click",()=>{
            function showOverlay(){
              if(overlay === "off"){
                overlay = "on";
                hidden.classList.add("hidden2");
                hidden.classList.remove("hidden1");
                page_1.classList.add("welcome-section2");
                page_1.classList.remove("welcome-section");
                list.style.display = "none";
              }
              function hideOverlay(){
                if(overlay === "on"){
                overlay = "off";
                hidden.classList.add("hidden1");
                hidden.classList.remove("hidden2");
                page_1.classList.remove("welcome-section2");
                page_1.classList.add("welcome-section");
                list.style.display = "block";
              }}
              
          }

          showOverlay();
          hideOverlay();
          })
