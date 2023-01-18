import React, { useContext } from 'react'
// import { Appcontext } from './context'
import { useGlobalContext } from './context'
import Movie from './Movie'
import Search from './Search'


const Home = () => {
    // const name= useContext(Appcontext)
    // const name= useGlobalContext()
  return (<>

   {/* <p>{name}</p> */}
   <Search/>
   <Movie/>
  </>
  )
}

export default Home