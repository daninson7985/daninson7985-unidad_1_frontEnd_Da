<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>SportClub | Registro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="glass-card text-center" style="max-width: 500px; width: 100%;">
        <img src="../assets/LogosPortClub.png" class="mb-4" style="height: 60px;">
        <h2 class="fw-bold text-gold">CREAR CUENTA</h2>
        <form id="formRegistro" class="text-start mt-4">
            <div class="mb-3">
                <label class="small fw-bold">NOMBRE COMPLETO</label>
                <input type="text" id="regNombre" class="form-control bg-dark text-white border-secondary">
                <span id="errNombre" class="error-text d-none">El nombre es obligatorio</span>
            </div>
            <div class="mb-3">
                <label class="small fw-bold">EMAIL</label>
                <input type="email" id="regEmail" class="form-control bg-dark text-white border-secondary">
                <span id="errEmail" class="error-text d-none">Email inválido</span>
            </div>
            <div class="row">
                <div class="col-6 mb-3">
                    <label class="small fw-bold">CONTRASEÑA</label>
                    <input type="password" id="regPass1" class="form-control bg-dark text-white border-secondary">
                </div>
                <div class="col-6 mb-3">
                    <label class="small fw-bold">CONFIRMAR</label>
                    <input type="password" id="regPass2" class="form-control bg-dark text-white border-secondary">
                </div>
            </div>
            <span id="errPass" class="error-text d-none text-center mb-3">Las contraseñas no coinciden o son cortas</span>
            <button type="submit" class="btn btn-sport w-100 mt-3">REGISTRARME</button>
            <p class="mt-4 text-center small">¿Ya tienes cuenta? <a href="login.html" class="text-gold">Inicia Sesión</a></p>
        </form>
    </div>
    <script src="../js/registro.js"></script>
</body>
</html>