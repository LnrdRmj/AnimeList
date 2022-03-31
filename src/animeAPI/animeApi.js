var apiEndPoint = 'https://api.jikan.moe/v4/'

import Dexie from "dexie"
import axios from "axios"

export const db = new Dexie('animeDB');

db.version(2).stores({
    animes: 'mal_id', // Primary key and indexed props
});

export function search(toSearch){

    return axios.get(apiEndPoint + 'anime', {
        params: {
            q: toSearch
        }
    })

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