 

import React, { useState, useEffect } from "react";
import InfoArea from "./InfoArea"; 
// import { Swiper, SwiperSlide } from "swiper/react";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import { Link } from "react-router-dom";
import ServiceModal from "../../../modals/ServiceModal";
import ScrollTop from "../../common/ScrollTop";
import Footer from "../../../layouts/footers/Footer";


const Products = () => {
	const [showModal, setShowModal] = useState(false);
 
	useEffect(() => {
			const chk: HTMLInputElement | null = document.getElementById(
				"check-mode"
			) as HTMLInputElement;
			const modeChk: HTMLInputElement | null = document.getElementById(
				"mode-change"
			) as HTMLInputElement;
			const enableMode: HTMLInputElement | null = document.getElementById(
				"enableMode"
			) as HTMLInputElement;
	
			const toggleDarkMode = (darkModeStatus: boolean): void => {
				document.body.classList.toggle("dark-mode", darkModeStatus);
			};
	
			const changeHandler = (event: Event) => {
				const target = event.target as HTMLInputElement;
				const darkModeStatus = target.checked;
				toggleDarkMode(darkModeStatus);
				localStorage.setItem("darkModeStatus", darkModeStatus.toString());
				modeChk.checked = darkModeStatus;
				enableMode.checked = darkModeStatus;
			};
	
			if (chk) {
				chk.addEventListener("change", changeHandler);
	
				const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
				if (storedDarkModeStatus === "true") {
					toggleDarkMode(true);
					chk.checked = true;
				}
			}
	
			if (modeChk) {
				modeChk.addEventListener("change", changeHandler);
	
				const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
				if (storedDarkModeStatus === "true") {
					toggleDarkMode(true);
					modeChk.checked = true;
				}
			}
	
			if (enableMode) {
				enableMode.addEventListener("change", changeHandler);
	
				const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
				if (storedDarkModeStatus === "true") {
					toggleDarkMode(true);
					enableMode.checked = true;
				}
			}
	
			// Clean-up
			return () => {
				if (chk) chk.removeEventListener("change", changeHandler);
				if (modeChk) modeChk.removeEventListener("change", changeHandler);
				if (enableMode) enableMode.removeEventListener("change", changeHandler);
			};
		}, []);
	

	
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
						
						{/* all-pages */}
						<Link to="/all-pages">
							<img
								src="assets/svg/i.svg"
								alt="메뉴 아이콘"
								className="icon"
								/>
						</Link>
					</form>
				</section>
				

				
			</main>

			<Footer />

			<ServiceModal setShowModal={setShowModal} showModal={showModal} />
			
		</>
	);
};

export default Products;
