document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can add custom validation here if necessary

    // After validation, submit the form
    this.submit();
});
