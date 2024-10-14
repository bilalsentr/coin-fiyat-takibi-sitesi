'use client'
import React, { useState,useEffect,flatlist,styleSheet } from 'react'
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'

function page() {
  const[veri,setVeri]=useState([])
  useEffect(()=>{
    axios.get("https://api.coinlore.net/api/tickers/").then(response=>{
      setVeri(response.data.data)
    })
    .catch(error => {
    console.error("hata oluştu");
    })
  },[])
  return (
    <div className='grid grid-cols-3 bg-white mb-3 p-1 rounded'>
    <div className='col-span-3 text-xs'>
    <div style={{
      maxWidth:1000, padding:120, background: 'linear-gradient(to right, #17212f 0%, #17212f 100%)',flexDirection:'row',flex:'1'
    }}>
      <h1 style={{color:'bisque'}}>SAĞLAMOĞLU YAMUK COİN</h1>
      <h1 style={{ color: 'white'}}>Kripto Para Bilgileri</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {veri.map(item => (
            <div key={item.id} style={{ background: '#fff', padding: '10px', borderRadius: '5px' }}>
              <p>{item.name} - {item.price_usd} USD</p>
            </div>
          ))}
    </div>
        </div>
        </div>
        </div>
        
  )
}

export default page