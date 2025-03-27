import React from 'react'
import '../index.css'
import Gridcomponet from './Gridcomponent'
import Button from './Button'
import TrackHistory from './Trackhistory'

const Layout = () => {
    return (
      <>
        <div className='flex justify-center gap-4 px-4'>
          <div className='flex-1'>
            <Button/>
          </div>
          <div className='flex-8'>
            <Gridcomponet/>
          </div> 
        </div>
        <TrackHistory/>
      </>
    )
  }
  
  export default Layout;
