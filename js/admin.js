document.addEventListener('DOMContentLoaded', () => {
    // Datos basados en tus Seeders
    const usuarios = [
        { id: 1, name: 'Demo User 1', email: 'user1@demo.cl', role: 'user', birth: '2000-01-10', meta: 'Deporte: Football (3/semanas)' },
        { id: 2, name: 'Demo User 2', email: 'user2@demo.cl', role: 'user', birth: '2001-03-22', meta: 'Deporte: Basketball (2/semanas)' },
        { id: 3, name: 'Demo Coach 1', email: 'coach1@demo.cl', role: 'coach', birth: '1995-05-18', meta: 'Especialidad: Functional Training' },
        { id: 4, name: 'Demo Coach 2', email: 'coach2@demo.cl', role: 'coach', birth: '1993-11-08', meta: 'Especialidad: Endurance' },
        { id: 5, name: 'Demo Admin 1', email: 'admin1@demo.cl', role: 'admin', birth: '1990-09-01', meta: 'Cargo: Coordinator' }
    ];

    const tabla = document.getElementById('tablaAdmin');

    usuarios.forEach(u => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><b class="text-white">${u.name}</b></td>
            <td class="text-white-50">${u.email}</td>
            <td><span class="badge-${u.role}">${u.role.toUpperCase()}</span></td>
            <td><small>${u.meta}</small></td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-warning" onclick="verDetalle(${u.id})">
                    <i class="bi bi-eye"></i> Ver
                </button>
                <button class="btn btn-sm btn-outline-danger ms-1">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tabla.appendChild(row);
    });
});

// Función para ver info personal detallada
function verDetalle(id) {
    const modal = new bootstrap.Modal(document.getElementById('modalInfo'));
    const content = document.getElementById('modalBodyContent');
    
    // Aquí podrías buscar en el array por ID
    content.innerHTML = `
        <p><b>ID de Sistema:</b> ${id}</p>
        <p><b>Fecha de Nacimiento:</b> Según registro de Seeder</p>
        <p><b>Estado:</b> Activo</p>
        <p><b>Permisos:</b> Nivel Acceso ROL</p>
        <div class="alert alert-warning py-2 small">Este usuario tiene acceso total a sus módulos correspondientes.</div>
    `;
    modal.show();
}

function logout() {
    localStorage.clear();
    window.location.assign('login.html');
}