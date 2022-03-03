import { useState } from "react";
import Nav from "../components/nav";

const Onboarding = () => {
	const handleSubmit = () => {
		console.log("handle submit");
	};

	const handleChange = () => {
		console.log("handle change");
	};

	return (
		<>
			<Nav minimal={true} setShowModal={() => {}} showModal={false} />

			<div className="onboarding">
				<h2>Create Account</h2>

				<form onSubmit={handleSubmit}>
					<section>
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							id="first_name"
							name="first_name"
							placeholder="First Name"
							required={true}
							value={""}
							onChange={handleChange}
						/>

						<label>Birthday</label>
						<div className="multiple-input-container">
							<input
								id="dob_day"
								type="number"
								name="dob_day"
								placeholder="DD"
								required={true}
								value={""}
								onChange={handleChange}
							/>
							<input
								id="dob_month"
								type="number"
								name="dob_month"
								placeholder="MM"
								required={true}
								value={""}
								onChange={handleChange}
							/>
							<input
								id="dob_year"
								type="number"
								name="dob_year"
								placeholder="YYYY"
								required={true}
								value={""}
								onChange={handleChange}
							/>
						</div>

							<label>Gender</label>
						<div className="multiple-input-container">
							<input
								type="radio"
								id="man-gender-identity"
								name="gender_identity"
								value="man"
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="man-gender-identity">Man</label>
							<input
								type="radio"
								id="woman-gender-identity"
								name="gender_identity"
								value="woman"
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="woman-gender-identity">Woman</label>
							<input
								type="radio"
								id="more-gender-identity"
								name="gender_identity"
								value="more"
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="more-gender-identity">More</label>
						</div>

						<label htmlFor="show-gender">Show gender on profile</label>
						<input
							type="checkbox"
							id="show-gender"
							name="show_gender"
							onChange={handleChange}
							checked={false}
						/>
						<label>Show me</label>
						<div className="multiple-input-container">
							<input
								type="radio"
								id="man-gender-interest"
								name="gender_interest"
								value="man"
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="man-gender-interest">Man</label>
							<input
								type="radio"
								id="woman-gender-interest"
								name="gender_interest"
								value="woman"
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="woman-gender-interest">Woman</label>
							<input
								type="radio"
								id="everyone-gender-interest"
								name="gender_interest"
								value="everyone"
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="more-gender-interest">Everyone</label>
						</div>

						<label htmlFor="about">About me</label>
						<input
							type="text"
							id="about"
							name="about"
							placeholder="Tell us about yourself"
							value={""}
							onChange={handleChange}
						/>
						<input type="submit" />
					</section>

					<section>
						<label htmlFor="about">Profile photo</label>
						<input
							type="url"
							id="url"
							name="url"
							onChange={handleChange}
							required={true}
						/>

						<div className="photo-container"></div>
					</section>
				</form>
			</div>
		</>
	);
};

export default Onboarding;
