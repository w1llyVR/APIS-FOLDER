const get_data = async() => {
    const url = "https://rickandmortyapi.com/api/character"
    const data = await fetch(url);
    const info = await data.json()
    console.log(info);

    const doc = document.getElementById('personajes')
    doc.innerHTML = ''
    for (let i = 0; i < 20; i++) {
        doc.innerHTML += `
        <div class="card" style="width: 18rem; justify-content:center; margin:auto">
            <img src="${info.results[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${info.results[i].name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    
    `
    }

}

get_data();