const searchbar = document.querySelector('#searchbar');
const searchbarBtn = document.querySelector ("#searchbarBtn")
const moviesSection = document.querySelector ('.moviesSection')
const APIKEY = "7704dd86";

async function getFilm() {

    try {
        
        const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=game of thrones`);
        const data = await response.json();
        console.log(data);
        for(i of data.Search){
            
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
searchbarBtn.addEventListener("click",getFilm)
