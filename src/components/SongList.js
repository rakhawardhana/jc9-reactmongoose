import React from 'react'
import { connect } from 'react-redux'
import {selectSong} from '../actions/index'
import {selectArtist} from '../actions/index'

class SongList extends React.Component{

    renderList = () => {
        var hasil = this.props.lagu.map( (song, index) => { // {title, artist, duration, personnel}
            return (
                <div className='d-flex justify-content-between border-bottom mb-1' key={index}>
                    <div>{song.title}</div>
                    <div>
                        <button className='btn btn-outline-primary m-2'
                        onClick = { () =>  {this.props.selectSong(song)}} // parameter song disini itu objek yang masuk = payload
                        >Song Detail</button>
                        <button className='btn btn-outline-primary m-2'
                        onClick = { () => {this.props.selectArtist(song)}}
                        >Artist Detail</button>
                    </div>
                </div>
                
            )
        })

        return hasil
    }

    render() {
        return (
            <div>
                <h1>SongList Component</h1>
                 {/* {this.props.lagu.map( song => {
                     (
                        <div>{song.tittle}</div>
                    )
                })
        
                }
                 */}
                 {this.renderList()}


                

            </div>
        
        )
    }
}


const mapStateToProps = (state) => {
    return {
        lagu: state.songs //this.props.songs
    }
} // songs itu property di state
 // ini tuh proses dari state ke komponen



export default connect(
    mapStateToProps, {selectSong, selectArtist},
    
) (SongList)

// connect itu fungsi yang punya parameter  fungsi mapstatetoprops dan class songlist

