import Dexie from "dexie"

export const db = new Dexie('animeDB');

// db.version(1).stores({
//     friends: '++id, name, age', // Primary key and indexed props
// });

db.version(2).stores({
    animes: 'mal_id', // Primary key and indexed props
});

export async function addAnime (newAnime) {

    await db.animes.add(newAnime)

}

export async function getAllAnimes () {

    return db.animes.toArray()

}

// Test
// export function addItem(newFriend){

//     db.friends.add(newFriend)

// }

// export function getAllFriends(){

//     return db.friends.toArray()

// }
  