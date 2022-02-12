import React from 'react'
import AllocationPanel from '../components/AllocationPanel'
import PerformancePanel from '../components/PerformancePanel'
import PositionsPanel from '../components/PositionsPanel'
import '../assets/Home.css'

function Home() {
  return (
    <div className="panels">
      <div className="panel-allocation">
        <AllocationPanel />
      </div>
      <div className="panel-balance">
        <PerformancePanel />
      </div>
      <div className="panel-positions">
        <PositionsPanel />
      </div>
    </div>
  )
}

export default Home