import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import GitLogo from '../assets/github-logo.svg';
import Logo from '../assets/logo.svg'
import './styles/auth.css';

class Auth extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const reqBody = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post('/api/auth/login', reqBody).then(response=>{
            console.log(response)
        }).catch(err=>console.log(err));
    }


    render(){
        return(
            <section className='auth-view-display-wrapper'>
                <section className='auth-view-display-jumbotron'>
                <div className='auth-view-logo-display'>
                    <img src={Logo} />
                    <h4>Welcome To</h4>
                    <h2>Good Eats</h2>
                </div>
                <div className='auth-view-thin-line'>
                    
                </div>
                <div className='auth-view-form-wrapper'>
                    <div className='auth-view-username-wrapper'>
                        Username: <input className="auth-view-input-field" type="text"></input>
                    </div>
                    <div className='auth-view-password-wrapper'>
                        Password: <input className="auth-view-input-field" type="text"></input>
                    </div>
                    <div className='auth-view-button-wrapper'>
                        <button className='auth-view-submit-btn' onClick={(e)=>this.handleSubmit(e)}>Login</button>
                        <button className='auth-view-submit-btn' onClick={(e)=>this.handleSubmit(e)}>Register</button>
                    </div>
                </div>
                </section>
                <a href='https://github.com/tcscheurer'><img className='auth-view-git-logo' src={GitLogo} /></a>
            </section>
        )
    }
}

export default Auth;