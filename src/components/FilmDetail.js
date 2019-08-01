import React from 'react'
import {connect} from 'react-redux'

class FilmDetail extends React.Component{

    renderList = () => {

        if (this.props.films === []) {
            return []
        } else { return this.props.films.map(film => {
            return( 
                <div>
                {/* // className='d-flex justify-content-between border-bottom mb-1' key={index}> */}
                     <div>{film.title}</div>
                     <div>{film.artist}</div>
                     <div>{film.duration}</div>
                
                </div>
            )

        }
        //var hasil = 
                    

        )}
        // })
        // const {title, artist, duration, personnel}= this.props.lagus
        // const hasil = (
        //     <div>
        //         <div>Title: {this.props.lagu.title}</div>
        //         <div>Duration: {this.props.lagu.duration}</div>
                
        //     </div>
        // )


    }
    
    
    
    render() {
        console.log(this.props);
        
        return (
            <div>
                <div>PEMISAH</div>
                {this.renderList()}
            </div>
        )
    }





}

const mapStateToProps = (state) => {
    return {
        films: state.selectedFilm
    }
}

export default connect(
    
    mapStateToProps
    ,{}
    
) (FilmDetail)