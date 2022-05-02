import { useState } from 'react';
import Layout from '../../common/Layout';

import bg from '../../../images/new-exercise.jpg'
import Field from '../../ui/field/Field';
import Button from '../../ui/button/Button';

import styles from './auth.module.scss';
import Alert from '../../ui/alert/Alert';

const Auth = () => {
  const [field, setField] = useState({
    email: '',
    password: ''
  });
  const [type, setType] = useState('auth');

  const handleChange = e => {
    setField(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleAuth = e => {
    e.preventDefault()
    if(type === 'auth') {
      console.log('auth');
    }else {
      console.log('sign-in');
    }
    setField({email: '', password: ''})
  }

  return (
    <Layout 
            background={bg}
            title={'Sign in | Sign up'}>
      <form onSubmit={handleAuth} className={styles.form}>
              {true && <Alert>Success</Alert>}
        <Field 
              type='email'
              name={'email'}
              placeholder='Email' 
              value={field.email}
              onChange={handleChange}
              required/>
        <Field 
              type='password'
              name={'password'}
              placeholder='Password' 
              value={field.password}
              onChange={handleChange}
              required/>
          <div className={styles.btns}>
          <Button onClick={() => setType('sign-in')} className={styles.btn}>
            Sign in
          </Button>
          <Button onClick={() => setType('auth')} className={styles.btn}>
            Sing up
          </Button>
          </div>
      </form>
    </Layout>
  );
};

export default Auth;