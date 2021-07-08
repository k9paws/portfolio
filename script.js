const app= {};







app.scrollTop = () => {
    let mybutton = document.getElementById("scroll-top");
    
    window.onscroll = () => {scrollFunction()};
    
    const scrollFunction = () => {
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    }
    
    app.scrollBackTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }


      app.init = () => {
          app.scrollTop();
      }

      app.init();
      AOS.init()