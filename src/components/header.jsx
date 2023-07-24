import React, {useState,useEffect,useRef}from 'react'
import { useSelector} from 'react-redux'
import Navigation from './navigation'
import Login from './login'
import {HiOutlineShoppingBag,HiSearch,HiMenuAlt2} from 'react-icons/hi'
import Search from '../pages/search'
import Cart from '../components/cart'


const Header = () => {
    const {amount} = useSelector(state => state.cart)

    const[showMenu,setShowMenu] = useState(false)
    const[showOptions,setShowOptions] = useState(false)
    const[showCart,setShowCart] = useState(false)
    const HeaderRef = useRef(null)
   
    

    const toggleUserOptions = () => {
        setShowOptions(prevOptions => !prevOptions)
    }

    const toggleCart = () => {
      setShowCart(prevOptions => !prevOptions)
    }

    const toggleMenu = () => {
      setShowMenu(prevOptions => !prevOptions)
    }

    


    useEffect(() => {
         const scrollWatcher = document.createElement('div')

         scrollWatcher.setAttribute('data-scroll-watcher', '');
         HeaderRef.current.before(scrollWatcher)

         const navObserver = new IntersectionObserver((entries)=>{
            HeaderRef.current.classList.toggle('sticking', !entries[0].isIntersecting)
         },{rootMargin: "180px 0px 0px 0px"});

         navObserver.observe(scrollWatcher)
    },[])

  return (

    <header ref={HeaderRef} className='primary-header'>
        <div className="wrapper">
        <div className="container">
        <p className='logo'>Babreux</p>
        <Navigation showMenu = {showMenu}/>
        {showCart && <Cart toggleCart={toggleCart}/> } 
        <div className='header-items'>
               <div className="bag-icon">
                  <HiOutlineShoppingBag  className='icon' style={{fontSize:"1.8rem"}} onClick={toggleCart}/>
                  <span className='item-amount'>{amount}</span>
               </div>
                <a>
                      <HiSearch className='icon' style={{fontSize:"1.5rem"}}/>
                </a>
                <div className='user-options'>
                      <Login showOptions ={showOptions} toggleUserOptions={toggleUserOptions}/>
                      { showOptions && <ul className='options-list'>
                        <li className="options">Orders</li>
                        <li className="options">LogOut</li>
                      </ul>
                      }
                </div>
                <HiMenuAlt2 style={{fontSize:"1.8rem"}} className='menu icon' onClick ={ toggleMenu }/>
        </div>
        </div>
      </div>
     </header>
  )
}

export default Header