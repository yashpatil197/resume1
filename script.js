// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the print button element
    const printButton = document.getElementById('printBtn');

    // Add a click event listener to the button
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
});
