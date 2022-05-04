import { useQuery, useMutation } from 'react-query'
import cn from 'classnames'
import { useParams } from 'react-router'
import { Layout, Alert } from '../../'

import { _api } from '../../../api/axios'
import completedImg from '../../../images/exercises/check-completed.svg'
import notCompletedImg from '../../../images/exercises/check.svg'
import bg from '../../../images/profile-bg.jpg'

import styles from './exercises.module.scss'

const SingleExercise = () => {
  const { id } = useParams()

  const { data, isSuccess, refetch } = useQuery(
    'get exercise log',
    () =>
      _api({
        url: `/exercises/log/${id}`,
      }),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { mutate: changeState, error: errorChange } = useMutation(
    'Change log state',
    ({ timeIndex, key, value }) =>
      _api({
        url: '/exercises/log',
        type: 'PUT',
        body: { timeIndex, key, value, logId: id },
        auth: false,
      }),
    {
      onSuccess(data) {
        refetch()
      },
    }
  )

  return (
    <>
      <Layout
        background={bg}
        exerciseImage={
          isSuccess && `/uploads/exercises/${data?.exercise?.imageName}.svg`
        }
        height={'30vh'}
        title={isSuccess && data?.exercise?.name}
      >
        <div className={styles.wrapper}>
          {errorChange && <Alert type="error">{errorChange}</Alert>}
          <table>
            <thead>
              <tr>
                <th>Previous</th>
                <th>Weight&Repeat</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {isSuccess &&
                data.times?.map((item, idx) => (
                  <tr
                    key={item._id}
                    className={cn({
                      [styles.completed]: item.completed,
                    })}
                  >
                    <td>
                      <input type="number" value={item.prevWeight} disabled />
                      kg
                    </td>
                    <td>
                      <input
                        name="weight"
                        type="number"
                        value={item.weight}
                        onChange={(e) =>
                          changeState({
                            timeIndex: idx,
                            key: 'weight',
                            value: e.target.value,
                          })
                        }
                      />
                      kg/
                      <input
                        type="number"
                        name="repeat"
                        value={item.repeat}
                        onChange={(e) =>
                          changeState({
                            timeIndex: idx,
                            key: 'repeat',
                            value: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      {
                        <img
                          onClick={() =>
                            changeState({
                              timeIndex: idx,
                              key: 'completed',
                              value: !item.completed,
                            })
                          }
                          className={styles.checked}
                          src={item.completed ? completedImg : notCompletedImg}
                          alt="Exercise Status"
                        />
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  )
}

export default SingleExercise
