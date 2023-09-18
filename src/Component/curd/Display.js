import React from 'react'
import { Link } from 'react-router-dom'

function Display() {
  return (
    <>
    <div className='container mt-4'>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>password</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope = 'row'>1</th>
                    <td>Sonam</td>
                    <td>Sonam@gmail.com</td>
                    <td>Sneha@123</td>
                    <td>
                        <Link>view</Link>
                        <Link>edit</Link>
                        <Link>delete</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Display