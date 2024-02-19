document.addEventListener("DOMContentLoaded", function() {
    const addButtons = document.querySelectorAll(".add-btn");
    addButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity < 2) {
                quantity++;
                quantityElement.textContent = quantity;
            }
        });
    });
});
