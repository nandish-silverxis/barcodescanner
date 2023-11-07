import React, { useState } from 'react'
import QRCode from "qrcode"

export default function Createqr() {
    const [qrvalue,setQrvalue]=useState("")
    const [qrimageurl,setQrimageurl]=useState("")
    
   
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        if(!qrvalue)
        {
            return alert("Please Enter Some Value")
        }
        const response = await QRCode.toDataURL(qrvalue)
        setQrimageurl(response);
    }


  return (
    <div className='col-md-4 mx-auto'>
      <h2 className='text-center'> Create QR Code</h2>
      <div className='card border-0'>
        <div className='card-body d-flex flex-column align-items-center'>
            <form onSubmit={handleSubmit} className='d-flex align-items-center justify-content-between'>
            <input type='text'
            placeholder='Enter text'
             className='form-control border-0' 
             style={{width:"90%"}}
             id="text"
             value={qrvalue}
             onChange={(e)=> setQrvalue(e.target.value)}/>
             <button type='submit' className='btn btn-primary'style={{marginLeft:"15px"}}>+</button>
            </form>
            {qrimageurl && (
                <div className='mt-4'>
                    <a href={qrimageurl} download="qr.png"  >
                    <img src={qrimageurl} alt="QR Code"/>
                    </a>
                    </div>
            )}
        </div>
      </div>
    </div>
  )
}
