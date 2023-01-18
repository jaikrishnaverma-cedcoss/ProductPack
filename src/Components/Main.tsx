import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { BrowserRouter } from 'react-router-dom'
import Body from './body/Body'
import Nav from './Head/Nav'


const Main = () => {
  return (
    <>
      <div className="vh-100 ">
      <BrowserRouter>
        <ProSidebarProvider>
           <Nav />
            <Body/>
        </ProSidebarProvider>
        </BrowserRouter>
      </div>

    </>

  )
}

export default Main