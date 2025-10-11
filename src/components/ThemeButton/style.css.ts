import { css } from "styled-system/css";

export const wrapperStyle = css({
	position: "fixed",
	top: "10px",
	right: { base: "10px", mdDown: "1%" },
	mdDown: {
		top: "unset",
		bottom: "10px",
		opacity: "0.5",
	},
});

export const inputStyle = css({
	WebkitAppearance: "none",
	appearance: "none",
	width: { base: "100px", mdDown: "56px" },
	height: "50px",
	backgroundColor: "secondary",
	border: "3px solid #222222",
	borderRadius: "30px 100px 100px 100px",
	boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
	outline: "none",
	cursor: "pointer",
	position: "relative",
	transition: "all 0.5s",
	_before: {
		content: '""',
		position: "absolute",
		width: { base: "50px", mdDown: "28" },
		height: "50px",
		left: 0,
		top: "50%",
		transform: "translateY(-50%) scale(0.7)",
		border: "3px solid #222",
		borderRadius: "30px 100px 100px 100px",
		backgroundColor: "#fde881",
		boxSizing: "border-box",
		transition: "all 0.3s",
	},
	_checked: {
		borderRadius: "100px 100px 30px 100px",

		_before: {
			left: { base: "50%", mdDown: "unset" },
			backgroundColor: "#626c80",
			borderRadius: "100px 100px 30px 100px",
		},
	},
});
