import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
    <p>Subscribe to our Newsletter at stay updated</p>
    <div>
    <input type='email' placeholder='Your email Id'/>
    <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter