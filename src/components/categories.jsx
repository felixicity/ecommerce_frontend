import React from 'react'
import {HiOutlineTruck} from 'react-icons/hi'
import {FaTshirt,FaShoePrints,FaHandHoldingHeart, FaWallet} from 'react-icons/fa'
import { BiBugAlt, BiWallet, BiWalletAlt } from 'react-icons/bi'
import {GiTShirt,GiTrousers,GiDress, GiSocks, GiSchoolBag, GiLargeDress, GiAmpleDress, GiNecklaceDisplay, GiSleevelessJacket} from 'react-icons/gi'

const Services = () => {
  return (
      <section className='category-section wrapper'>
         <h3>Top Categories</h3>
          <div className="categories">
                    <div className="category"> <GiTrousers className="category-img"/>
                        <p className="category-title">Trousers</p>
                    </div>
                    <div className="category"><GiTShirt className="category-img"/>
                     <p className="category-title">Shirt </p>
                    </div>
                    <div className="category"><GiSchoolBag className="category-img"/>
                        <p className="category-title">School Bag</p>
                    </div>
                    <div className="category">
                        <GiNecklaceDisplay className="category-img"/>
                        <p className="category-title">Accessories</p>
                    </div>
                    <div className="category"> 
                        <GiSleevelessJacket className="category-img"/> 
                        <p className="category-title">jacket</p>
                    </div>
                    <div className="category">
                        <GiDress className="category-img"/>
                        <p className="category-title">Clothings</p>
                    </div>
                   
          </div>
      </section>
  )
}

export default Services