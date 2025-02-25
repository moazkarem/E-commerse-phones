import React from 'react'
import Filter from './Filter/Filter'
import SingleCard from './SingleCard/SingleCard'

const SingleBrand = () => {
  return (
    <div className='grid grid-cols-12 gap-3 pt-24'>
         <div className='col-span-3    max-md:hidden'>
            <Filter />
         </div>
         <div className='col-span-9  max-md:col-span-12'>
            <SingleCard />
         </div>
    </div>
  )
}

export default SingleBrand