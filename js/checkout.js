document.addEventListener('DOMContentLoaded', () => {
  
    const form = document.getElementById('checkout-form');
    const email = document.getElementById('email');
    const fullname = document.getElementById('fullname');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const postcode = document.getElementById('postcode');
    const phone = document.getElementById('phone');
    const successMessage = document.getElementById('checkout-success');

   
    const showError = (input, message) => {
        const inputGroup = input.parentElement;
        inputGroup.classList.add('error');
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = message;
    };

   
    const clearError = (input) => {
        const inputGroup = input.parentElement;
        inputGroup.classList.remove('error');
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = '';
    };

  
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();

       
        [email, fullname, address, city, postcode, phone].forEach(input => clearError(input));

        let isValid = true;

       
        if (fullname.value.trim() === '') {
            showError(fullname, 'Nama lengkap wajib diisi.');
            isValid = false;
        }

        if (address.value.trim() === '') {
            showError(address, 'Alamat lengkap wajib diisi.');
            isValid = false;
        }
        
        if (city.value.trim() === '') {
            showError(city, 'Kota/Kabupaten wajib diisi.');
            isValid = false;
        }

        
        if (email.value.trim() === '') {
            showError(email, 'Alamat email wajib diisi.');
            isValid = false;
        } else if (!email.value.endsWith('@gmail.com')) {
            showError(email, 'Harap gunakan alamat email @gmail.com.');
            isValid = false;
        }

        
        if (postcode.value.trim() === '') {
            showError(postcode, 'Kode pos wajib diisi.');
            isValid = false;
        } else if (!/^\d+$/.test(postcode.value.trim())) {
            showError(postcode, 'Kode pos hanya boleh berisi angka.');
            isValid = false;
        }

        
        if (phone.value.trim() === '') {
            showError(phone, 'Nomor telepon wajib diisi.');
            isValid = false;
        } else if (!/^\d+$/.test(phone.value.trim())) {
            showError(phone, 'Nomor telepon hanya boleh berisi angka.');
            isValid = false;
        }

        
        if (isValid) {
            console.log('Form berhasil divalidasi. Mengirim data...');
            
            
            
            form.style.display = 'none';
            successMessage.style.display = 'block';
        }
    });
});