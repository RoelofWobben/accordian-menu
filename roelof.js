buttons = document.querySelectorAll('.faq-btn'); 

// make the eventListeners 

buttons.forEach(button => {
    button.addEventListener('click', () =>{
    
        let x = button.getAttribute("aria-expanded");
        var tekst_id = button.getAttribute("aria-controls");
        var tekst_element = document.getElementById(tekst_id);

        if (x === "true"){
            x = "false";
            tekst_element.setAttribute("hidden","true");
        } else {
            x = "true";
            tekst_element.removeAttribute("hidden");
        }
        button.setAttribute("aria-expanded", x);  
    })
});  


        

