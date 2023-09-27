import { Link } from 'react-router-dom';
import './home.scss';
const Home = () => {
	return (
		<div id="container">
			<div id="home">
				<div className="home_left">
					<div className="textContainer">
						<h1>
							Lorem ipsum dolor sit amet consectetur sit amet
							consectetur
						</h1>
					</div>
					<div className="button">
						<Link className="btn btn-primary" to='/exercise'>Start Now </Link>
					</div>
				</div>
				<div className="home_right">
					<img
						src="https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
