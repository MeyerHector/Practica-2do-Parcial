
const formCrearReserva = document.querySelector('#formCrearReserva')

console.log(formCrearReserva)
formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const fechaIda = document.getElementById('ida').value;
    const fechaVuelta = document.getElementById('vuelta').value;

    const body = {
        nombre,
        apellido,
        dni,
        fechaIda,
        fechaVuelta
    }
    console.log(body)
    fetch('http://localhost:3000/api/reservas', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
})