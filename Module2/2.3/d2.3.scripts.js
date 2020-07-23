const modalOverlay= document.querySelector('.modal-overlay')
const courses= document.querySelectorAll(".course")
const modal= document.querySelector(".modal")

for (let course of courses){
  course.addEventListener("click", function(){
        const siteId= course.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${siteId}`
        
        if (course.classList.contains("maximize")){
          modal.classList.remove("maximize")
        } else {
          modal.classList.add("maximize")
        }  
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modal.classList.remove("maximize")
 })