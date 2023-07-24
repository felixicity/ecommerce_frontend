import React from 'react'
import cartonWhite  from '../assets/carton-white.jpg'
import { FaCaretRight, FaPaperPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'

const Promo = () => {
  return (
    <div className='grid wrapper'>
        <div className='promo-section'>
              <div className='promo-msg'>
                  <p className='promo-title'>30% Off</p>
                  <p className='promo-text'>Save up to $12 and get free delivery</p>
                  <button>shop now</button>
              </div>
              <img src={cartonWhite} alt="shirt" />
        </div>
        <div className="promo-section">
                <div className="promo-msg">
                  <p className="promo-text">Casual Collection</p>
                  <p className='promo-title'>New Arrivals<FaPaperPlane  style ={{ marginLeft:"1rem"}}/></p>
                  <button>Shop Now</button>
                </div>
        </div>
        <div className="promo-section">
              <div className='promo-msg'>
                  <p className='promo-text'>Casual Collection</p>
                  <p className='promo-title'>Free Shipping</p>
                  <button>shop now</button>
              </div>
              <img src={cartonWhite} alt="shirt" />
        </div>
    </div>
  )
}

export default Promo