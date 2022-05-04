import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Alert, Layout } from '../..'
import { _api } from '../../../api/axios'

import bg from '../../../images/workout-bg.jpg'

import styles from './singleWorkout.module.scss'

const WorkoutsList = () => {

  const { data, isSuccess } = useQuery(
    'get workouts',
    () =>
      _api({
        url: `/workouts`,
      }),
    {
      refetchOnWindowFocus: false
    }
  )
  console.log(data)

  return (
    <>
      <Layout
        background={bg}
        height={'30vh'}
        title={'Workouts'}
      >
        <div className={styles.wrapper}>
          <ul>
            {isSuccess ? (
              data?.map((item, i) => (
                  <li key={item._id}>
                    <Link to={`/workouts/${item._id}`}>
                      {item.name}
                    </Link>
                  </li>
              ))
            ) : (
              <Alert type="warning">Workouts not found</Alert>
            )}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default WorkoutsList
