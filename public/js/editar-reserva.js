const reservaId = window.location.pathname.split('/').pop();
console.log();
document.addEventListener('DOMContentLoaded', async ()=>{
    const request = await fetch(`/api/reservas/${reservaId}`)
    const reserva = await request.json()

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const dni = document.getElementById('dni');
    const fechaIda = document.getElementById('ida');
    const fechaVuelta = document.getElementById('vuelta');

    nombre.value = reserva.nombre;
    apellido.value = reserva.apellido;
    dni.value = reserva.dni;
    fechaIda.value = reserva.fechaIda;
    fechaVuelta.value = reserva.fechaVuelta;
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
        fetch(`/api/reservas/${reservaId}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    })
});
