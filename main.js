    window.addEventListener("scroll", function () {
        const scrolled = this.scrollY;
        parallax(scrolled)


    });

    function parallax(scrollPos) {
        let incrementPosition = scrollPos*0.003
        let verticalBackgroundPos = 50/100 + incrementPosition
        document.querySelector("header").style.backgroundPosition =  `center ${verticalBackgroundPos*100}%`

    }


        var test = document.querySelector("three");

        console.log(test)
        test.addEventListener("mouseenter", function( event ) {   
        test.style.backgroundColor = "purple";
      
        // reset the color after a short delay
          setTimeout(function() {
            event.target.style.color = "";
          }, 500);
        }, false);
