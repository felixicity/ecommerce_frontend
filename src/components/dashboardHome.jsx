import React from 'react'
import { FaChartArea, FaChartBar, FaChartLine } from 'react-icons/fa'

const DashboardHome = () => {
  return (
    <div className='contain'>
        <div className="home-analytics">
            <div className="sales analytics">
                <div className="analytics-head">
                    <p className="analytics-title">Weekly Sales</p>
                    <span className="icon"><FaChartBar/></span>
                </div>
                <p className="analytics-estimate">$58,0000</p>
                <p className="analytics-info">increased by 10%</p>
            </div>
            <div className="order analytics">
            <div className="analytics-head">
                    <p className="analytics-title">Weekly Orders</p>
                    <span className="icon"><FaChartArea/></span>
                </div>
                <p className="analytics-estimate">$141,0000</p>
                <p className="analytics-info">decreased by 0.14%</p>
            </div>
            <div className="traffic analytics">
            <div className="analytics-head">
                    <p className="analytics-title">Monthly Visitors</p>
                    <span className="icon"><FaChartLine/></span>
                </div>
                <p className="analytics-estimate">3,0000</p>
                <p className="analytics-info">increased by 18%</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardHome