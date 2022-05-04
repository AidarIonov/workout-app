import { Fragment } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Alert, Layout } from '../..'
import { _api } from '../../../api/axios'
import { useAuth } from '../../../hooks/useAuth'

import bg from '../../../images/workout-bg.jpg'

import styles from './singleWorkout.module.scss'
const SingleWorkout = () => {
  const { isAuth } = useAuth()
  const { id } = useParams()

  const { data, isSuccess } = useQuery(
    'single workout info',
    () =>
      _api({
        url: `/workouts/${id}`,
      }),
    {
      refetchOnWindowFocus: false,
      enabled: isAuth,
    }
  )
  console.log(data)

  return (
    <>
      <Layout
        background={bg}
        height={'30vh'}
        minutes={isSuccess && data?.minutes}
        title={isSuccess && data?.name}
      >
        <div className={styles.wrapper}>
          <ul>
            {isSuccess ? (
              data?.exercises.map((item, i) => (
                <Fragment key={item._id}>
                  <li>
                    <Link to={`/exercises/${item._id}`}>
                      {item.name}
                      <img
                        draggable={false}
                        width={30}
                        src={`/uploads/exercises/${item.imageName}.svg`}
                        alt={item.imageName}
                      />
                    </Link>
                  </li>
                  {i % 2 !== 0 && <div className={styles.divider}></div>}
                </Fragment>
              ))
            ) : (
              <Alert type="warning">Exercise not found</Alert>
            )}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default SingleWorkout
