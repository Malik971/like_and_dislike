import React from 'react'

export default function Navbar({nombrelike}) {
  return (
    <div className='entete'>
        <h2>
            Il y a {nombrelike} Like
        </h2>
    </div>
  )
}
