document.getElementById('name-input').addEventListener('input', function () {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');
    const trimmedName = nameInput.ariaValueMax.trim();
    
    if (trimmedName === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimmedName;
    }
})
