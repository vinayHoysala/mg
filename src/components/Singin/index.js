import Button from '../forms/Button';
import './styles.scss';
import signInWithGoogle,{auth} from './../../firebase/utlis';
import React, { Component } from 'react';
import FromInput from './../forms/FormInput';

const initialState = {
    email:'',
    password:''
}

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {...initialState};
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({...initialState});
        }catch(err){
            console.log(err);
        }
    }

    handleChange(e){
        const{name,value} = e.target;
        this.setState({
            [name]:value
            }   
        )
    }
    
    render(){
        const{email,password} = this.state;
        return(
            <div className="singin">
                <div className="wrap">
                    <h2>Singin</h2>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>

                            <FromInput 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <FromInput 
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />

                            <button className="btn" type="submit">Login</button>

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