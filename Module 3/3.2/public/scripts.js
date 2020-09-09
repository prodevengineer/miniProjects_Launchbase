const modalOverlay=document.querySelector('.modal-overlay')
const cards= document.querySelectorAll('.card');
const modal=document.querySelector('.modal')

for (let card of cards){
  card.addEventListener("click",function(){ 
    modalOverlay.classList.add('active')
    
    // modal.classList.add('maximize')

    const courseId= card.getAttribute("id")
    modalOverlay.querySelector("iframe").src=`https:rocketseat.com.br/${courseId}`
    
    if (modal.classList.contains('maximize')){
      modal.classList.remove('maximize')
    } else {
      modal.classList.add('maximize')
    }

  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove('active')
})


