// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [coinData, setCoinData] = useState([])

  const fetchData = ()=> {fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  .then((resp)=> resp.json())
  .then((data)=>{
    setCoinData(data)
  })
  }
  
  useEffect(fetchData,[])


  return (
    <div className="App">
        <h1>Gallery</h1>
        {coinData.map((item)=>{
          return (<>
          <div className='text-red-500'>{item.id}</div>
          <img src={item.image} alt=""/>
          <p>{item.current_price}</p>
          
        </>)
        })}
           
          
      
    </div>
  );
}

export default App;
