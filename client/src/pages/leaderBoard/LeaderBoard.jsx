import { useEffect } from 'react';
import { getLeaderBoard } from '../../app/action/leaderBoard';
import './LeaderBoard.scss';
import { useDispatch, useSelector } from 'react-redux';
const LeaderBoard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getLeaderBoard());
	}, [dispatch]);
	const allUserScore = useSelector((state) => state.leader.allUserScore);
	const { name } = useSelector((state) => state.user.user.user);
	console.log(name);
	return (
		<div className="leaderboard">
			<h2>Leaderboard</h2>
			<table className="table table-striped table-bordered">
				<thead>
					<tr id="colheaders" className="top100">
						<th className="idcol">#</th>
						<th>Name</th>
						<th className="30days">
							<th>Total Score</th>
						</th>
					</tr>
				</thead>
				<tbody>
					{allUserScore?.map((user, index) => {
						return (
							<tr
								key={index}
								className={`${
									name === user.name
										? 'active_user'
										: 'other_users'
								}`}
							>
								<td className="idcol">{user.rank}</td>
								<td>
									<span>
										{user.name === name
											? `${user.name} (You)`
											: user.name}
									</span>
								</td>
								<td className="pointscol">{user.totalScore}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default LeaderBoard;
