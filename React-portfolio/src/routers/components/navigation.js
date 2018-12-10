import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="">
			<NavLink to="/">Home</NavLink>
			<br />

			<NavLink to="/portfolio">Portfolio</NavLink>
			<br />

			<NavLink to="/portfolio/:id">Page</NavLink>
			<br />

			<NavLink to="/contact">Contact</NavLink>
		</div>
	);
};

export default Navigation;
