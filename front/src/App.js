import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from './components/pages/newWorkout/NewWorkout';
import Auth from './components/pages/authorization/Auth';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-workout' element={<NewWorkout/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
  );
};

export default App;