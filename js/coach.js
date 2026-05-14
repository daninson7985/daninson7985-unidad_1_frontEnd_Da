document.addEventListener('DOMContentLoaded', () => {
    // Datos cargados desde tus Seeders (User 1 y User 2)
    const atletas = [
        { 
            id: 1, 
            name: 'Daninson Soto (User 1)', 
            email: 'user1@demo.cl', 
            birth: '2000-01-10', 
            deporte: 'Football',
            frecuencia: '3 veces/semana',
            observaciones: 'Requiere enfoque en resistencia aeróbica.'
        },
        { 
            id: 2, 
            name: 'Demo User 2', 
            email: 'user2@demo.cl', 
            birth: '2001-03-22', 
            deporte: 'Basketball',
            frecuencia: '2 veces/semana',
            observaciones: 'Lesión previa en rodilla izquierda. Cuidado con saltos.'
        }
    ];

    const tabla = document.getElementById('tablaAtletas');

    atletas.forEach(a => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="../assets/usagi.png" class="rounded-circle" width="40"></td>
            <td><b class="text-white">${a.name}</b></td>
            <td class="text-white-50">${a.email}</td>
            <td><span class="badge bg-secondary">${a.deporte}</span></td>
            <td class="text-center">
                <button class="btn btn-info btn-sm fw-bold" onclick="verExpediente(${a.id})">
                    <i class="bi bi-file-earmark-lock"></i> VER MÁS
                </button>
            </td>
        `;
        tabla.appendChild(tr);
    });
});

function verExpediente(id) {
    // Simulamos la búsqueda del atleta por ID
    const atletas = [
        { id: 1, name: 'Daninson Soto', email: 'user1@demo.cl', birth: '10/01/2000', deporte: 'Football', freq: '3 veces', obs: 'Alta intensidad.' },
        { id: 2, name: 'Demo User 2', email: 'user2@demo.cl', birth: '22/03/2001', deporte: 'Basketball', freq: '2 veces', obs: 'Controlar fatiga.' }
    ];
    
    const a = atletas.find(x => x.id === id);
    const modal = new bootstrap.Modal(document.getElementById('modalAtleta'));
    const body = document.getElementById('detalleAtletaBody');

    body.innerHTML = `
        <div class="text-center mb-4">
            <h4 class="text-white">${a.name}</h4>
            <p class="text-info small">Atleta Certificado</p>
        </div>
        <div class="row g-3">
            <div class="col-6">
                <label class="text-white-50 small">FECHA NACIMIENTO</label>
                <p class="fw-bold">${a.birth}</p>
            </div>
            <div class="col-6">
                <label class="text-white-50 small">FRECUENCIA</label>
                <p class="fw-bold">${a.freq} por semana</p>
            </div>
            <div class="col-12">
                <label class="text-white-50 small">INFORMACIÓN MÉDICA/OBSERVACIONES</label>
                <div class="p-3 bg-black rounded border border-secondary">
                    <p class="mb-0 text-warning"><i class="bi bi-exclamation-triangle me-2"></i>${a.obs}</p>
                </div>
            </div>
        </div>
    `;
    modal.show();
}

function logout() {
    localStorage.clear();
    window.location.assign('login.html');
}