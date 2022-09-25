import React, { useState,useEffect } from 'react'
import Fooddata from './FoodData';
import { Form } from 'react-bootstrap';
import Cards from './Cards';
import Set from './Set';
const Search = () => {

  const[fdata,setFdata]=useState(Fooddata)
  
  const [copydata, setCopyData] = useState([]);
  const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
  
  const changedata=(e)=>{
       let getchangedata=e.toLowerCase();
      // console.log(getchangedata);
      if(getchangedata==''){
        setCopyData(fdata)
      }
      else {
        let storedata = copydata.filter((ele, k) => {
            return ele.rname.toLowerCase().match(getchangedata);
        });

        setCopyData(storedata)
    }
  }

  useEffect(() => {
    
    setTimeout(() => {
      setCopyData(Fooddata)
    }, 1000);
    
  }, [])
  
  return (
    <>
    <div className='container d-flex justify-content-between aling-item-center' >
      <img src={zomatologo} style={{width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="Image is here" />
      <h2 style={{color:'#1b1464',cursor:'pointer'} } className='mt-2'>Search Filter App</h2>
    </div>
    
    <Form className='d-flex justify-content-center align-items-center mt-3'>
      <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Search Resturant" onChange={(e)=>changedata(e.target.value)}  />
       
      </Form.Group>

      <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
      </Form>


      <section className='iteam_section mt-4 container'>
        <h2>Resturants In Ahemadabad open now</h2>

        <div className='row mt-2 d-flex justify-content-center align-items-center'>
          {copydata&&copydata.length? <Cards data={copydata}/> : <Set sdata={fdata}/>}
        </div>
      </section>
    </>
  )
}

export default Search