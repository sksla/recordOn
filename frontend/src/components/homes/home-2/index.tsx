 

import { useState } from "react";
import InfoArea from "./InfoArea"; 
// import { Swiper, SwiperSlide } from "swiper/react";
import HeaderOne from "../../../layouts/headers/HeaderOne";
// import { Link } from "react-router-dom";
import ServiceModal from "../../../modals/ServiceModal";
import ScrollTop from "../../common/ScrollTop";

const Products = () => {
	const [showModal, setShowModal] = useState(false);
 
	
	return (
		<>
		<ScrollTop />

			<main className="home">
				<HeaderOne />
				<InfoArea />

				<section className="search py-12">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="form-inner w-100 d-flex align-items-center gap-8 radius-24">
							<img
								src="/assets/svg/search.svg"
								alt="search"
								className="shrink-0"
							/>
							<input
								type="search"
								className="input-search input-field"
								placeholder="Search..."
							/>
							<div className="filter shrink-0">
								<button
									type="button"
									className="d-flex align-items-center"
									data-bs-toggle="modal"
									data-bs-target="#filterModal"
								>
									<img src="/assets/svg/filter-black.svg" alt="filter" />
								</button>
							</div>
						</div>
					</form>
				</section>

				
			</main>

			<ServiceModal setShowModal={setShowModal} showModal={showModal} />
		</>
	);
};

export default Products;
