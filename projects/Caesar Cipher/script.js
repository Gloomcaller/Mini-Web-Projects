document.addEventListener('DOMContentLoaded', () => {
    const shiftInput = document.getElementById('shift');
    const messageInput = document.getElementById('message');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const outputArea = document.getElementById('output-area');
    const inputDisplay = document.getElementById('input-display');
    const outputDisplay = document.getElementById('output-display');
    const copyBtn = document.getElementById('copy-btn');
    const errorMessage = document.getElementById('error-message');

    // positive shift = encrypt, negative = decrypt
    function caesar(text, shift) {
        shift = ((shift % 26) + 26) % 26; // Normalize shift to 0-25
        let result = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) { // Uppercase
                result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Lowercase
                result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                result += char; // Non-alphabetic characters unchanged
            }
        }

        return result;
    }

    function displayResult(inputText, outputText) {
        inputDisplay.textContent = inputText;
        outputDisplay.textContent = outputText;
        outputArea.classList.remove('hidden');
        errorMessage.textContent = '';
    }

    function handleCipher(encrypt) {
        const shift = parseInt(shiftInput.value);
        const message = messageInput.value;

        // Validate shift
        if (isNaN(shift) || shift < 1 || shift > 25) {
            errorMessage.textContent = 'Shift must be an integer between 1 and 25.';
            outputArea.classList.add('hidden');
            return;
        }

        if (!message) {
            errorMessage.textContent = 'Please enter a message.';
            outputArea.classList.add('hidden');
            return;
        }

        const effectiveShift = encrypt ? shift : -shift;
        const result = caesar(message, effectiveShift);
        displayResult(message, result);
    }

    encryptBtn.addEventListener('click', () => handleCipher(true));
    decryptBtn.addEventListener('click', () => handleCipher(false));

    // Copy output
    copyBtn.addEventListener('click', () => {
        const outputText = outputDisplay.textContent;
        if (!outputText) return;

        navigator.clipboard.writeText(outputText).then(() => {
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.classList.remove('copied');
            }, 1500);
        });
    });

    // Enter trigger
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleCipher(true);
        }
    });
});