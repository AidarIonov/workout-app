import { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { _api } from '../../../api/axios'
import ReactSelect from 'react-select'
import Layout from '../../common/Layout'
import { Field, Button, Alert, Loader } from '../..'

import bg from '../../../images/new-workout.jpg'

import styles from './newWorkout.module.scss'
import { Link } from 'react-router-dom'
const NewWorkout = () => {
  const [name, setName] = useState('')
  const [exercisesIds, setExercisesIds] = useState([])

  const { data, isSuccess: dataFetched } = useQuery(
    'list exercises',
    () =>
      _api({
        url: '/exercises',
      }),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { mutate, isLoading, error, isSuccess } = useMutation(
    'Create new workout',
    (exIds) =>
      _api({
        url: '/workouts',
        type: 'POST',
        body: {
          name,
          exerciseIds: exIds,
        },
      }),
    {
      onSuccess(data) {
        console.log(data)
        setName('')
        setExercisesIds([])
      },
    }
  )

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const exIds = exercisesIds.map((ex) => ex.value)
    mutate(exIds)
  }

  return (
    <Layout background={bg} title={'Create new workout'}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <Alert type="error">{error}</Alert>}
        {isSuccess && <Alert type="success">Workout has been created</Alert>}
        {isLoading && <Loader />}
        <Field
          type="text"
          name={'name'}
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <Link to="/new-exercise" className={styles.exercise_link}>
          Add new exercises
        </Link>
        {dataFetched && data && (
          <ReactSelect
            classNamePrefix="select2-selection"
            placeholder="Exercises..."
            title="Exercises"
            options={data.map((ex) => ({
              value: ex._id,
              label: ex.name,
            }))}
            value={exercisesIds}
            onChange={setExercisesIds}
            isMulti={true}
          />
        )}
        <Button className={styles.btn}>Create</Button>
      </form>
    </Layout>
  )
}

export default NewWorkout
