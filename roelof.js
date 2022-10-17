buttons = document.querySelectorAll('.faq-btn'); 

// make the eventListeners 

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        let target = e.currentTarget;
        console.log(e.currentTarget)

        let icon = target.querySelector(img); 
        let collapsed = (e.currentTarget).getAttribute('aria-expanded'); 
        if (collapsed === "true"){
            target.setAttribute('aria-expanded', 'false');
            
        }
        else {
         
            target.setAttribute('aria-expanded', 'true'); 
        }

         
        console.log(icon);
    
    })
});  


        