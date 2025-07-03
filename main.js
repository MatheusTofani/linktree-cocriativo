document.addEventListener('DOMContentLoaded', function() {

const whatsapp = document.getElementById('whatsapp');
const modalWhats =  document.getElementById('modal-whatsapp')
whatsapp.addEventListener('click', function() {
    modalWhats.classList.remove('hidden')
})

modalWhats.addEventListener('click', function() {
    this.classList.add('hidden')
})

})