import "./assets/css/style.css";
//import "./assets/css/bootstrap.min.css";
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
import Name from "./components/Name";
//import RouteChangeTracker from './components/RouteChangeTracker';

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
		<div className="">
			{/* <RouteChangeTracker/> */}
			{/* <Nav /> */}
			<Name />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/jobs" exact element={<Jobs />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/contact" exact element={<Contact />} />
				<Route path="/register" exact element={<Register />} />
				<Route path="/forgotPassword" exact element={<ForgotPassword />} />
				<Route path="/resetpassword" exact element={<ResetPassword />} />
				<Route path="/anyname" exact element={<Names />} />
			</Routes>
		</div>
	);
}

export default App;
