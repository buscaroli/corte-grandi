import React from 'react'
import Pic from './Pic'

import petsJSON from '../config/petsList'

// import pet01 from '/public/images/pic01.jpg'
// import pet02 from '../assets/pets/pic02.jpg'
// import pet03 from '../assets/pets/pic03.jpg'
// import pet04 from '../assets/pets/pic04.jpg'
// import pet05 from '../assets/pets/pic05.jpg'
// import pet06 from '../assets/pets/pic06.jpg'
// import pet07 from '../assets/pets/pic07.jpg'
// import pet08 from '../assets/pets/pic08.jpg'
// import pet09 from '../assets/pets/pic09.jpg'
// import pet10 from '../assets/pets/pic10.jpg'
// import pet11 from '../assets/pets/pic11.jpg'
// import pet12 from '../assets/pets/pic12.jpg'

const Pets = () => {


    // const imageList = [pet01, pet02, pet03, pet04, pet05, pet06,
    //                     pet07, pet08, pet09, pet10, pet11, pet12]

    // const list = imageList.map(img => 
    //     <Pic key={img} img={img}/>
    // )
        
  

    const list = petsJSON.map(img => { 
        return <Pic key={img.link.default} img={img.link.default}/>
    })
    
    // list.forEach(img => console.log(img.props.img))

    return (
        <div className='gallery'>
            {list}
        </div>
    )
}

export default Pets
