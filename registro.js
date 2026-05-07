document.getElementById('registerForm').addEventListener('submit', async (e) => {
    // 1. Detener el envío automático
    e.preventDefault();

    // 2. Obtener valores de los campos
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPass').value;
    const confirmPass = document.getElementById('regPassConfirm').value;
    const sport = document.getElementById('regSport').value;

    // 3. Obtener elementos de error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const confirmError = document.getElementById('confirmError');

    // 4. Limpiar errores previos (ocultarlos)
    [nameError, emailError, passError, confirmError].forEach(err => err.classList.add('d-none'));

    let isValid = true;

    // 5. Validaciones de la pauta
    if (name === "") {
        nameError.classList.remove('d-none');
        isValid = false;
    }

    if (email === "" || !email.includes('@')) {
        emailError.classList.remove('d-none');
        isValid = false;
    }

    // Validación: Mínimo 8 caracteres, letras y números
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        passError.classList.remove('d-none');
        isValid = false;
    }

    // Validar que coincidan
    if (password !== confirmPass) {
        confirmError.classList.remove('d-none');
        isValid = false;
    }

    // Si algo falló, no enviamos nada
    if (!isValid) return;

    // 6. Enviar datos a la API mediante Fetch
    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                full_name: name,
                email: email,
                password: password,
                role: 'user',
                metadata: {
                    interes: sport
                }
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Éxito: Redirigir al login
            window.location.href = 'login.html';
        } else {
            // Error del servidor: lo mostramos en el campo de email
            emailError.textContent = data.message || 'Error en el registro';
            emailError.classList.remove('d-none');
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor. ¿Está encendido el backend?");
    }
});