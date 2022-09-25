import React from 'react'
import Card from 'react-bootstrap/Card'
import "./style.css"
const Cards = ({data}) => {

  return (
    <>
    {
        data.map((element,k)=>{
           return (
            <>
                <Card style={{ width: '18rem', border:'none' }} className='hove mb-4'>
      <Card.Img variant="top" src={element.imgdata} className='cd' />
      <div className='card_body'>
        <div className='upper_data d-flex justify-content-between align-items-center'>
            <h4 className='mt-2'>{element.rname}</h4>
            <span>{element.rating}</span>
        </div>
        <div className='lower_data d-flex justify-content-between align-items-center'>
            <h5 className='mt-2'>{element.address}</h5>
            <span>{element.price}</span>
        </div>
        <div className="extra"></div>
        <div className="last_data d-flex justify-content-center align-items-center">
            <img src={element.arrimg} className='laimg' alt="" />
            <p>{element.somedata}</p>
            <img src={element.delimg} className='laimg' alt="" />
        </div>
      </div>
      
    </Card >
            </>
           )
        })
    }

    </>
  )
}

export default Cards