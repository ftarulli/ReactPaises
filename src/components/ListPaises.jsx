import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const ListPaises = () => {
	const [ListPaises, setListPaises] = useState([]);
	useEffect(() => {
		const ObtenerPaises = async () => {
			try {
				const respuesta = await axios.get('https://restcountries.com/v3.1/all');
				setListPaises(respuesta.data);
				console.log(ListPaises);
			} catch (error) {
				console.log(error);
			}
		};
		//
		ObtenerPaises();
	}, []);

	return (
		<div>
			{ListPaises.map((pais) => {
				return (
					<div className="container">
						<div className="row d-flex justify-content-between">
							<div className="col mb-3">
								<Card style={{ width: '18rem' }}>
									<Card.Body className="my-3">
										<Card.Title>{pais.name.common}</Card.Title>
										<Card.Img variant="top" src={pais.flags.png} />
										<Link to={`/pais/${pais.name.common}`}> Ver Mas</Link>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
