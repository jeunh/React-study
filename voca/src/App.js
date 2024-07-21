import './App.css';
import CreateDay from './components/CreateDay';
import CreateWord from './components/CreateWord';
import Day from './components/Day';
import DayList from './components/DayList';
import EmptyPage from './components/EmptyPage';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<DayList />}></Route>
          <Route path='/day/:day' element={<Day />}></Route>
          <Route path='/createWord' element={<CreateWord />}></Route>
          <Route path='/createDay' element={<CreateDay />}></Route>
          <Route path='*' element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
