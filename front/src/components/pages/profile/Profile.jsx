import { useQuery } from 'react-query'

import { _api } from '../../../api/axios'
import { useAuth } from '../../../hooks/useAuth'
import bg from '../../../images/profile-bg.jpg'
import after from '../../../images/after.jpg'
import styles from './profile.module.scss'
import Header from '../../common/header/Header'

import userLogo from '../../../images/header/user.svg'
import layoutStyles from '../../common/layout.module.scss'
import Counters from '../../common/counters/Counters'

const Profile = () => {
  const {isAuth} = useAuth()
  const { data, isSuccess } = useQuery(
    'profile info',
    () =>
      _api({
        url: '/users/profile',
      }),
    {
      refetchOnWindowFocus: false,
      enabled: isAuth
    }
  )
  console.log(data);

  return (
    <>
      <div className={layoutStyles.wrapper}>
        <Header />
        <div
          className={layoutStyles.page_header}
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className={styles.user}>
            <div className={styles.image}>
              <img src={userLogo} alt="User" draggable={false}/>
            </div>
            <h3>{data?.email}</h3>
          </div>
          {isSuccess && (
            <Counters
              className={styles.counters}
              minutes={data.minutes}
              workouts={data.workouts}
              kgs={data.kgs}
            />
          )}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.before_after}>
            <div>
              <h3>Before</h3>
              <img src={after} alt="Before" draggable={false}/>
            </div>
            <div>
              <h3>After</h3>
              <img src={after} alt="After" draggable={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
