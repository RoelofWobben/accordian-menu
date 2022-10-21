buttons = document.querySelectorAll('.faq-btn'); 

// make the eventListeners 

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
       // close open questions
        
        buttons.forEach(button => {
            button.setAttribute('aria-expanded', 'false')
        }); 

        // open the chosen question 
        
        let target = e.currentTarget;
        let collapsed = (e.currentTarget).getAttribute('aria-expanded'); 
        if (collapsed === "true"){
            target.setAttribute('aria-expanded', 'false');
            
            
        }
        else {
         
            target.setAttribute('aria-expanded', 'true');
        }
   
    })
});  


        