
document.addEventListener('DOMContentLoaded', () => {
const active_hover = () =>{
    let hover = document.querySelectorAll('#activepage');

     console.log(hover);
    hover.forEach(link => {
        link.addEventListener('click', () => {
            let actives = window.location.pathname;
            let links = link.getAttribute('href');

            if(actives == links){  
                link.classList.add('active', 'text-primary') 
            } 
            else 
            {
                link.classList.remove('active')
            }
            
         });
    })
}
active_hover();
})