// import { useState } from "react";
import { useNavigate } from "react-router-dom";

 

const Support = () => {


	const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);  // -1 navigates back to the previous page
  };

	return (
		<>
			<main>
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Help and Support</h3>
				</div>

				<section className="help-main search px-24">
					<form action="#">
						<div className="help-search w-100 d-flex align-items-center gap-8 radius-24">
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
								<button type="button" className="d-flex align-items-center">
									<img src="/assets/svg/filter-black.svg" alt="filter" />
								</button>
							</div>
						</div>
					</form>
				</section>

				
			</main>
		</>
	);
};

export default Support;
