import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(){
        console.log('hello constructor')   
        super()
        this.state ={
            data: 'ram'
        }  
    }
  render() {
    console.log('hello render')
    return (
      <div>
        <h1>hello {this.state.data}</h1>
      </div>
    )
  }
}


