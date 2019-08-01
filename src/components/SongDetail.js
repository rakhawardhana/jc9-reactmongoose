import React from 'react'
import {connect} from 'react-redux'

// import { bindActionCreators } from '../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
// import {mapStateToProps} from './SongList'
// import {selectSong} from '../actions/index'
// import SongList from './SongList'



class SongDetail extends React.Component{

    renderList = () => {

        if (this.props.lagu === []) {
            return []
        } else { return this.props.lagu.map(song => {
            return( 
                <div>
                {/* // className='d-flex justify-content-between border-bottom mb-1' key={index}> */}
                     <div>{song.title}</div>
                     <div>{song.artist}</div>
                     <div>{song.duration}</div>
                
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
        lagu: state.selectedSong
    }
}

// songs itu property di state
 // ini tuh proses dari state ke komponen


// export default connect(mapStateToProps, {selectSong}) (SongDetail)
export default connect(
    
    mapStateToProps
    ,{}
    
) (SongDetail)
