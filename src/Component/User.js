import React, { Component } from 'react'

class User extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>hello class</h1>
      </div>
    )
  }
}

export default User