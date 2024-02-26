import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Context from './Context'

class App extends Component {
  state = {
    name: 'Tushar',
  }

  addName = value => {
    this.setState({name: value})
  }

  render() {
    const {name} = this.state
    return (
      <Context.Provider
        value={{
          name,
          addName: this.addName,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    )
  }
}

export default App
