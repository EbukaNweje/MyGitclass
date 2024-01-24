import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const[signUpSuccess, setSignUpSuccess] = useState('')
    const[signUpError, setSignUpError] = useState(false)

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handleStateChange = (event) => {
        setState(event.target.value);
    };
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    useEffect(() => {
        if(signUpSuccess === false) {
            navigate('/Login')
        }
    }, [signUpSuccess])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.trim() === '' || password.trim() === '' ) {
            setError('All fields are required.');
            return;
        }

        const signUp = {
        fullName: fullName,
        email: email,
        password: password,
        address:address ,
        state:state , 
        country: country,
        dateOfBirth:dateOfBirth, 
        phoneNumber: phoneNumber
        }

        axios.post("http://localhost:3025/api/v1/createuser", signUp)
        .then((response)=> {
            if(response){
                setSignUpSuccess(true)
                setTimeout(()=>{
                    setSignUpSuccess(false)
                }, 3000);
             
            }
        })
        .catch((error)=>{
            if(error){
                setSignUpError(true)
                setTimeout(()=>{
                    setSignUpError(false)
                  }, 3000);
            }
        })

        setFullName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setState('');
        setCountry('');
        setDateOfBirth('');
        setPhoneNumber('');
        setSignUpSuccess()
        setSignUpError()
        setError(false);
    };


    return (
        <div className='body'>
            <main className='signBody'>
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                    <input type='text' placeholder="fullName" style={{color:"black"}}  onChange={handleNameChange}/> 
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Email'
                            required
                            style={{color:"black"}}
                        />

                         <input type='text' placeholder="Phone number" onChange={handlePhoneChange} style={{color:"black"}}/> 

                         <input type='state' placeholder="State" onChange={handleStateChange} style={{color:"black"}}/> 

                         <input type='date' placeholder="Date of Birth" onChange={handleDateOfBirthChange} style={{color:"black"}}/> 

                         <input type='text' placeholder="Address" onChange={handleAddressChange} style={{color:"black"}} />

                         <input type='country' placeholder="Country" onChange={handleCountryChange} style={{color:"black"}} />

                        <input
                            type='password'
                            id='password'
                            name='password' 
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Password'
                            required
                            style={{color:"black"}}
                            />
                        
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <button type='submit'>Sign Up</button>

                        
                        {
                            signUpSuccess && 
                            <p style={{color:"green"}}>SUCCESSFULLY SIGNED-UP!</p>
                        }
                        
                        {
                            signUpError &&
                            <p style={{color:"RED"}}>ERROR SIGNING-UP!</p>
                        }
                    </div>
                </form>
                
            </main>
        </div>
    );
};

export default Signup;
