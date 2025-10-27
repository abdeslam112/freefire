const form = document.getElementById('signup-form');
const formContainer = document.getElementById('form-container');
const successContainer = document.getElementById('success-container');
const backButton = document.getElementById('back-button');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // 
    formContainer.style.display = 'none'; //
    successContainer.style.display = 'block'; // 
});

// 
backButton.addEventListener('click', function() {
    successContainer.style.display = 'none';
    formContainer.style.display = 'block';
    form.reset(); //
});

