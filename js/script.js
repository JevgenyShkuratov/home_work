let email = document.getElementById('email');
let custom_checkbox = document.getElementById('custom_checkbox');


function validateForm() {
    if (email.value === '') {
        alert('Email address is required');
        return false;
    }
    if (custom_checkbox.checked === false) {
        alert('“You must accept the terms and conditions');
        return false;
    }

    if (email.value.endsWith('.co')) {
        alert('We are not accepting subscriptions from Colombia emails');
        return false;
    }
    return true;

}