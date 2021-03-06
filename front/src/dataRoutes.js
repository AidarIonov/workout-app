import {
  NewWorkout,
  NewExercise,
  Home,
  Auth,
  Error404,
  Profile,
  SingleWorkout,
  WorkoutsList,
  SingleExercise
} from './components';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: '/auth',
    exact: false,
    component: Auth,
    auth: false,
  },
  {
    path: '/new-workout',
    exact: false,
    component: NewWorkout,
    auth: true,
  },
  {
    path: '/new-exercise',
    exact: false,
    component: NewExercise,
    auth: true,
  },
  {
    path: '/profile',
    exact: false,
    component: Profile,
    auth: true,
  },
  {
    path: '/workouts/:id',
    exact: false,
    component: SingleWorkout,
    auth: true,
  },
  {
    path: '/workouts',
    exact: false,
    component: WorkoutsList,
    auth: true,
  },
  {
    path: '/exercise/:id',
    exact: false,
    component: SingleExercise,
    auth: true,
  },
  {
    path: '*',
    exact: false,
    component: Error404,
    auth: false,
  },
]
