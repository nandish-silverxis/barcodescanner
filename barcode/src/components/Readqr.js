import React, { useState,useRef } from 'react'
import QrScanner from 'qr-scanner'
import { Link } from 'react-router-dom'
 
function Readqr() {
    const [file,setFile]=useState(null)
    const [data,setData] = useState(null)
    const fileRef =useRef()

    // const handleClick  = () =>
    // {
    //     fileRef.current.click();
    //     console.log(file)
    // }
    const handleChange = async (e) =>
    {
     const file=e.target.files[0]
      setFile(file)
     const result= await QrScanner.scanImage(file)
     setData(result)
    }
  return (
    <div className='col-md-4 mx-auto'>
      <h2 className='text-center mb-4'> Read QR Code</h2>
      <div className='card border-0'>
        <div className='card-body d-flex flex-column align-items-center justify-content-center'>
            <Link><button type='button'  className='btn btn-success'>
                Scen QR Code
            </button></Link>
            <input 
            type='file'
            ref={fileRef}
            onChange={handleChange}
            accept='.png, .jpg, .jpeg'
            className='d-none'
            
            />
            <div className='mt-4'>
    {
      file && (
        <img src={URL.createObjectURL(file)} alt='QR Code' className='d-flex align-items-center justify-content-center' />
        
      )
    }
    {
       data && (
        <p className='small mt-3 fw-bold'>data:{data}</p>
      )
    }

            </div>
        </div>
      </div>
    </div>
  )
}
// onClick={handleClick}
export default Readqr
