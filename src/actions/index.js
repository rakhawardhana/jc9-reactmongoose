// action creator

export const selectSong = (song) => {
    return { // mereturn objek
        type: 'SONG_SELECTED', // untuk menentukan reducer mana yang akan memproses
        payload: song // berisi data yang akan di state /{title : 'string'}
    }
}


export const selectArtist = (artist) => {
    return {
        type: 'ARTIST_SELECTED',
        payload: artist

    }
}

export const selectFilm = (film) => {
    return {
        type: 'FILM_SELECTED',
        payload: film
    }
}