import React from 'react'

export default function SpinnerLoading() {
  return (
    
            <div className='d-flex justify-content-center align-items-center' 
            style={{ height: 600}}>
              
                <b><i className='text-warning'>Loading</i></b>
            <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div></div>
        
    
  )
}
