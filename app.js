import { fetchRandomCats } from "./api.js"
const gallery = document.getElementById("gallery")
function displayCats(cats) {
    gallery.innerHTML = '';
    cats.forEach(cat => {
        const catItem = document.createElement('div');
        catItem.classList.add('cat-item');
        const catImg = document.createElement('img');
        catImg.src = cat.url;
        catImg.alt = 'Cat';
        catItem.appendChild(catImg);
        gallery.appendChild(catItem);
    });
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hope it works")
    }, 2000)
})
async function loadRandomCats() {
    try {
        const cats = await fetchRandomCats();
        displayCats(cats);
    } catch (error) {
        console.error('Failed to load random cats:', error);
    }
}

window.addEventListener('DOMContentLoaded', loadRandomCats);
