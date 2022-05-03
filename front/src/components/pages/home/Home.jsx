import {useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useQuery } from 'react-query'
import { _api } from '../../../api/axios'

import bg from '../../../images/home-bg.webp'
import Button from '../../ui/button/Button'
import Layout from '../../common/Layout'
import Counters from '../../common/counters/Counters'

import styles from './home.module.scss'
const Home = () => {
  const { isAuth } = useAuth()

  const {data, isSuccess} = useQuery('home page counters', 
  () =>
  _api({
      url: '/users/profile',
    }),
    {
      refetchOnWindowFocus: false,
      enabled: isAuth
    }
  );
  console.log(data);
  return (
    <Layout height={0}>
      <div style={{ backgroundImage: `url(${bg})` }} className={styles.wrapper}>
        <div className={styles.footer}>
          <Link to={isAuth ? '/new-workout' : '/auth'}>
            <Button>New</Button>
          </Link>
          <h1 className={styles.title}>EXERCISES FOR THE SHOULDERS</h1>
          {(isSuccess && isAuth) &&<Counters 
                                          minutes={data.minutes}
                                          workouts={data.workouts}
                                          kgs={data.kgs} />}
        </div>
      </div>
    </Layout>
  )
}

export default Home
