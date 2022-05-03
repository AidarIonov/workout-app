import NewWorkout from "./components/pages/newWorkout/NewWorkout";
import NewExercise from "./components/pages/newExercise/NewExercise";
import Home from "./components/pages/home/Home";
import Auth from "./components/pages/authorization/Auth";
import Error404 from "./components/pages/404";
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