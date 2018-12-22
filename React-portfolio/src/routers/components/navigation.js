import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="">
			<NavLink to="/" activeClassName="active" exact={true}>
				Home
			</NavLink>
			<br />

			<NavLink to="/portfolio" exact>
				Portfolio
			</NavLink>
			<br />

			<NavLink to="/portfolio/:id" exact>
				Page
			</NavLink>
			<br />

			<NavLink to="/contact" exact>
				Contact
			</NavLink>
		</div>
	);
};

export default Navigation;
