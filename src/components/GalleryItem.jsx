import { useState } from 'react'

function GalleryItem (props) {
    let [showDetails, setShowDetails] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
                <h4>{props.song.primaryGenreName}</h4>
                <h4>{props.song.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setShowDetails(!showDetails)} style={{display: 'inline-block'}}>
            {showDetails ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem