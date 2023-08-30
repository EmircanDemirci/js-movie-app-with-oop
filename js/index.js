const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const filmList = document.querySelector("#films");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners(){
    form.addEventListener("submit" , addFilm);

    document.addEventListener("DOMContentLoaded" , function(){
        let films = storage.getFromStorage();
        ui.loadAllFilms(films);
    })


    filmList.addEventListener("click" , deleteFilm);
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        e.target.parentElement.parentElement.remove();
        storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.showMessages("success" , "Deleted!");
    }
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.showMessages("danger", "Check forms!");
    }
    else{
        const newFilm = new Film(title,director,url);


        storage.addToStorage(newFilm);

        ui.addFilmToUI(newFilm);
    }
    e.preventDefault();
}