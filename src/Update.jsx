import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
    const users = useSelector((state) => state.users)
    const existingUser = users.filter(user => user.id == id);
    const {name, email} = existingUser[0];
    const [uname, setUname] = useState(name)
    const [uemail, setUemail] = useState(email)


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Edit User</h3>
        <form >
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control' placeholder='enter name'
                    value={uname} 
                    onChange={e => setUname(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control' placeholder='enter email' 
                    value={uemail}
                    onChange={e => setUemail(e.target.value)}
                />
            </div>
            <br/>
            <button className='btn btn-info'>Edit</button>
        </form>
    </div>
</div>
  )
}

export default Update