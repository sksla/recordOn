import { Link } from "react-router-dom";

 
const InfoArea = () => {
	return (
		<>
			<section className="info d-flex align-items-start justify-content-between pb-12">
				<div className="d-flex align-items-center justify-content-between gap-14">
					
				</div>

				<ul className="d-flex align-items-center gap-16">
					<li>
						<Link
							to="/notification"
							className="d-flex align-items-center justify-content-center rounded-full position-relative"
						>
							<img src="/assets/svg/bell-black.svg" alt="icon" />
							<span className="dot"></span>
						</Link>
					</li>
					<li>
						<Link
							to="/message"
							className="d-flex align-items-center justify-content-center rounded-full position-relative"
						>
							<img src="/assets/svg/message-square-dots.svg" alt="icon" />
							<span className="dot"></span>
						</Link>
					</li>
				</ul>
			</section>
		</>
	);
};

export default InfoArea;
