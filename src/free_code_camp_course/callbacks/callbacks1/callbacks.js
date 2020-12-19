const btn = document.querySelector('#item1');
const h1 = document.querySelector('#h1');

const text = 'You done fucked up, son';

btn.addEventListener('click', (e) => {
    if (h1.innerHTML !== text) {
        h1.innerHTML = text;
    }
    else {
        h1.innerHTML = 'changed this back to nothing';
    }
    console.log('btn was clicked');
});