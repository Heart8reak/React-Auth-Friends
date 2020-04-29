import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Form, Spinner } from 'react-bootstrap'

class Login extends React.Component {
        state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }

    handleChange = e => {
        this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }})
        console.log(this.state.credentials)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({...this.state, isLoading: true})
        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            // this.setState({...this.state, isLoading: false})
            this.props.history.push('/friends')
        })
        .catch(err => {
            console.log('Unable to SIGN IN!: ',err)
            this.setState({...this.state, isLoading: false})
        })
    }

    componentDidMount() {
        localStorage.clear()
    }

    render() {
        return (
            <div> 
                {!this.isLoading ? (
                    <form onSubmit={this.handleSubmit}>
                        <Form.Control 
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.username}
                        />
                        <Form.Control 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.password}
                        />
                        <br />
                        <button>Log in</button>
                    </form>
                ) : (
                    <div>
                        <Spinner variant="primary" animation="grow" />
                        <Spinner variant="primary" animation="grow" />
                        <Spinner variant="primary" animation="grow" />
                    </div>
                )}
            </div>
        )
    }

}

export default Login