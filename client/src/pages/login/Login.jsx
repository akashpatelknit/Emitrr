import React, { useState } from 'react';
import './Login.css';
import {
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBBtn,
	MDBInput,
	MDBTypography,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginrUser } from '../../app/action/userAction';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const loginHandler = (e) => {
		e.preventDefault();
		console.log("login")
		dispatch(loginrUser({ email, password }));
	};

	return (
		<MDBContainer fluid className="p-3 my-5 container">
			<MDBTypography tag="h1" className="text-center mb">
				Login Please
			</MDBTypography>
			<MDBRow>
				<MDBCol col="10" md="6">
					{/* <img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
						className="img-fluid"
						alt="Phone image"
					/> */}
				</MDBCol>

				<MDBCol
					col="4"
					md="6"
					className=" d-flex flex-column justify-content-center align-items-center"
				>
					<MDBInput
						wrapperClass="mb-4"
						label="Email address"
						id="formControlLg"
						type="email"
						size="lg"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<MDBInput
						wrapperClass="mb-4"
						label="Password"
						id="formControlLg"
						type="password"
						size="lg"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<MDBBtn
						className="mb-4 w-100"
						size="md"
						onClick={loginHandler}
					>
						Sign in
					</MDBBtn>
					<MDBTypography tag="h6" className="text-center mb-4">
						Not a member?
					</MDBTypography>
					<Link to="/register">
						<MDBBtn className="mb-4 w-100" size="md">
							Register
						</MDBBtn>
					</Link>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default Login;
