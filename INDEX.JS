const form = document.getElementById('signup-form');
const formContainer = document.getElementById('form-container');
const successContainer = document.getElementById('success-container');
const backButton = document.getElementById('back-button');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    formContainer.style.display = 'none'; // إخفاء النموذج
    successContainer.style.display = 'block'; // إظهار صفحة الترحيب
});

// زر العودة للصفحة الرئيسية
backButton.addEventListener('click', function() {
    successContainer.style.display = 'none';
    formContainer.style.display = 'block';
    form.reset(); // إعادة تهيئة الحقول
});
