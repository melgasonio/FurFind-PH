import { Link } from 'react-router-dom';
import { useLoginForm } from '../hooks/user/login_form/useLoginForm';
import { useUserContext } from '../hooks/user/useUserContext';
import BodyContainer from '../components/BodyContainer';

const Login = () => {
    const { handleChange, handleLogin, form } = useLoginForm();

    return (
        <BodyContainer>
            <form onSubmit={handleLogin}>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={form.email}
                    onChange={handleChange}
                />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    value={form.password}
                    onChange={handleChange}
                />
                <button type='submit'>
                    Login
                </button>
                <p>Don't have an account? <Link to={'/signup'}>Sign up</Link> now.</p>
            </form>
        </BodyContainer>
    );
}

export default Login;
