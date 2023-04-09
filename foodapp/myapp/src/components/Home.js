import React from 'react'
import ice from '../icecream'
import Icecream from './Icecream'
const Home = () => {
  return (
    <div>
        
    {/*1. <h1>{ice.length}</h1> checking the length of ice cream after that create the icecream component */}
    {/* 2. create a map of icecream or any food item  */}
    <div className='row'>
        {ice.map(ices=>{
            return <div className='col-md-4'>
                {/* 3. in icecream component we will call objects from icecream.js   */}
                {/* ices= is a parameter ,{ices} is object which is importing from icecream component  */}
                <Icecream ices={ices}/>
                
            </div>
        })}
    </div>
    
    </div>
  )
}

export default Home