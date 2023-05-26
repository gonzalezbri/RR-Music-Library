import GalleryItem from './GalleryItem'

function Gallery (props) {
    const display = props.data.map((song, i) => <GalleryItem song={song} key={i} />)

    return (
        <div>
            <h1>Gallery</h1>
            {display}
        </div>
    )
}

export default Gallery
