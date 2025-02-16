import React from 'react'
import "../styles/Home.css"
import Navbar from '../component/Navbar'
function Home() {
  return (
   <>
   <Navbar/>
      <div className='top-container'>
          <div className='heading-top'>
            <h1 className='main-heading'>
              INNER LINK
            </h1>
            <h6 className='sub-heading'>
              Explore the New You
            </h6>
          </div>
          <div className="image-top">
            <img src="https://png.pngtree.com/png-clipart/20240516/original/pngtree-illustration-of-camping-in-the-wild-forest-png-image_15107429.png" alt="" 
            className='img-top'
            />
          </div>
      </div>



      <section className="section-two">
      <div className="first-section">
        <h1 className='section-heading'>
          SOME HEADING
        </h1>
      </div>
      <div className="content-container">
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fuga, quo labore molestiae cupiditate cum amet veniam. Commodi qui sint, optio harum quae sequi! Suscipit reprehenderit totam, blanditiis quos illo laborum reiciendis corrupti veritatis possimus cupiditate explicabo debitis, facilis eveniet.
        </div>
        <div className="content-img">
          <img src="https://cdn.dribbble.com/users/2218682/screenshots/6132827/2.gif" alt="" />
        </div>
      </div>
      </section>


      <section className="section-three">
      <div className="first-section">
        <h1 className='section-heading'>
          SOME HEADING
        </h1>
      </div>
      <div className="content-container">
      <div className="content-img">
          <img src="https://i.pinimg.com/originals/55/74/03/557403fb6cd94aeb6e6a7407c704b666.gif" alt="" />
        </div>
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fuga, quo labore molestiae cupiditate cum amet veniam. Commodi qui sint, optio harum quae sequi! Suscipit reprehenderit totam, blanditiis quos illo laborum reiciendis corrupti veritatis possimus cupiditate explicabo debitis, facilis eveniet.
        </div>
      
      </div>
      </section>


      <section className="section-four">
      <div className="first-section">
        <h1 className='section-heading'>
          SOME HEADING
        </h1>
      </div>
      <div className="content-container">
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fuga, quo labore molestiae cupiditate cum amet veniam. Commodi qui sint, optio harum quae sequi! Suscipit reprehenderit totam, blanditiis quos illo laborum reiciendis corrupti veritatis possimus cupiditate explicabo debitis, facilis eveniet.
        </div>
        <div className="content-img">
          <img src="https://img.freepik.com/premium-vector/man-seated-observing-mountainous-landscape-vector-illustration_1120558-42213.jpg" alt="" />
        </div>
      </div>
      </section>
   </>
  )
}

export default Home
