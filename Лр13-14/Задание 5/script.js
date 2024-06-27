document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Проверка валидации полей формы
        let isValid = true;

        // Функция для проверки пустых полей
        function validateRequired(field) {
            if (field.value.trim() === '') {
                isValid = false;
                field.classList.add('invalid');
                field.setAttribute('placeholder', 'Это поле обязательно для заполнения!');
            } else {
                field.classList.remove('invalid');
                field.removeAttribute('placeholder');
            }
        }

        // Проверка имени
        validateRequired(form.elements['name']);

        // Проверка email
        const emailField = form.elements['email'];
        if (!isValidEmail(emailField.value.trim())) {
            isValid = false;
            emailField.classList.add('invalid');
            emailField.setAttribute('placeholder', 'Введите корректный email!');
        } else {
            emailField.classList.remove('invalid');
            emailField.removeAttribute('placeholder');
        }

        // Проверка телефона (допустим в данном случае любой ввод)
        validateRequired(form.elements['phone']);

        // Дополнительная проверка, если необходимо
        // validateLength(form.elements['message'], min, max);

        // Если форма валидна, можно отправить данные
        if (isValid) {
            // Действие при успешной валидации формы
            alert('Форма успешно заполнена и отправлена!');
            form.reset(); // Очистить форму
        }
    });

    // Функция для проверки корректности email
    function isValidEmail(email) {
        // Простейшая проверка на корректный формат email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Стилизация полей с ошибками
    form.addEventListener('input', function(event) {
        if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
            event.target.classList.remove('invalid');
            event.target.removeAttribute('placeholder');
        }
    });
});
