const SERVER_URL = 'http://localhost/3000/api'
const reservaId = window.location.pathname.split('/').pop()
console.log('hola')
document.addEventListener('DOMContentLoaded', async ()=>{
    const reserva = await fetch(`${SERVER_URL}/reservas/${reservaId}`)
})