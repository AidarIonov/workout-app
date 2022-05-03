import { useState } from 'react';
import ReactSelect from 'react-select';
import Layout from '../../common/Layout';

import bg from '../../../images/new-workout.jpg'
import Field from '../../ui/field/Field';
import Button from '../../ui/button/Button';

import styles from './newWorkout.module.scss';
import { Link } from 'react-router-dom';
const NewWorkout = () => {
  const [field, setField] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleChange = e => {
    setField(e.target.value)
  }

  return (
    <Layout 
            background={bg}
            title={'Create new workout'}>
      <form className={styles.form}>
        <Field 
              type='text'
              name={'name'}
              placeholder='Name' 
              value={field}
              onChange={handleChange}/>
        <Link to='/new-exercise' className={styles.exercise_link}>
            Add new exercises
        </Link>
        <ReactSelect
                classNamePrefix='select2-selection'
                placeholder='Exercises..'
                title='Exercises'
                options={[
                  {value: 'qweq23', label: 'Push-ups'},
                  {value: 'qweq24', label: 'Pull-ups'},
                ]}
                value={exercises}
                onChange={setExercises}
                isMulti={true}/>
          <Button className={styles.btn}>
            Create
          </Button>
      </form>
    </Layout>
  );
};

export default NewWorkout;