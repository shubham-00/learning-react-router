import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function About() {
	const [user, setUser] = useState('shubham');

	if (!user) {
		return <Navigate to='/' replace={true} />;
	}

	return (
		<div className='about'>
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
				reiciendis. Similique sunt nam suscipit debitis est doloremque
				minima inventore voluptas placeat temporibus tempora, maxime
				cupiditate repudiandae alias modi adipisci perspiciatis beatae
				quidem quia dolor eligendi, sint atque? Dolore voluptatum
				eligendi dicta nesciunt provident cum molestias?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
				dolorem quaerat suscipit facilis temporibus error nostrum
				debitis accusamus similique, quae id at obcaecati, eligendi
				distinctio, sapiente maxime ratione esse aperiam reiciendis
				velit iusto deserunt? Neque eos sed, rerum dicta placeat
				deleniti quae error libero nemo fuga. Autem porro dolore amet?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
				amet eum esse fuga repellendus illo totam quae corrupti dolore
				aut, maxime accusamus explicabo ex aliquam, sequi deserunt?
				Assumenda, molestias quaerat laboriosam quas quasi eum fuga
				pariatur facilis sed nisi voluptate ab quibusdam? Omnis facilis,
				est, aliquid assumenda culpa, porro voluptatem et doloribus
				dignissimos possimus eaque.
			</p>
			<button onClick={() => setUser(null)}>Logout</button>
		</div>
	);
}
