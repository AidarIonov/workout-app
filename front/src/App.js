
import { Route, Routes } from 'react-router-dom';
import { routes } from './dataRoutes';
import { useAuth } from './hooks/useAuth';

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