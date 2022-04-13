import React, { useContext } from "react"
import { Context } from "../Context"
// import { getClass } from "../utils"
import Image from "../components/Image"
import ToTopBtn from '../components/ToTopBtn'


function Products() {
  const {allPhotos} = useContext(Context)
  // console.log(allPhotos)

  const imageElements = allPhotos.map((photo, index) => (
    <Image key={index} photo={photo}/>
  ))

  return (
      // <main className="photos">
      <main className="products">
          
          {imageElements}
          <ToTopBtn />
      </main>
  )
}

export default Products