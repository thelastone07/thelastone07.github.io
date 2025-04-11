function get_index(n) {
    while (true) {
        var perm = Array.from({ length: n }, (_, i) => i);

        for (let i = perm.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [perm[i], perm[j]] = [perm[j], perm[i]];
        }

        let isDeranged = true;
        for (let i = 0; i < n; i++) {
            if (perm[i] === i) {
                isDeranged = false;
                break;
            }
        }
        if (isDeranged) {
            return perm;
        }
    }
}

const hoverElements = document.querySelectorAll('.hover-text');
const TIMEOUT = 125;
hoverElements.forEach(el => {
    el.dataset.original = el.textContent;

    el.addEventListener('mouseenter', () => {
        const originalText = el.dataset.original;
        const index = get_index(originalText.length);
        //scramble the current text once
        let currentText = originalText;
        let scrambledText = currentText.split('').map((char, i) => {
            return currentText[index[i]];
        }).join('');
        //set the scrambled text to the element
        el.textContent = scrambledText;
        currentText = scrambledText;
        //set timeout
        setTimeout(() => {
            //scramble the text again
            scrambledText = currentText.split('').map((char, i) => {
                return currentText[index[i]];
            }).join('');
            //set the scrambled text to the element
            el.textContent = scrambledText;
            setTimeout(()=> {
                //set the original text to the element
                el.textContent = originalText;
            },TIMEOUT);

        }, TIMEOUT);
}); 
});



