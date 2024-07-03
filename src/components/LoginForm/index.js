import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', FailText: '', isFail: false}

  loginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginFail = result =>
    this.setState({
      FailText: result.error_msg,
      isFail: true,
      username: '',
      password: '',
    })

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const p = {
      username,
      password,
    }
    const items = {
      method: 'POST',
      body: JSON.stringify(p),
    }
    const response = await fetch('https://apis.ccbp.in/login', items)
    const answer = await response.json()
    if (response.ok === true) {
      this.loginSuccess()
    } else {
      this.loginFail(answer)
    }
  }

  changeInPassword = event => this.setState({password: event.target.value})

  changeInUsername = event => this.setState({username: event.target.value})

  render() {
    const {username, password, FailText, isFail} = this.state

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website logo"
          className="login-icon"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-sm-icon"
          />
          <label htmlFor="user-name" className="label">
            USERNAME
          </label>
          <input
            className="input"
            value={username}
            id="user-name"
            type="text"
            onChange={this.changeInUsername}
            placeholder="Username"
          />
          <label htmlFor="pass-word" className="label">
            PASSWORD
          </label>
          <input
            className="input"
            value={password}
            id="pass-word"
            type="password"
            onChange={this.changeInPassword}
            placeholder="Password"
          />
          <button className="button login" type="submit">
            Login
          </button>
          {isFail && <p className="error-msg">{`**${FailText}`}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
