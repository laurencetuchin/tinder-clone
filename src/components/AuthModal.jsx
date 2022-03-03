import { useState } from 'react';

const AuthModal = ({ setShowModal, isSignUp }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmedPassword, setConfirmedPassword] = useState(null);
    const [error, setError] = useState(null);

    console.log(email, password, confirmedPassword, error);


    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if ( isSignUp && ( password !== confirmedPassword)) {
                setError('Passwords do not match');
            }
            console.log('make a post request to our database');
        
    } catch (error) {
        console.log(error);
    }
    }




    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>X</div>
            <h2>{isSignUp ? 'Create account' : 'Log in'}</h2>
            <p>By clicking Log in, you agree to our terms. Learn how we process your data in our privacy policy.</p>
            <form onSubmit={handleSubmit} >
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="email" 
                required={true} 
                onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="password" 
                required={true} 
                onChange={(e) => setPassword(e.target.value)} 
                />
                {isSignUp && <input 
                type="password" 
                id="password-check" 
                name="password-check" 
                placeholder="confirm password" 
                required={true} 
                onChange={(e) => setConfirmedPassword(e.target.value)} 
                />}

                <input className='secondary-button' type="submit" />
                <p>{error}</p>

                <hr />
                <h2>GET THE APP</h2>

            </form>
        </div>
    );
};

export default AuthModal;