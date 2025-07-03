document.addEventListener('DOMContentLoaded', function() {

const whatsapp = document.getElementById('whatsapp');
const modalWhats =  document.getElementById('modal-whatsapp')
whatsapp.addEventListener('click', function() {
    modalWhats.classList.add('modal-whatsapp')
})

modalWhats.addEventListener('click', function() {
    this.classList.remove('modal-whatsapp')
})

})