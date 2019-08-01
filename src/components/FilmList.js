import React from 'react'
import { connect } from 'react-redux'
import {selectFilm} from '../actions/index'

class FilmList extends React.Component{





    renderList = () => {
        var hasil = this.props.films.map( (film, index) => { // {title, artist, duration, personnel}
            return (
                <div className='d-flex justify-content-between border-bottom mb-1' key={index}>
                    <div>{film.title}</div>
                    <div>
                        <button className='btn btn-outline-primary m-2'
                        onClick = { () =>  {this.props.selectFilm(film)}} // parameter song disini itu objek yang masuk = payload
                        >Film Detail</button>
                    </div>
                </div>
                
            )
        })

        return hasil
    }

    render() {
        return (
            <div>
                <h1>FILMLIST Component</h1>
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
        films: state.films //this.props.songs
    }
} // songs itu property di state
 // ini tuh proses dari state ke komponen


export default connect(
    mapStateToProps, {selectFilm},
    
) (FilmList)

