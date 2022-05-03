import cn from 'classnames'
import { useState } from 'react';
import { useMutation } from 'react-query';
import { Layout, Field, Button, Alert, Loader } from '../..';
import { _api } from '../../../api/axios'

import bg from '../../../images/new-exercise.jpg'
import styles from './newExercise.module.scss'

const data = ['chest', 'shoulders', 'legs', 'biceps', 'hit']
const NewExercise = () => {
  const [field, setField] = useState({
    name: '',
    times: 0,
  })
  const [imageName, setImageName] = useState('chest')

  const { mutate, isLoading, error, isSuccess } = useMutation(
    'Create new exercise',
    () =>
      _api({
        url: '/exercises',
        type: 'POST',
        body: {
          name: field.name,
          times: field.times,
          imageName,
        },
      }),
    {
      onSuccess(data) {
        console.log(data)
        setField({
          name: '',
          times: 0,
        })
      },
    }
  )

  const handleChange = (e) => {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (field.name && field.times && imageName) {
      mutate()
    }
  }

  return (
    <Layout background={bg} title={'Create new exercise'}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <Alert type="error">{error}</Alert>}
        {isSuccess && <Alert type="success">Exercise has been created</Alert>}
        {isLoading && <Loader />}
        <Field
          type="text"
          name={'name'}
          placeholder="Name"
          value={field.name}
          onChange={handleChange}
        />
        <Field
          type="number"
          name={'times'}
          placeholder="Times"
          value={field.times}
          onChange={handleChange}
        />
        <div className={styles.images}>
          {data.map((name) => (
            <div
              onClick={() => setImageName(name)}
              key={name}
              className={cn(styles.img_wrapper, {
                [styles.active]: imageName === name,
              })}
            >
              <img
                onClick={() => setImageName(name)}
                src={`/uploads/exercises/${name}.svg`}
                alt={`${name}`}
              />
            </div>
          ))}
        </div>
        <Button className={styles.btn}>Create</Button>
      </form>
    </Layout>
  )
}

export default NewExercise
