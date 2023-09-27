import Login from './pages/login/Login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/home/Home';
import { useEffect } from 'react';
import { loadUser } from './app/action/userAction';
import ProfilePage from './pages/profile/Profile';
import StartScreen from './pages/exercise/StartScreen';
import Question from './pages/exercise/Questions/Quistions';
import Result from './pages/result/Result';
import Leaderboard from './pages/leaderBoard/LeaderBoard';
const App = () => {
	const { isAuthenticated } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);
	return (
		<>
			<Router>
				{isAuthenticated && <Navbar />}
				<Routes>
					<Route
						path="/"
						element={isAuthenticated ? <Home /> : <Login />}
					/>
					<Route
						path="/register"
						element={isAuthenticated ? <Home /> : <Register />}
					/>
					<Route
						path="/profile"
						element={isAuthenticated && <ProfilePage />}
					/>
					<Route
						path="/exercise"
						element={isAuthenticated && <StartScreen />}
					/>
					<Route
						path="quiz"
						element={isAuthenticated && <Question />}
					/>
					<Route
						path="/result"
						element={isAuthenticated && <Result />}
					/>
					<Route
						path="/leaderboard"
						element={isAuthenticated && <Leaderboard />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
