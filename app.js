import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  }
  render() {
    return (
      <div>
        <h1>My name:  {this.props.name}</h1>
        <Comp nameComp=''/>
      </div>
    )
  }
}

const Comp = (props) => (
  <div>
    <h3>Title {props.nameComp}</h3>
  </div>
)


render(<App name="Ryuichi" />, document.getElementById('app'))
