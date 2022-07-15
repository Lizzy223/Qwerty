
import { Routes, Route } from "react-router-dom";
///import ReactGA from 'react-ga'
import Index from "./pages/index";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Names from "./pages/Anyname";
import Footer from './components/Footer'
//import RouteChangeTracker from './components/RouteChangeTracker';
import { UserProvider } from "./components/MainContext";
import Dashboard from "./pages/Dashboard";
import ParkinLot from "./pages/ParkinLot";
import JobId from "./pages/JobId"

function App() {
	// const TRACKING_ID = "313004653"; // OUR_TRACKING_ID
	// ReactGA.initialize(TRACKING_ID);

	//   ReactGA.event({
	//   category: 'User',
	//   action: 'Created an Account'
	// });
	// ReactGA.exception({
	//   description: 'An error ocurred',
	//   fatal: true
	// });
	return (
		<>
			{/* <RouteChangeTracker/> */}
			<UserProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="jobs" exact element={<Jobs />} />
					<Route path="login" exact element={<Login />} />
					<Route path="contact" exact element={<Contact />} />
					<Route path="register" exact element={<Register />} />
					<Route path="forgot-password" exact element={<ForgotPassword />} />
					<Route path="reset-password" exact element={<ResetPassword />} />
					<Route path="anyname" exact element={<Names />} />
					<Route path="dashboard" exact element={<Dashboard />} />
					<Route path="/parking-lot" element={<ParkinLot />} />
					<Route path='/jobs/job-id' element={<JobId/>}/>
				</Routes>
				<Footer/>
			</UserProvider>
		</>
	);
}

export default App;
