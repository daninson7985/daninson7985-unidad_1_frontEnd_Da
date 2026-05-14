document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPass').value.trim();
    const errorDiv = document.getElementById('loginError');

    errorDiv.classList.add('d-none');

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            const user = data.user || data.data;
            localStorage.setItem('user', JSON.stringify(user));

            const role = String(user.role).toLowerCase();
            
            // Ya estamos en la carpeta vistas, así que solo llamamos al archivo
            if (role === 'admin') {
                window.location.assign('dashboard-admin.html');
            } else if (role === 'coach') {
                window.location.assign('dashboard-coach.html');
            } else {
                window.location.assign('dashboard-usuario.html');
            }
        } else {
            errorDiv.textContent = data.message || "Credenciales incorrectas";
            errorDiv.classList.remove('d-none');
        }
    } catch (err) {
        errorDiv.textContent = "Error de conexión con el servidor.";
        errorDiv.classList.remove('d-none');
    }
});