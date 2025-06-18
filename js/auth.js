document.addEventListener('DOMContentLoaded', () => {
    
    const showError = (inputElement, message) => {
        const inputGroup = inputElement.parentElement;
        // Tambahkan class 'error' untuk styling CSS (opsional)
        inputGroup.classList.add('error'); 
        
        let errorElement = inputGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            inputGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
    };

    
    const clearError = (inputElement) => {
        const inputGroup = inputElement.parentElement;
        inputGroup.classList.remove('error');
        const errorElement = inputGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    };

    
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const username = document.getElementById('username');
            const password = document.getElementById('password');
            let isValid = true;

           
            clearError(username);
            clearError(password);

            
            if (username.value.trim() === '') {
                showError(username, 'Username atau Email wajib diisi.');
                isValid = false;
            }
            if (password.value.trim() === '') {
                showError(password, 'Password wajib diisi.');
                isValid = false;
            }

            
            if (isValid) {
                console.log('Login berhasil, mengarahkan ke homepage...');
                window.location.href = 'homepage.html';
            }
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            let isValid = true;

            clearError(username);
            clearError(email);
            clearError(password);
            clearError(confirmPassword);

            if (username.value.trim() === '') {
                showError(username, 'Username wajib diisi.');
                isValid = false;
            }
            if (email.value.trim() === '') {
                showError(email, 'Email wajib diisi.');
                isValid = false;
            }
            if (password.value.trim() === '' || password.value.length < 6) {
                showError(password, 'Password minimal 6 karakter.');
                isValid = false;
            }
            if (confirmPassword.value.trim() !== password.value.trim()) {
                showError(confirmPassword, 'Konfirmasi password tidak cocok.');
                isValid = false;
            }

            if (isValid) {
                console.log('Sign up berhasil, mengarahkan ke homepage...');
                window.location.href = 'homepage.html';
            }
        });
    }
});