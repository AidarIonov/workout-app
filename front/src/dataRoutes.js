import NewWorkout from "./components/pages/newWorkout/NewWorkout";
import Home from "./components/pages/home/Home";
import Auth from "./components/pages/authorization/Auth";
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
]