const API_KEY = "live_4fAoXcfquooTr8CjOfEt7aQRbRWFsxRcGmJNLweC9TguMl3giMhVvQKSg4HUtaVm"
const BASE_URL = "https://api.thecatapi.com/v1/images/search?limit=10"
export function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

export async function fetchRandomCats() {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
    return fetchData(url);
}

export async function fetchCatByCategory(category) {
    const url = `https://api.thecatapi.com/v1/images/search?category_ids=${category}`;
    return fetchData(url);
}