const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
fetch("https://type.fit/api/quotes")
.then(res => res.json())
.then(data => {
    let number = Math.floor(Math.random()* 10);
    quotes.innerHTML = `${data[number].text}`;
    author.innerHTML = `-${data[number].author}`;
})
})
