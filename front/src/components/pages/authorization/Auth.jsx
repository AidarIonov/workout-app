import { useState } from 'react'
import { useMutation } from 'react-query'
import Layout from '../../common/Layout'

import bg from '../../../images/new-exercise.jpg'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'
import Loader from '../../ui/loader/Loader'
import Alert from '../../ui/alert/Alert'

import styles from './auth.module.scss'
import { _api } from '../../../api/axios'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [field, setField] = useState({
    email: '',
    password: '',
  })
  const [type, setType] = useState('auth')
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const successLogin = token => {
    localStorage.setItem('token', token)
    setIsAuth(true);
    setField({ email: '', password: '' });
    navigate('/')
  }


  const {
    mutate: register,
    isLoading,
    error,
    isSuccess,
  } = useMutation(
    'Registration',
    () =>
      _api({
        url: '/users',
        type: 'POST',
        body: {
          email: field.email,
          password: field.password,
        },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token)
      },
    }
  )
  const {
    mutate: auth,
    isLoading: isLoadingAuth,
    error: errorAuth,
    isSuccess: isSuccessAuth,
  } = useMutation(
    'Auth',
    () =>
      _api({
        url: '/users/login',
        type: 'POST',
        body: {
          email: field.email,
          password: field.password,
        },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token)
      },
    }
  )

  const handleChange = (e) => {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleAuth = (e) => {
    e.preventDefault()
    if (type === 'auth') {
      auth();
    } else {
      register()
    }
  }

  return (
    <Layout background={bg} title={'Sign in | Sign up'}>
      <form onSubmit={handleAuth} className={styles.form}>
        {error && <Alert type="error">{error}</Alert>}
        {errorAuth && <Alert type="error">{error}</Alert>}
        {(isSuccess || isSuccessAuth) && (
          <Alert type="success">Success</Alert>
        )}
        {(isLoading || isLoadingAuth) && <Loader />}
        <Field
          type="email"
          name={'email'}
          placeholder="Email"
          value={field.email}
          onChange={handleChange}
          required
        />
        <Field
          type="password"
          name={'password'}
          placeholder="Password"
          value={field.password}
          onChange={handleChange}
          required
        />
        <div className={styles.btns}>
          <Button onClick={() => setType('auth')} className={styles.btn}>
            Sign in
          </Button>
          <Button onClick={() => setType('register')} className={styles.btn}>
            Sing up
          </Button>
        </div>
      </form>
    </Layout>
  )
}

export default Auth
