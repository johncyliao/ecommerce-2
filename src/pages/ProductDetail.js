import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from "../Context";
import { Carousel } from 'react-bootstrap';
import ToTopBtn from '../components/ToTopBtn'


const ProductDetail = () => {
    const {allPhotos, heartIcon, cartIcon} = useContext(Context)
    const {productName} = useParams()
    const thisPhoto = allPhotos.find(product => product.name === productName.replace(/\-/g, " "))

    return (
        <div>
            <ToTopBtn />
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thisPhoto.address} 
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>{thisPhoto.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thisPhoto.address} 
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide</h3>
                    <p>{thisPhoto.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thisPhoto.address} 
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide</h3>
                    <p>{thisPhoto.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    )
}

export default ProductDetail