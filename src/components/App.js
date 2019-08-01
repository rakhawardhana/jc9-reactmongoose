import React from 'react'

import SongList from './SongList'
import SongDetail from './SongDetail'
import ArtistDetail from './ArtistDetail'
import FilmDetail from './FilmDetail'
import FilmList from './FilmList'

class App extends React.Component{
    render() {
        return (
            <div className = 'container' >
                <SongList />
                <SongDetail /> 
                <ArtistDetail />
                <FilmList />
                <FilmDetail />
            </div>
        )
    }
}

export default App