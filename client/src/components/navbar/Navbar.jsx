import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<Link exact to="/" className="nav-logo">
						LLM
					</Link>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link
								exact
								to="/"
								className="nav-links"
								onClick={handleClick}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								exact
								to="/leaderboard"
								className="nav-links"
								onClick={handleClick}
							>
								Leader Board
							</Link>
						</li>
						<li className="nav-item">
							<Link
								exact
								to="/contact"
								className="nav-links"
								onClick={handleClick}
							>
								Contact US
							</Link>
						</li>
						<li className="nav-item">
							<Link
								exact
								to="/profile"
								className="nav-links"
								onClick={handleClick}
							>
								Profile
							</Link>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i
							className={click ? 'fas fa-times' : 'fas fa-bars'}
						></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
