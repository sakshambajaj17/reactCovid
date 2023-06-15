import React, { useEffect, useState } from 'react'
//usestate to use api data in function
import './covid.css'

const Covid = () => {
    const[data,setData]=useState([]);

    const getCovidData=async ()=>{
      try {
        const res= await fetch('https://data.covid19india.org/data.json')
        const actualData=await res.json();
      //  console.log(actualData.statewise[0]);

        setData(actualData.statewise[0]);

      } catch (err) {
        console.log(err);
      }
    }


    //update the data by calling whenever we refresh the page
    //[] used to call only one time when reloaded
    useEffect(()=>{
       getCovidData();
        
       
    },[]);
  return (
    <>
    <>
  <h1><center>COVID-19 Data - India</center></h1>
  <section className="data-section">
    <div className="data-card">
      <h2>Active</h2>
      <p id="total-cases">{data.active}</p>
    </div>
    <div className="data-card">
      <h2>Confirmed</h2>
      <p id="total-deaths">{data.confirmed}</p>
    </div>
    <div className="data-card">
      <h2>Deaths</h2>
      <p id="total-recovered">{data.deaths}</p>
    </div>
  </section>
  <footer>
    
  </footer>
</>

    </>
  ) 
}

export default Covid