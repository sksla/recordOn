 
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";


const onboarding_data = [
		{
		id: 1,
		title: "",
		description:
			"",
	},
];

const Onboarding = () => {
	return (
		<>
			<section className="onboarding">
				<Swiper className="swiper onboarding-swiper">
					{onboarding_data.map((item, i) => (
						<SwiperSlide key={i} className="swiper-slide">
							<div className="image position-relative">
								
							</div>
							<div className="content text-center">
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								{i === 3 ? (
									<>
										<Link
											to="/signin"
											className="btn-primary btn-get-started"
										>
											Get Started
										</Link>
										<h6>
											Do not have an account?{" "}
											<Link to="/signup">Register</Link>
										</h6>
									</>
								) : null}
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="slider-footer">
					<div className="row align-items-center">
						<div className="col-6">
						
						</div>
						<div className="col-6">
							<div className="custom-pagination swiper-pagination"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Onboarding;
