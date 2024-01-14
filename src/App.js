import "./App.scss";
import React, { useContext, useEffect } from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./store/AuthContext";
import Main from "./layout/Main";
import FrameLeftChat from "./components/container/FrameLeftChat";
import PathArchived from "./components/Nav/pathArchived";
import PathRequests from "./components/Nav/pathRequests";
import NoChatsSelected from "./components/NoChatsSelected";
import PathT from "./components/Nav/PathT";
import PathActive from "./components/Nav/pathActive";
import FrameLeftIcon from "./components/container/FrameLeftIcon";
import FrameMiddle from "./components/container/FrameMiddle";

const App = () => {
	const { isAuthenticated } = useContext(AuthContext);
	useEffect(() => {
		console.log(isAuthenticated);
	}, [isAuthenticated]);

	return (
		<BrowserRouter>
			{/* {!isAuthenticated ? (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			) : */}
			{/* ( */}
			<Main>
				<Routes>
					<Route path="t/*" element={<FrameLeftChat />}>
						{/* <Route path="id" element={<FrameMiddle />} /> */}
					</Route>
				</Routes>
			</Main>
		</BrowserRouter>
	);
};

export default App;
