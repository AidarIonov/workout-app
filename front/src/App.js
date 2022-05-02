import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from './components/pages/newWorkout/NewWorkout';
import Auth from './components/pages/authorization/Auth';
import { routes } from './dataRoutes';
import { useAuth } from './hooks/useAuth';
import Error404 from './components/pages/404';
const App = () => {
  const {isAuth} = useAuth();
  return (
    <Routes>
      {routes.map((item, i) => {
        if(item.auth && !isAuth) {
          return 
        }else {
          return (
            <Route key={item.path} path={item.path} element={<item.component/>}/>
          )
        }
      })}
    </Routes>
  );
};

export default App;