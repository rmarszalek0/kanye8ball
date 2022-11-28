
const button = document.querySelector('.send')
const answer = document.querySelector('.answer-container')
    
button?.addEventListener
    ('click', getKanyeQuote)

async function getKanyeQuote() {
    const promise = await fetch('https://api.kanye.rest');
    const response = await promise.json();
    if (answer) {
        answer.textContent = response.quote
    };

};



