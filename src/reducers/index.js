import {combineReducers} from 'redux'


// reducer : function
// Reducer untuk generate data awal
const songsReducer = () => {
    return [
        {
            title: 'Forever Young',
            artist: 'Black Pink',
            duration: '4:05',
            personnel: ['Lisa', 'Kim Jennie', 'Kim Ji', 'Rose']
        },
        {
            title: 'Lucid Dream',
            artist: "Monogram" ,
            duration: '3:09',
            personnel: ["Kevin", "Riwon"] 
        },
        {
            title: 'Let\'s not fall in love',
            artist: "Big-Bang" ,
            duration: '4:20',
            personnel: ["Seungri", "Taeyang", "Daesung", "G-Dragon", "T.O.P"]
        },
        {
            title: 'Save Me',
            artist: "BTS" ,
            duration: '2:12',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        },
        {
            title: 'Blood, Sweat, and Tears',
            artist: "Bangtan Boys" ,
            duration: '5:15',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        }
    ]


} 

// Reducer untuk handle pemilihan lagu
// data yang di return reducer, data yang akan disimpan di state
// Reducer tidak boleh me-return undefined

const filmsReducer = () => {
    return [
        {
            title: 'Forever Young',
            artist: 'Black Pink',
            duration: '4:05',
            personnel: ['Lisa', 'Kim Jennie', 'Kim Ji', 'Rose']
        },
        {
            title: 'Lucid Dream',
            artist: "Monogram" ,
            duration: '3:09',
            personnel: ["Kevin", "Riwon"] 
        },
        {
            title: 'Let\'s not fall in love',
            artist: "Big-Bang" ,
            duration: '4:20',
            personnel: ["Seungri", "Taeyang", "Daesung", "G-Dragon", "T.O.P"]
        },
        {
            title: 'Save Me',
            artist: "BTS" ,
            duration: '2:12',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        },
        {
            title: 'Blood, Sweat, and Tears',
            artist: "Bangtan Boys" ,
            duration: '5:15',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        }
    ]


} 

const selectedSongReducer = (data = [], action) => { // parameter data kalo kosong bingung ngambil dari mana
    if(action.type == 'SONG_SELECTED') {
        return [action.payload] // {title : 'string'}
    }

    return data  //data awall
    
}

const selectedSongReducer2 = (data = null, action) => {
    if(action.type == 'ARTIST_SELECTED') {
        return action.payload // {title : 'string'}
    }

    return data
    
}

const selectedFilmReducer = (data = [], action) => {
    if(action.type == 'FILM_SELECTED')  {
        return [action.payload] 
    }

    return data
}

// combinereducer akan return sesuatu, yang akan di export
// anggap aja ini laci
export default combineReducers({
    //key : reducer
    //CUST: REG
    //key : reducer
    
    songs: songsReducer,
    // songsreducer menyimpan data di properti songs
    films: filmsReducer,
    selectedSong: selectedSongReducer, //{title : 'string'}
    selectedArtist: selectedSongReducer2,
    selectedFilm: selectedFilmReducer


}) 



