import colorLogo from "../images/tinder_logo_color.png";
import whiteLogo from "../images/tinder_logo_white.png";

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
	const handleClick = () => {
		setShowModal(true);
		setIsSignUp(false);
	};
	return (
		<nav>
			<div className="logo-container">
				<img
					src={minimal ? colorLogo : whiteLogo}
					alt="logo"
					className="logo"
				/>
			</div>
			{!authToken && !minimal && (
				<button
					className="nav-button"
					onClick={handleClick}
					disabled={showModal}>
					Log in
				</button>
			)}
		</nav>
	);
};

export default Nav;
