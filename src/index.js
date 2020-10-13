import React, { Component } from 'react'
import { rword } from 'rword'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = {
      word: props.word ?? null
    }
  }

  componentDidMount () {
    this.setState({
      word: rword.generate()
    })
  }

  render () {
    return <div>
      <h2>Welcome to ModuleTwo</h2>
      <span>here the current world : {this.state.word}</span>
    </div>
  }
}
