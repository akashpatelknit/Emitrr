import { useState } from 'react';
import {
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBBtn,
	MDBInput,
	MDBTypography,
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../app/action/userAction';
function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(registerUser({ name, email, password, language: 'English' }));
	};

	return (
		<MDBContainer fluid className="p-3 my-5">
			<MDBTypography tag="h1" className="text-center mb">
				Register
			</MDBTypography>
			<MDBRow>
				<MDBCol col="10" md="6">
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
						className="img-fluid"
						alt="Phone image"
					/>
				</MDBCol>

				<MDBCol
					col="4"
					md="6"
					className=" d-flex flex-column justify-content-center align-items-center"
				>
					<MDBInput
						wrapperClass="mb-4"
						label="Name"
						id="formControlLg"
						type="text"
						size="lg"
						onChange={(e) => setName(e.target.value)}
					/>

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
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default Register;
