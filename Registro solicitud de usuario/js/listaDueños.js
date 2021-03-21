'use strict'

const tabla = document.querySelector('#tbl-servicios tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaServicios.forEach(servicios => {
        if (servicios.nombre.toLowerCase().includes(filtro) || servicios.servicio.toLowerCase().includes(filtro) || servicios.estado.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = servicios.nombre;
            fila.insertCell().innerHTML = servicios.cantidad;
            fila.insertCell().innerHTML = servicios.servicio;
            fila.insertCell().innerHTML = servicios.estado;

            let celdaAcciones = fila.insertCell();

            let btnAceptar = document.createElement('a');
            btnAceptar.href = '#';
            btnAceptar.classList.add('btnAceptar');
            btnAceptar.classList.add('fas');
            btnAceptar.classList.add('fa-check-circle');

            btnAceptar.addEventListener('click', aceptarServicio);
            celdaAcciones.appendChild(btnAceptar);

            let btnRechazar = document.createElement('a');
            btnRechazar.href = '#';
            btnRechazar.classList.add('btnRechazar');
            btnRechazar.classList.add('fas');
            btnRechazar.classList.add('fa-ban');

            btnRechazar.addEventListener('click', rechazarServicio);
            celdaAcciones.appendChild(btnRechazar);

        }
    });
};

function aceptarServicio() {
    Swal.fire({
            title: 'Servicio aceptado',
            icon: 'success'
        })
        (servicios.estado).innerHTML == ('Nuevo');
};

function rechazarServicio() {
    Swal.fire({
        'icon': 'warning',
        'text': '¿Estás seguro que deseas rechazar el servicio?',
        'showCancelButton': true,
        'confirmButtonText': '¡Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'El servicio ha sido rechazado',
                'success'
            )
        }
    })
};

mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);