import React, { Component } from 'react';
import classnames from 'classnames';
import history from '../history'



export default class Login extends Component {
      constructor(props){
            super(props);
            this.state= {
                  username: '',
                  password: '',
                  errors: {},
                  isLoading: false,
            }
            this.onChange = this.onChange.bind(this)
            this.Submit = this.Submit.bind(this)
      }

onChange(e){
      this.setState({[e.target.name]: e.target.value})
}

Submit(e){
      console.log('this.props - Ze Submit HESLA')
      console.log(this.state)
      e.preventDefault();
      this.setState({ errors: {}, isLoading: true });

         this.props.userSignupRequest(this.state).then(
            () => {     console.log('Uspesne zalogovani');
                        history.push('/App'); },
            ({ data }) => this.setState({errors: data, isLoading: false})
            ); 

  }

  render(){
      const { errors } = this.state;

    return(
      <form onSubmit={this.Submit} >
      <h1>Login</h1>
      <div className={classnames("form-group", { 'has-error': errors.username })} >
      <label className="control-label">Username</label>
      <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
      />
      {errors.username && <span className="help-block" >{errors.username}</span>}
      </div>
      <div className={classnames("form-group", { 'has-error': errors.password })}>
      <label className="control-label">Password</label>
      <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
      />
      {errors.password && <span className="help-block" >{errors.password}</span>}
      </div>

      <div className={classnames("form-group", { 'has-error': errors.login })}>
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg" >
                  Sign up!
            </button>
      {errors.login && <span className="help-block" >{errors.login}</span>}
      </div>


      </form>
      )
  }
}
