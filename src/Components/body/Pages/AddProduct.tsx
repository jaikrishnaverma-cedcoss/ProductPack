import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'

const AddProduct = ({inputs,state,objKey,setState}:any) => {
const [formData, updateFormData] =useState({});
const [select,setSelect]=useState(true)
  const handleChange = (e:any) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const formHandler=(e:any):void=>{
  e.preventDefault();
  console.log(objKey)
  state[objKey].push(formData)
   setState({...state})
   e.target.reset()
   
}
console.log(formData)
  return (
    <>
      <form onSubmit={formHandler} style={{ width: '100%' }} className='d-flex flex-wrap justify-content-center  p-4 '>
        <div className='d-flex flex-wrap justify-content-between' style={{ maxWidth: '700px' }}>
          {
            inputs.map((x:any, i:number) => <div className="m-1 col-5" style={{ minWidth: '320px' }}>
              <label htmlFor="exampleInputEmail1" className="form-label">{x.name}</label>
              {(x.type === 'textarea') ?
              <textarea required name={x.name} onChange={handleChange} className="form-control" id={x.name + i} placeholder={`Enter ${x.name}...`} aria-describedby={`about ${x.name} `}></textarea>
                :(x.type==='select')?
                <select name={x.name} className="form-select" onChange={handleChange}  aria-label="Default select example">
                  {
                    (x.data.length>0)?
                    [{Name:'Select'},...x.data].map((x:any)=><option value={x.Name}>{x.Name}</option>)
                    :<option value=''>No product Available</option>
                  }
               </select>:(x.type === 'radio') ?
               <div className="form-check form-switch">
               <input name={x.name}  key={formData.toString()}   onChange={(e)=>{setSelect(!select);handleChange(e);}} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
               <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
             </div>:
                <input required name={x.name} onChange={handleChange} type={x.type} className="form-control" id={x.name + i} aria-describedby={`about ${x.name} `} placeholder={`Enter ${x.name}`} />
                 }
                   {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>)
          }
          
        </div>
        <div className="col-12" style={{ maxWidth: '700px' }}>
            <button type="submit" className="btn btn-primary my-3  ">Submit</button>
          </div>

      </form>
    </>
  )
}

export default AddProduct