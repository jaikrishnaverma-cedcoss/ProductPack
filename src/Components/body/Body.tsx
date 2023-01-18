import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SideBar } from '../Sidebar/SideBar'
import AddProduct from './Pages/AddProduct'
import ListProducts from './Pages/ListProducts'

const Body = () => {
  const location = useLocation();
  const [state,setState]=useState({
   products:[],
   placeOrder:[],
   settings:[]
  })

      // if local storage exist then no need to fetch api
      useEffect(() => {
        if (localStorage.getItem("Prd")!=null){
          let x:any=localStorage.getItem("Prd")
        setState({...JSON.parse(x)})
      }
    }, [])

    //   update localstorage when redux state change
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("Prd", JSON.stringify(state));
        }, 300)
    }, [state])
  const forms=[
    [
      { name: 'Name', type: 'text' },
      { name: 'Description', type: 'textarea' },
      { name: 'Price', type: 'number' },
      { name: 'Tags', type: 'text' },
      { name: 'Stocks', type: 'text' },
    ],
    [
      { name: 'Customer Name', type: 'text' },
      { name: 'Customer Address', type: 'textarea' },
      { name: 'Zip', type: 'number' },
      { name: 'Product', type: 'select', data:state.products },
      { name: 'Quantity', type: 'number' },
    ],
    [
      { name: 'Title', type: 'radio' },
      { name: 'Default Price', type: 'number' },
      { name: 'Default Stocks', type: 'number' },
      { name: 'Default Tags', type: 'text' },
    ]
  ]
  console.log(state)
  return (
    <>
    <div className='d-flex '>
       <SideBar />
       <div className="mainBody py-3 px-4 " style={{backgroundColor:'aliceblue',width:'100%'}}>
        <p className="fs-4 m-0 n-blue">{(location.pathname=='/')?'Add Product':location.pathname.replace('_',' ').slice(1)}</p>
        <p className="fs-6" style={{color: '#51678f'}}>Home {(location.pathname=='/')?'/ Add Product':location.pathname.replace('_',' ').replace("/", " / ")}</p>
       <Routes>
       <Route path='/' element={<AddProduct   inputs = {forms[0]} state={state} objKey='products'  setState={setState}/>} />
       <Route path='/List_Products' element={<ListProducts   table = {state.products} state={state} setState={setState}/>} />
       <Route path='/Place_Order' element={<AddProduct   inputs = {forms[1]} state={state} objKey='placeOrder' setState={setState}/>} />
       <Route path='/List_Order' element={<ListProducts   table = {state.placeOrder} state={state} setState={setState}/>} />
       <Route path='/Add_Setting' element={<AddProduct   inputs = {forms[2]} state={state} objKey='settings' setState={setState}/>} />
       <Route path='/List_Setting' element={<ListProducts   table = {state.settings} state={state} setState={setState}/>} />
      </Routes>
       </div>
       </div>
    </>

  )
}

export default Body