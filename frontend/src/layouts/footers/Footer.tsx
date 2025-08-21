import { Link } from "react-router-dom";

 

const Footer = () => {
	return (
		<>
			<footer className="bottom-nav">
				<ul className="d-flex align-items-center justify-content-around w-100 h-100">
					<li>
						<Link to="/home" className="icon home"></Link>
					</li>
					<li>
						<Link to="/todo" className="icon edit"></Link>
					</li>
					<li>
						<Link to="/calendar" className="icon calendar"></Link>
					</li>
					<li>
						<Link to="/map" className="icon map"></Link>
					</li>
					<li>
						<Link to="/user-profile" className="icon message"></Link>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
