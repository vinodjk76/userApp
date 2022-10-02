import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Pages';
import About from './components/Pages/About';
import Events from './components/Pages/events';
import AnnualReport from './components/Pages/annual';
import Teams from './components/Pages/teams';
import Blogs from './components/Pages/blogs';
import SignUp from './components/Pages/signup';
 import UserMainApp from './components/Users/UserMainApp'; 
 import StudentMainApp from './components/Students/StudentMainApp'; 
 

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<UserMainApp/>}  />		
		<Route path='/about' element={<About/>} />
	 	<Route path='/events' element={<Events/>} />
		<Route path='/annual' element={<AnnualReport/>} />
		<Route path='/team' element={<Teams/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/signup' element={<SignUp/>} />
		<Route path='/Student' element={<StudentMainApp/>} />
		<Route path='/Users' element={<UserMainApp/>} />
		
	</Routes>
	</Router>
	
);
}

export default App;
