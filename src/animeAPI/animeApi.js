var apiEndPoint = '/api/' //This works thanks to a proxy in vite.config.js
var localApiEndPoint = 'http://localhost:3030/' //This works thanks to a proxy in vite.config.js

import Dexie from "dexie"
import axios from "axios"

export const db = new Dexie('animeDB');

db.version(2).stores({
    animes: 'mal_id', // Primary key and indexed props
});

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

export async function addAnime (newAnime) {

    // All because variable anime is a proxy thx to vue and it cannot be cloned (or whatever that means)
    await db.animes.add(JSON.parse(JSON.stringify(newAnime))) // Bullshit

}

export async function getAllAnimes () {

    return db.animes.toArray()

}

export async function getAnime(id) {    

    return (await getAllAnimes()).filter( anime => { return anime.mal_id == id; })[0]

}

export async function searchAnimeByTitle(title) {

    let animes = await getAllAnimes()
    
    if (title === '') {
        return animes
    }

    return animes.filter( anime  => {

        return anime.title?.toLowerCase().includes(title) 
                || anime.title_english?.toLowerCase().includes(title)

    })

}

export async function removeAnime(id) {

    return await db.animes.delete(id);

}