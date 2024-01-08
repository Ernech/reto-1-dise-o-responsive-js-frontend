(function () {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                printFormData(form);
            }

            form.classList.add('was-validated');
        }, false);
    });

    function printFormData(form) {
        var formData = new FormData(form);

        console.log("Form Data:");

        formData.forEach(function (value, key) {
            console.log(key + ':', value);
        });
    }

})();
