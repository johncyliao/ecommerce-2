import React, {useContext} from 'react'
import ToTopBtn from '../components/ToTopBtn'
import ContactForm from '../components/ContactForm';
import '../styles/home.css'
import { Carousel } from 'react-bootstrap';
import { Context } from "../Context";

const Home = () => {
  const {allPhotos} = useContext(Context)

  const homeBanner = allPhotos.map((photo) => 
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image"
        src={photo.address} 
        alt="First slide"
      />
      <Carousel.Caption className='carousel-caption'>
        <h3>{photo.name}</h3>
        <p>{photo.description}</p>
        <a href="/product">
          <button className='home-page-btn'>Explore</button>
        </a>
      </Carousel.Caption>
    </Carousel.Item>
    )


  return (
    <div className='home-page'>
      <Carousel>
        {homeBanner}
      </Carousel>
      <div className="home-intro-container">
        <div className="home-intro">
          <h3>The Ultimate Carwash System Factory</h3>
          <h4>Quality speaks louder than propaganda. </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus architecto magni cupiditate perferendis dolores, similique eligendi non? Eveniet possimus distinctio nulla eius exercitationem asperiores sit non dolorum quidem provident.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus architecto magni cupiditate perferendis dolores, similique eligendi non? Eveniet possimus distinctio nulla eius exercitationem asperiores sit non dolorum quidem provident.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus architecto magni cupiditate perferendis dolores, similique eligendi non? Eveniet possimus distinctio nulla eius exercitationem asperiores sit non dolorum quidem provident.</p>
          <button>Product Catalog</button>
        </div>
      </div>
      <ContactForm />
      {/* <section className="section-1">
        <div className="hero-text-box">
          <h1 >Tunne Car Wash</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officiis repudiandae minima quasi pariatur repellat laborum explicabo neque voluptatem. Dolorem modi necessitatibus aperiam, odio omnis suscipit accusantium aliquid assumenda praesentium!</p>
          <a href="/store">
            <button className='btn btn-warning home-page-btn'>Explore</button>
          </a>
        </div>
      </section> */}
      <ToTopBtn />
    </div>
  )
}

export default Home