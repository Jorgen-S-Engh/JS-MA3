const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4d4f8474a28b49eaa1756da85e300e2d";

const container = document.querySelector(".game-container");

async function getApi() {

  try{
    const response = await fetch(url);

    const data = await response.json();
  
    const games = data.results;
    container.innerHTML = "";
  
    for (let i = 0; i < games.length; i++) {
      console.log(games[i].name);
      console.log(games[i].rating);
      console.log(games[i].tags.length);
  
      container.innerHTML += `
      <div class="items">
        <p>Name: ${games[i].name}</p>
        <p>Rating: ${games[i].rating}</p>
        <p>Number of Tags: ${games[i].tags.length}</p>
      <div> `;
  
      if (i >= 7) {
        break;
      }
    }
    
  }catch(error){
    container.innerHTML = ("The following error has occured: " +error);
  }

}

getApi();
