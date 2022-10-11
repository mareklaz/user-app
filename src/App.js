import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/misc/NavBar';
import HomeScreen from "./screens/home/HomeScreen";
import UserDetailScreen from "./screens/user/UserDetailScreen";
import UserFormScreen from "./screens/user/UserFormScreen";
import UserListScreen from "./screens/user/UserListScreen";

function App() {
  return (
    <div className='' data-theme="emerald">
      <NavBar />
      <div className='sm:container mx-auto'>
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path="/users" element={<UserListScreen />}/>
          <Route path='/users/new' element={<UserFormScreen />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
