import React from 'react'

const Home = () => {
  return (
    <div className='home-page'>
      <section className="section-1">
        <div className="hero-text-box">
          <h1 >Tunne Car Wash</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officiis repudiandae minima quasi pariatur repellat laborum explicabo neque voluptatem. Dolorem modi necessitatibus aperiam, odio omnis suscipit accusantium aliquid assumenda praesentium!</p>
          <a href="/store">
            <button className='btn btn-warning home-page-btn'>Explore</button>
          </a>
        </div>
      </section>
      <section className="section-2">
        <div className="hero-text-box">
          <h1 >In-bay Automatics</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officiis repudiandae minima quasi pariatur repellat laborum explicabo neque voluptatem. Dolorem modi necessitatibus aperiam, odio omnis suscipit accusantium aliquid assumenda praesentium!</p>
          <a href="/store">
            <button className='btn btn-warning home-page-btn'>Explore</button>
          </a>
        </div>
      </section>
      <section className="section-3">
        <div className="hero-text-box">
          <h1 >Commercial Washers</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officiis repudiandae minima quasi pariatur repellat laborum explicabo neque voluptatem. Dolorem modi necessitatibus aperiam, odio omnis suscipit accusantium aliquid assumenda praesentium!</p>
          <a href="/store">
            <button className='btn btn-warning home-page-btn'>Explore</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home