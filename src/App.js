import "./App.css";
import React, { useContext, useEffect } from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./store/AuthContext";
import HelloWorld from "./pages/HelloWorld";
import Main from "./layout/Main";

const App = () => {
	// It just for representation
	// ******************
	// const currentUser = null;  It's case of not logged in
	//
	// const RequireAuth = ({ children }) => {
	//   return currentUser ? (
	//     children
	//   ) : (
	//     <>
	//       <SignIn />
	//       <Redirect from="*" to="/signin" />;
	//     </>
	//   );
	// };
	// ******************

	// It just for representation
	const { isAuthenticated } = useContext(AuthContext);
	useEffect(() => {
		console.log(isAuthenticated);
	});

	return (
		<Main>
			<BrowserRouter>
				{!isAuthenticated ? (
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<Navigate to="/login" />} />
					</Routes>
				) : (
					<Routes>
						<Route path="/" element={<HelloWorld />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				)}
			</BrowserRouter>
		</Main>
	);
};

export default App;
