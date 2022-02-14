 
import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ImageSlider() {
    var items = [
        {
            url: './images/super.jpg',
            name: " ",
            description: " "
        },
        {
            url: './images/thumbsup.jpg',
            name: " ",
            description: " "
        },
        {
            url: './images/thumbsdown.jpg',
            name: " ",
            description: " "
        },
        {
            url: './images/left.jpg',
            name: " ",
            description: " "
        },
        {
            url: './images/right.jpg',
            name: " ",
            description: " "
        },
         
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}


function Item(props) {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <img height="200px" width="200px" className="home__image" src={props.item.url} alt="" />
        </div>
    )
}

export default ImageSlider