import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from './components/pages/newWorkout/NewWorkout';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-workout' element={<NewWorkout/>}/>
    </Routes>
  );
};

export default App;