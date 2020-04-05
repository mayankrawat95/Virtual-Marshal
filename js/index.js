var accordion__Box = document.querySelector(".accordion").children;

for(let i=0;i<accordion__Box.length;i++){
    const heading = accordion__Box[i].querySelector(".heading");

    heading.addEventListener("click", function(){
        
      var panel = this.nextElementSibling;
        
      var prevMaxHeight = panel.style.maxHeight;

      for(let j=0; j<accordion__Box.length; j++){
            accordion__Box[j].querySelector(".body").style.maxHeight = null;
            accordion__Box[j].querySelector(".plus-sign1").classList.remove("sign-minus");
            accordion__Box[j].querySelector(".plus-sign1").classList.add("sign");
              
        } 

           if (prevMaxHeight) {
              panel.style.maxHeight = null;
              accordion__Box[i].querySelector(".plus-sign1").classList.toggle("sign-minus");
             } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
              accordion__Box[i].querySelector(".plus-sign1").classList.toggle("sign");
              } 
     
       //accordion__Box[i].querySelector(".plus-sign1").classList.toggle("sign-minus");
    // accordion__Box[i].querySelector(".plus-sign1").classList.toggle("sign");

    //accordion__Box[i].querySelector(".body").style.maxHeight = accordion__Box[i].querySelector(".body").scrollHeight + "px"
    accordion__Box[i].querySelector(".plus-sign1").classList.add("sign-minus");
    //accordion__Box[i].querySelector(".plus-sign1").classList.remove("sign");

    });
}