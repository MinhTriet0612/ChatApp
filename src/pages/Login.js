import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
	const { setIsAuthenticated } = useContext(AuthContext);

	return (
		<div>
			<button onClick={() => setIsAuthenticated()}>Login</button>
		</div>
	);
};

export default Login;
