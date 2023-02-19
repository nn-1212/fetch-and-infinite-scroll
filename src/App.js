// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [coinData, setCoinData] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = ()=> {fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=${page}&sparkline=fals`)
  .then((resp)=> resp.json())
  .then((data)=>{
    setCoinData((prevState)=> [...prevState, ...data])
  })
  }
  
  useEffect(fetchData,[page]);


  const handleScroll = (e)=>{
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ){
      setPage((prevState)=> prevState + 1)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div className="App">
      <h1>Gallery</h1>
      <div className="flex flex-row flex-wrap items-center justify-center bg-black w-full h-full">
        {coinData.map((item)=>{ 
          return (<>
            <div className='w-40 h-40 bg-gray-100 m-5 rounded-lg flex items-center justify-center flex-col'>
              <img src={item.image} alt="" className='h-20 w-20' />
              <div className='text-red-500'>{item.id}</div>
              <p>${item.current_price}</p>
            </div>
        </>)}
        )}
    </div>
    <div className='py-2'>loading....</div>
  </div>
)}

export default App;
