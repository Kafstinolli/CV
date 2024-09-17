function registrarse() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Verifica si el usuario ya existe
    const userExists = users.some(u => u.username === username);

    if (userExists) {
        Swal.fire({
            icon: 'info',
            title: 'Upss',
            text: 'El nombre de usuario ya existe',
        }).then(() => {
            window.location.href = 'index.html'; 
        });
    } else {
        // Agrega el nuevo usuario a la lista
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Ahora puedes iniciar sesión!',
        }).then(() => {
            window.location.href = 'index.html'; 
        });
    }
}