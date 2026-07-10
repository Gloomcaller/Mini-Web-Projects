document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const convertBtn = document.getElementById('convertBtn');
    const decimalOutput = document.getElementById('decimalOutput');
    const romanOutput = document.getElementById('romanOutput');
    const binaryOutput = document.getElementById('binaryOutput');
    const message = document.getElementById('message');
    const copyButtons = document.querySelectorAll('.copy-btn');

    // Roman numeral conversion (supports 1-20000)
    function convertToRoman(num) {
        const romanNumerals = [
            { value: 10000, numeral: "X̅" },
            { value: 9000, numeral: "MX̅" },
            { value: 5000, numeral: "V̅" },
            { value: 4000, numeral: "MV̅" },
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" }
        ];
        let result = "";
        for (const { value, numeral } of romanNumerals) {
            while (num >= value) {
                result += numeral;
                num -= value;
            }
        }
        return result;
    }

    // Binary conversion
    function convertToBinary(num) {
        if (num === 0) return "0";
        let binary = "";
        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }
        return binary;
    }

    // Conversions and UI
    function updateConversions() {
        const inputValue = parseInt(numberInput.value);

        // Clear output and message
        romanOutput.textContent = '';
        binaryOutput.textContent = '';
        message.textContent = '';

        // Show decimal input
        decimalOutput.textContent = numberInput.value || '';

        if (isNaN(inputValue)) {
            message.textContent = 'Please enter a valid number';
            return;
        }

        // Roman numeral limits
        if (inputValue < 1) {
            message.textContent = 'Roman numerals: please enter a number ≥ 1';
        } else if (inputValue > 20000) {
            message.textContent = 'Roman numerals: please enter a number ≤ 20000';
        } else {
            romanOutput.textContent = convertToRoman(inputValue);
        }

        // Binary
        if (inputValue < 0) {
            message.textContent = (message.textContent ? message.textContent + ' | ' : '') + 'Binary: enter a non-negative number';
        } else {
            binaryOutput.textContent = convertToBinary(inputValue);
        }
    }
    // Convert on click
    convertBtn.addEventListener('click', updateConversions);

    // Convert on Enter
    numberInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            updateConversions();
        }
    });

    // Copy functionality
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            const textToCopy = targetEl.textContent;

            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 1500);
            }).catch(() => {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = textToCopy;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 1500);
            });
        });
    });
});