function Storage(){

}

Storage.prototype.getFromStorage = function (){
    let films;

    if(localStorage.getItem("films") === null){
        films = []
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.addToStorage = function(newFilm){
    let films = this.getFromStorage();

    films.push(newFilm);
    localStorage.setItem("films" , JSON.stringify(films));
}

Storage.prototype.deleteFromStorage = function(deleteFilm){
    let films = this.getFromStorage();

    films.forEach(function(film,index){
        if(film.title === deleteFilm){
            films.splice(index,1);
        }
    })

    localStorage.setItem("films" , JSON.stringify(films));
}