import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h2>NotFound</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Aliquid recusandae suscipit temporibus soluta expedita, rerum
				quasi ullam hic eveniet cum possimus illo. Magni, autem
				distinctio delectus, iste sint ipsa deserunt molestiae quis
				libero veritatis rem repellendus. Id laboriosam, dolores nam ab
				modi facilis eum tenetur eveniet iure, deserunt iusto fuga.
			</p>

			<p>
				Go to the <Link to='/'>Home Page</Link>!
			</p>
		</div>
	);
}
