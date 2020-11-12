import React from 'react'


const Pic = (props) => {
    return(
        <div className='gallery__frame'>
            <img className='gallery__frame--img' src={`${props.img}`} alt='Foto di un cucciolo'></img>
        </div>
    )

}

export default Pic