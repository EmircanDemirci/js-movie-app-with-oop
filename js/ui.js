function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){

    /**
     * <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
     */

    const filmList = document.querySelector("#films");
    filmList.innerHTML += `
    <tr>
            <td><img width = "80px" src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `
    console.log(newFilm);
}

UI.prototype.showMessages = function(type,message){
    /*
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    */
    const alert = document.createElement("div");
    const cardrow = document.querySelector(".card-row");
    alert.className = `alert alert-${type}`
    alert.textContent = message;
    cardrow.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },2000)
}


UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML +=`
        <tr class="list-item">
                <td><img width = "80px" src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
            </tr>
        `
    })
}