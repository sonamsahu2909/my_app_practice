import React, { useState } from 'react'

function Form() {
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const [confirmpassword,setconfirmpassword] = useState()
    function getData(e){
        // alert('hello')
        e.preventDefault()
        console.log(name,email,password,confirmpassword)
    }

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <form onSubmit={getData}>
                    <div className='mb-3'>
                        <label>name</label>
                        <input onChange={(e)=>setname(e.target.value)} type="text" placeholder='name' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label>email</label>
                        <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='email' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label>password</label>
                        <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='password' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label>Confirm password</label>
                        <input onChange={(e)=>setconfirmpassword(e.target.value)} type="text" placeholder='confirm password' className='form-control'/>
                    </div>
                    <div>
                        <button className='text-center btn btn-primary' type='submit'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form