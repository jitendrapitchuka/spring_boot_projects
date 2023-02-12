import React from 'react'

export default function LibraryServices() {
  return (
    <div className='container my-5'>
        <div className='row p-4 align-item-center border shadow-lg'>
        <div className='col-lg-7 p-3'>
            <h1 className='display-4 fw-bold'>
                Can't find what you are looking for?
            </h1>
            <p className='lead'>If you cannot find what you are looking for,send our library admin's a personel message</p>
            <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
            </div>

        </div>
        <div className='col-lg-4 offset-lg shadow-lg lost-image'></div>
        </div>

    </div>
  )
}