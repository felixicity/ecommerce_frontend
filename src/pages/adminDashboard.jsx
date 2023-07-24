import React, {useState,useRef} from 'react'
import Darkwhite from '../assets/dark-white.jpg'
import DashboardHome from '../components/dashboardHome'
import {FaHome,FaUser,FaShoppingCart,FaHandHoldingUsd,FaCogs,FaChartBar,FaChartPie, FaTshirt, FaBlog, FaSignOutAlt,FaLightbulb,} from "react-icons/fa"


const AdminDashboard = () => {
    const dashboardRef = useRef(null)
    const [light,setLight] = useState(false)


    const toggleBackground = () => {
        setLight(prevLight => !prevLight)
        light &&  dashboardRef.current.classList.add("dark")
        !light &&   dashboardRef.current.classList.remove("dark")
    }

  return (
    <>
            <div className="dashboard"  ref={dashboardRef}>
                <div className="dashboard-menu">
                    <p className='logo'>Babreux</p>
                    <div className="dashboard-options">
                        <div className='options-item active'><span className='option-icon'><FaHome/></span> <span>Home</span></div>
                        <div className='options-item'><span className='option-icon'><FaTshirt/></span><span>Products</span></div>
                        <div className='options-item'><span className='option-icon'><FaShoppingCart/></span><span>Orders</span></div>
                        <div className='options-item'><span className='option-icon'><FaUser/></span><span>Users</span></div>
                        <div className='options-item'><span className='option-icon'><FaHandHoldingUsd/></span><span>Sales</span></div>
                        <div className='options-item'><span className='option-icon'><FaBlog/></span><span>Contents</span></div>
                        <div className='options-item'><span className='option-icon'><FaChartBar/></span><span>Promotions and Discounts</span></div>
                        <div className='options-item'><span className='option-icon'><FaChartPie/></span><span>Reports and Analytics</span></div>
                        <div className='options-item'><span className='option-icon'><FaCogs/></span><span>Settings</span></div>
                    </div>
                    <div className="latest-orders">
                        <p>Lastest orders</p>
                        <ul className='orders'>
                            <li>Nike ...view order</li>
                            <li>Outwear...view order</li>
                            <p>See all</p>
                        </ul>
                    </div>

                    <div className='options-item active logout'><span className='option-icon'><FaSignOutAlt/></span> <span>Log out</span></div>
                </div>

                <div className="dashboard-views">
                    <div className="dashboard-header">
                        <p className='title'>Summary</p>
                        {/* <div className="toggle-light-dark">
                             <p className='toggle-instruction'>click to light</p>
                             <div className="light">
                                    <span onClick={toggleBackground}>
                                        {light ? <FaLightbulb color="yellow" /> : <FaLightbulb color="white" />}
                                    </span>
                             </div>
                        </div> */}
                        <div className='admin-identity'>
                            <img src={Darkwhite} alt='image'/>
                            <span>Felix</span>
                        </div>
                    </div>
                    <DashboardHome/>
                </div>
            </div>
    </>
  )
}

export default AdminDashboard