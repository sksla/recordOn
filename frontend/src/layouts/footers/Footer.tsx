import { Link } from "react-router-dom";

 

const Footer = () => {
	return (
		<>
			<footer className="bottom-nav">
				<ul className="d-flex align-items-center justify-content-around w-100 h-100">
					<li>
						<Link to="/home" className="icon home">
							<img src="/assets/svg/bottom-nav/home.svg" alt="home" />
						</Link>
					</li>
					<li>
						<Link to="/explore" className="icon edit">
							<img src="/assets/svg/edit.svg" alt="todolist" />
						</Link>
					</li>
					<li>
						<Link to="/explore" className="icon calendar">
							<img src="/assets/svg/calendar.svg" alt="calendar" />
						</Link>
					</li>
					<li>
						<Link to="/wishlist" className="icon map">
							<img src="/assets/svg/map-marker.svg" alt="map" />
						</Link>
					</li>
					<li>
						<Link to="/user-profile" className="icon message">
							<img
								src="/assets/svg/message-square-dots.svg"
								alt="chat"
							/>
						</Link>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
