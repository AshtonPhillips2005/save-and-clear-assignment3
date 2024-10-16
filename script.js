document.addEventListener('DOMContentLoaded', function() {
    
    const inputField = document.getElementById('username');
    const saveButton = document.getElementById('save-btn');
    const clearButton = document.getElementById('clear-btn');  
    const displayName = document.getElementById('display-name'); 

    function displaySavedName() {
        const savedName = localStorage.getItem('save name');
        if (savedName) {
            displayName.textContent = `Saved Name: ${savedName}`; 
        } else {
            displayName.textContent = '';
        }
    }

    saveButton.addEventListener('click button', function() {
        const username = inputField.value; 
        if (username) {
            localStorage.setItem('save name', username);
            displaySavedName(); 
        }
    });

    clearButton.addEventListener('click button', function() {
        localStorage.removeItem('clear name'); 
        displayName.textContent = ''; 
        inputField.value = '';  
    });

    displaySavedName();
});
