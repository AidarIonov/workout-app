import { Fragment } from 'react'
import { useQuery, useMutation } from 'react-query'
import { useParams } from 'react-router'
import { useNavigate, Link } from 'react-router-dom'
import { Alert, Layout } from '../..'
import { _api } from '../../../api/axios'
import { useAuth } from '../../../hooks/useAuth'

import bg from '../../../images/workout-bg.jpg'

import styles from './singleWorkout.module.scss'
const SingleWorkout = () => {
  const { isAuth } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()

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

  const { mutate } = useMutation(
    'create exercises log',
    ({ exId, times }) =>
      _api({
        url: '/exercises/log',
        type: 'POST',
        body: {
          exerciseId: exId,
          times: times,
        }
      }),
    {
      onSuccess(data) {
        navigate(`/exercise/${data._id}`)
      },
    }
  )

  return (
    <>
      <Layout background={bg} height={'30vh'} title={data?.name}>
        <div className={styles.wrapper}>
          <ul>
            {data?.exercises.length > 0 ? (
              data?.exercises.map((item, i) => (
                <Fragment key={item._id}>
                  <li
                      onClick={() =>
                        mutate({
                          exId: item._id,
                          times: item.times,
                          })}>
                    {item.name}
                    <img
                      draggable={false}
                      width={30}
                      src={`/uploads/exercises/${item.imageName}.svg`}
                      alt={item.imageName}
                    />
                  </li>
                  {i % 2 !== 0 && <div className={styles.divider}></div>}
                </Fragment>
              ))
            ) : (
              <>
              <Alert type="warning">Exercise not found</Alert>
              <Link className={styles.link} to='/new-exercise' >Add new exercise</Link>
              </>
            )}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default SingleWorkout
