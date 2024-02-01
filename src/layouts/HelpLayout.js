import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
	return (
		<div className='help-layout'>
			<h2>Website Help</h2>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
				quia.
			</p>

			<nav>
				<NavLink to='faq'>FAQ</NavLink>
				<NavLink to='contact'>Contact</NavLink>
				{/* to="contact" => /faq/contact */}
				{/* to="/contact" => /contact */}
			</nav>

			<main>
				<Outlet />
			</main>
		</div>
	);
}
