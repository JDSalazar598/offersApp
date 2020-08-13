/* eslint-disable prettier/prettier */
import {API_HOST, API_KEY, LANG} from '../utils/constants';

//funcion para obtener las peliculas
export function getNewsMoviesApi(page = 1){
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;

    return fetch(url)
    .then((response) =>{
        return response.json();
    }).then((result) => {
        return result;
    });
}

//function para obtener los generos de las peliculas
export function getGenresMovies(idGenres){
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;    
    return fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((result) => {
        const arrayGenero = [];
        idGenres.forEach((id) => {
            result.genres.forEach((item)=>{
                if(item.id===id) arrayGenero.push(item.name);
            });
        });
        return arrayGenero;
    });
}

//funcion para obtener todos los generos disponibles
export function getAllGenres(){
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    });
}

//obtener peliculas por genero
export function getMoviesForGenres(idGenres){
    const url = `${API_HOST}/discover/movie/?api_key=${API_KEY}&with_genres=${idGenres}&language=${LANG}`

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    });
}