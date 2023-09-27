import './Profile.scss';
import Chart from './Chart';
import BarChart from './Barchart';
import { useSelector, useDispatch } from 'react-redux';
import { getProgress } from '../../app/action/progressAction';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { loadUser, logout, updateLanguage } from '../../app/action/userAction';
const Profile = () => {
	const [edit, setEdit] = useState(false);
	const [selectedLang, setSelectedLang] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getProgress());
	}, [dispatch]);
	const user = useSelector((state) => state.user.user.user);
	const { allLanguage } = useSelector((state) => state.user);
	const labels = useSelector((state) => state.progress.labels);
	const handlesave = () => {
		setEdit(!edit);
		dispatch(updateLanguage({ language: selectedLang }));
		window.location.reload();	
	};
	const handleLogout = () => {
		dispatch(logout());
		navigate('/');

	};
	return (
		<div>
			<div id="profile">
				<div className="user_detail ">
					<h3>{user?.name}</h3>

					<button className="btn btn-primary" onClick={handleLogout}>
						Logout
						<HiOutlineLogout />
					</button>
				</div>
				<div className=" profile_item" id="language">
					<span>Language : {user?.language} </span>
					{edit && (
						<select
							id="cars"
							name="cars"
							value={selectedLang}
							onChange={(e) => setSelectedLang(e.target.value)}
						>
							{' '}
							<option>choose a language</option>
							{allLanguage.map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
							))}
						</select>
					)}
					{edit ? (
						<button
							className="btn btn-primary"
							onClick={handlesave}
						>
							Save
						</button>
					) : (
						<button
							className="btn btn-primary"
							onClick={() => setEdit(!edit)}
						>
							Edit Language
						</button>
					)}
				</div>
				<div className="graph">
					<div className="graph_bar">
						<Chart />
					</div>
					<div className="graph_chart">
						<BarChart />
					</div>
				</div>
				<div className="previous_exercse">
					{labels.map((item) => {
						return (
							<Link className="previous_exercse_item" key={item}>
								{item}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Profile;
