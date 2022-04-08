import React from 'react'
import img from './photo23.jpeg'

export const Intro = () => {
  return (
      
    <div style ={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div>
        <span style={{display:'inline-flex'}}>
        
        <img src={img} style={{width:'150px',height:'150px', borderRadius:'70px' }}/>
        </span>
        <span style={{display:'inline-block',marginLeft:'10px '}}>
        <h3>Payal Mittal</h3>
      <p> mail : payalmittal651@gmail.com</p>  
      <p>address : Visakha Hall of Residence,<br/> VSSUT,Burla</p>
        </span>
    </div>
    </div>
  )
}
