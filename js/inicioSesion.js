
// Función para iniciar sesión
function iniciarSesion() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: '¡Bienvenido de nuevo!',
        }).then(() => {
            window.location.href = 'index.html'; // documento de hoja de vida
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: 'Nombre de usuario o contraseña incorrectos',
        });
    }
}

