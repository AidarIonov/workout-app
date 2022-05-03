import { NewWorkout, NewExercise, Home, Auth, Error404 } from './components'
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
    path: '*',
    exact: false,
    component: Error404,
    auth: false,
  },
]
