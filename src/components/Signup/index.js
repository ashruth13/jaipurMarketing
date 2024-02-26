import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Context from '../../Context'
import './index.css'

class Signup extends Component {
  state = {
    name: '',
    phone: '',
    mail: '',
    password: '',
    err: false,
  }

  name = event => {
    this.setState({name: event.target.value})
  }

  phone = event => {
    this.setState({phone: event.target.value})
  }

  mail = event => {
    this.setState({mail: event.target.value})
  }

  pass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {name, phone, mail, password, err} = this.state
    let e = ''
    if (name === '' || phone === '' || mail === '' || password === '') {
      e = '*Fill all the details'
    }

    return (
      <Context.Consumer>
        {value => {
          const {addName} = value
          const Submit = event => {
            event.preventDefault()
            if (name === '' || phone === '' || mail === '' || password === '') {
              this.setState({err: true})
            } else {
              addName(name)
              const {history} = this.props
              history.replace('/home')
            }
          }
          return (
            <div className="main">
              <h1 className="main-head">Create Account</h1>
              <img
                alt="signup"
                className="main-img"
                src="https://quattronium.com/wp-content/uploads/2023/07/Local-Businesses-websites-icon-6.png"
              />
              <br />
              <form className="form" onSubmit={Submit}>
                <input
                  onChange={this.name}
                  placeholder="Full Name"
                  className="input"
                />
                <input
                  onChange={this.phone}
                  placeholder="Phone"
                  className="input"
                />
                <input
                  onChange={this.mail}
                  placeholder="Email"
                  className="input"
                />
                <input
                  onChange={this.pass}
                  placeholder="Password"
                  className="input"
                />
                {err ? <p className="p">{e}</p> : <br />}
                <br />
                <button type="submit" className="btn">
                  Sign Up
                </button>
              </form>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Signup)
