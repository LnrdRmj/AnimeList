var apiEndPoint = '/api/' //This works thanks to a proxy in vite.config.js
var localApiEndPoint = 'http://localhost:3030/' //This works thanks to a proxy in vite.config.js

import axios from "axios"
import * as DB from '../animeAPI/db'

export function search(toSearch){

    var options = {
        method: 'GET',
        url: apiEndPoint + 'anime',
        params: {q: toSearch},
        headers: {
            "Access-Control-Allow-Origin" : "*",
            'x-rapidapi-host': 'jikan1.p.rapidapi.com',
            'x-rapidapi-key': '2f5006fe38mshc85f9f66949f01ep1420b7jsnbf705c1ce8b3',
        }
    }

    return axios.request(options)

}

export function getAnime(id) {

    var options = {
        method: 'GET',
        url: apiEndPoint + 'anime/' + id,
        headers: {
            "Access-Control-Allow-Origin" : "*",
            'x-rapidapi-host': 'jikan1.p.rapidapi.com',
            'x-rapidapi-key': '2f5006fe38mshc85f9f66949f01ep1420b7jsnbf705c1ce8b3',
        }
    }

    return axios.request(options)

}

export function searchAnimeByTitle(title) {

    let animes = DB.getAllAnimes()
    
    if (title === '') {
        return animes
    }

    return animes.filter( anime  => {

        return anime.title?.toLowerCase().includes(toFilter) 
                || anime.title_english?.toLowerCase().includes(toFilter)

    })

}

// export function saveAnime(anime) {

//     var options = {
//         method: 'PUT',
//         url: localApiEndPoint + 'addAnime',
//         params: {anime: anime},
//         headers: {
//             "Access-Control-Allow-Origin" : "*",
//             'x-rapidapi-host': 'jikan1.p.rapidapi.com',
//             'x-rapidapi-key': '2f5006fe38mshc85f9f66949f01ep1420b7jsnbf705c1ce8b3',
//         }
//     }

//     return axios.request(options)

// }