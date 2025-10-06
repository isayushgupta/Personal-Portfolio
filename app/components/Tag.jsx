import React from 'react'

const Tag = ({tech}) => {
  return (
    <div className='bg-black/90  text-white w-fit text-xs px-[5px] rounded-full'>
        {tech}
    </div>
    
  )
}

export default Tag