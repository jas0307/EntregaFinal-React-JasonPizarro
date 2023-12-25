import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		
			<ButtonGroup className="mb-2">
			<span>{count}&nbsp;</span>
			<Button variant="secondary" size="sm" disabled={count <= 1} onClick={decrease} className="operacion">
				-
			</Button>
			
			<Button variant="secondary" size="sm" disabled={count >= stock} onClick={increase} className="operacion">
				+
			</Button>
			
			<div>
			&nbsp;<Button variant="secondary" size="sm" disabled={stock <= 0} onClick={() => onAdd(count)} className="operacion">
					Agregar al carrito
				</Button>
			</div>
			</ButtonGroup>
		
	);
};

export default ItemCount;