let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// make the eventListeners 


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) =>{
       // Find elements 

       let target = e.target; // chosen checkbox 
               
        // close open questions
        
        checkboxes.forEach(checkbox => {
            if (target != checkbox) {
                checkbox.checked = false 
            }
            let paragraph = checkbox.parentElement.querySelector('p')  
            console.log(paragraph);  

            paragraph.classList.remove('active') 
        }); 
        
                  
        //add class active to the chosen paragraph if p is chosen

        let chosenParagraph = target.nextElementSibling.parentElement.querySelector('p') 
           
        if (target.checked) {
            chosenParagraph.classList.add('active'); 
        }
        
    })
});  

        