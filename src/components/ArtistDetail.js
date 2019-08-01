import React from 'react'
import {connect} from 'react-redux'

class ArtistDetail extends React.Component{
    
    
    // renderList() {



    //     const hasil = 
    //     <div>
    //         <div>Personnel: {this.props.lagu.personnel}</div>
            
            
    //     </div>
    

    // return hasil
    // }

    render() {

        if(this.props.lagu === null) {
            return  (
                <h1>Artist belum dipilih</h1>
            )

            
        } else {
            return (
                <div>
                    Personnel: {this.props.lagu.personnel}
                </div>
            )
        }
        
        
    }
}


const mapStateToProps = (state) => {
    return {
        lagu: state.selectedArtist
    }
}

// songs itu property di state
 // ini tuh proses dari state ke komponen


// export default connect(mapStateToProps, {selectSong}) (SongDetail)
export default connect(
    
    mapStateToProps
    ,{}
    
) (ArtistDetail)

