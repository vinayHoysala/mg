import Button from '../forms/Button';
import './styles.scss';
import signInWithGoogle from './../../firebase/utlis';
import React, { Component } from 'react';

class SignIn extends Component {

    handleSubmit = async e =>{
        e.preventDefault();
    }
    
    render(){
        return(
            <div className="singin">
                <div className="wrap">
                    <h2>Singin</h2>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSingin">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        Login with Google
                                    </Button>
                                </div>
                                <div className="row">
                                    <Button >
                                        Login with Facebook
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SignIn;