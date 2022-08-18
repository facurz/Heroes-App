import React from 'react'

export const Pagination = ({page, increment, decrement, lastPage}) => {
    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }
    

  return (
    <>
        <div className="container d-flex m-4 justify-content-center">
            <button className='col-3 btn btn-outline-dark' onClick={prevPage}>&lt;</button>
           
             <div className="page m-2">Page <span className='page_color'>{page} of {lastPage}</span></div>
             <button className='col-3 btn btn-outline-dark' onClick={nextPage}>&gt;</button>
        </div>
    </>
  )
}
