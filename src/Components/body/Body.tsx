import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { MyState } from '../MyTypescript'
import { SideBar } from '../Sidebar/SideBar'
import AddProduct from './Pages/AddProduct'
import Dashboard from './Pages/Dashboard'
import ListProducts from './Pages/ListProducts'

const initialState={
  products:[{Name: '6565 | 65656', Description: '656', Price: '565', Tags: '65656', Stocks: '565'}],
  placeOrder:[{Customer_Name: '4564654', Customer_Address: '64564565466', Zip: '546543', Product: '6565 | 65656', Quantity: '5465'}],
  settings:{Default_Price: '1000', Default_Stocks: '400', Default_zip_code: '1233', Default_Title: 'true'}
 }

const Body = () => {
  const location = useLocation();
 const [state,setState]=useState<MyState>(initialState)
  const forms=[
    [
      { name: 'Name', type: 'text',required:true },
      { name: 'Description', type: 'textarea' ,required:true},
      { name: 'Price', type: 'number' },
      { name: 'Tags', type: 'text' ,required:true},
      { name: 'Stocks', type: 'text' },
    ],
    [
      { name: 'Customer_Name', type: 'text',required:true },
      { name: 'Customer_Address', type: 'textarea' ,required:true},
      { name: 'Zip', type: 'number' ,required:false},
      { name: 'Product', type: 'select', data:state.products ,required:true},
      { name: 'Quantity', type: 'number' ,required:true},
    ],
    [
      { name: 'Default_Title', type: 'radio' ,span:'With Tags (on) & without Tags (off)' ,required:true},
      { name: 'Default_Price', type: 'number' ,required:true},
      { name: 'Default_Stocks', type: 'number' ,required:true},
      { name: 'Default_zip_code', type: 'number' ,required:true},
    ]
  ]
      // if local storage exist then no need to fetch api
      useEffect(() => {
        if (localStorage.getItem("Prd")!=null){
          let x:string|null=localStorage.getItem("Prd")
        if(x!=null)
        setState({...JSON.parse(x)})
      }
    }, [])

    //   update localstorage when redux state change
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("Prd", JSON.stringify(state));
        }, 3)
    }, [state])
  
  // console.log('state => ',state)

  return (
    <>
    <div className='d-flex '>
       <SideBar />
       <div className="mainBody py-3 px-4 " style={{backgroundColor:'aliceblue',width:'100%',height:'100vh',overflowY:'scroll'}}>
        <p className="fs-4 m-0 n-blue">{(location.pathname=='/')?'Dashboard':location.pathname.replace('_',' ').slice(1)}</p>
        <p className="fs-6" style={{color: '#51678f'}}>Home {(location.pathname=='/')?'/ Dashboard':location.pathname.replace('_',' ').replace("/", " / ")}</p>
       <Routes>
       <Route path='/' element={<Dashboard/>} />
       <Route path='/Add_Product' element={<AddProduct   inputs = {forms[0]} state={state} objKey='products'  setState={setState}/>} />
       <Route path='/List_Products' element={<ListProducts   table = {state.products} state={state} objKey='products' setState={setState}/>} />
       <Route path='/Place_Order' element={<AddProduct   inputs = {forms[1]} state={state} objKey='placeOrder' setState={setState}/>} />
       <Route path='/List_Order' element={<ListProducts   table = {state.placeOrder} state={state} objKey='placeOrder' setState={setState}/>} />
       <Route path='/Add_Setting' element={<AddProduct   inputs = {forms[2]} state={state} objKey='settings' setState={setState}/>} />
       <Route path='/List_Setting' element={<ListProducts   table = {state.settings} state={state} objKey='settings' setState={setState}/>} />
      </Routes>
      <Footer/>
       </div>
    
       </div>
   
    </>

  )
}

export default Body