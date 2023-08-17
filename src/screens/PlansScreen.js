import React from 'react'
// import db from '../firebase'
import './PlansScreen.css'

function PlansScreen() {
  const products = [
    {
      name: 'Premium',
      description: '4K + HD',
    },
    {
      name: 'Basic',
      description: '720p',
    },
    {
      name: 'Standard',
      description: '1080p',
    },
  ]

  return (
    <div className="plansScreen">
      {products.forEach((product) => (
        <>
          <div className="plansScreen__info">
            <h5>{product.name}</h5>
            <h6>{product.description}</h6>
          </div>
        </>
      ))}
      <button>Subscibe</button>
    </div>
  )
}

export default PlansScreen
