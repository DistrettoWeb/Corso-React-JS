import React from 'react'


const GalleryImage = (props) => {
    const {currentIndex, photos, changeImage} = props
    const currentAuthor = photos[currentIndex]['author']
    const currentImg = photos[currentIndex]['url']

    return (<>
        <p>Autore di questa immagine: {currentAuthor}</p>
        <img src={currentImg} />
        <button onClick={changeImage}>Prossima immagine</button>
    </>)
}

export default GalleryImage


