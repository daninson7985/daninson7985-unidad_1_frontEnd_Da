document.addEventListener('DOMContentLoaded', () => {
    // Simulamos carga de datos desde el Seeder (User 1)
    const user = {
        name: 'Daninson Soto',
        email: 'user1@demo.cl',
        birth: '2000-01-10'
    };

    // Llenar campos
    document.getElementById('editNombre').value = user.name;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editFecha').value = user.birth;

    document.getElementById('formPerfilUsuario').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('editNombre');
        const p1 = document.getElementById('pass1');
        const p2 = document.getElementById('pass2');
        const feedback = document.getElementById('feedbackUsuario');

        // Limpiar estilos previos
        [nombre, p1, p2].forEach(el => el.classList.remove('is-invalid'));
        feedback.textContent = "";

        // Validaciones de Rúbrica
        if (nombre.value.trim() === "") {
            nombre.classList.add('is-invalid');
            feedback.textContent = "El nombre es obligatorio.";
            feedback.style.color = "red";
            return;
        }

        if (p1.value !== "" || p2.value !== "") {
            if (p1.value.length < 8) {
                p1.classList.add('is-invalid');
                feedback.textContent = "La contraseña debe tener al menos 8 caracteres.";
                feedback.style.color = "red";
                return;
            }
            if (p1.value !== p2.value) {
                p2.classList.add('is-invalid');
                feedback.textContent = "Las contraseñas no coinciden.";
                feedback.style.color = "red";
                return;
            }
        }

        // Simulación de éxito
        feedback.textContent = "¡Perfil actualizado con éxito!";
        feedback.style.color = "#2ec4b6";
        
        // Actualizar vista previa
        document.getElementById('infoName').textContent = nombre.value;
    });
});

function logout() {
    localStorage.clear();
    window.location.assign('login.html');
}