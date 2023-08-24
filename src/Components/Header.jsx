import React from 'react'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <div>
        <span className='title'>CONNECT</span>
        <MDBCarousel className='Carousel' showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block crl'
        itemId={1}
        src='https://speechsilver.com/wp-content/uploads/2021/10/Blogging-Quotes-Cover.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block crl'
        itemId={2}
        src='https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-Beige-Wallpaper-Minimalist-Line-Art-768x480.jpg'
        alt='...'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block crl'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Header
