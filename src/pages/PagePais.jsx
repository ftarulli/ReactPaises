import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export const PagePais = () => {
	let { id } = useParams();
	const [datoPais, setDatoPais] = useState([]);
	useEffect(() => {
		const Pais = async () => {
			try {
				const respuesta = await axios.get(
					`https://restcountries.com/v3.1/name/${id}`
				);
				setDatoPais(respuesta.data[0]);
				console.log(respuesta.data[0]);
				console.log(datoPais.name);
			} catch (error) {
				console.log(error);
			}
		};
		//
		Pais();
	}, []);
	return (
		<div className="d-flex align-items-center m-3">
			{datoPais ? (
				<div className="container">
					<div className="row d-flex justify-content-between">
						<div className="col mb-3">
							<Card style={{ width: '18rem' }}>
								<Card.Body className="my-3">
									{/* <Card.Title>{datoPais.name.common}</Card.Title> */}
									<Card.Img variant="top" src={datoPais.flags.png} />
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};
