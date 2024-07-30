const cat = document.getElementById('cat');
cat.addEventListener("click", getNewCat);
async function getNewCat() {
    cat.style.cursor = 'wait';
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const jsonData = await response.json();

}
