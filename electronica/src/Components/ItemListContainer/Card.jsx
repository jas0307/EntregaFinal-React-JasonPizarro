import { Container } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';

const Card = ({digimon}) => {
    const handleAddToCart = (count) => {
        console.log(`Agregados al carrito: ${count} items`);
        // Aquí puedes implementar la lógica para agregar al carrito
      };

    const {name,image} = digimon
    return (
        <Container >
            <h3>{name}</h3>
            <img src={image} alt='' />
            
            <div>
      <h1>Item List Container</h1>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
        </Container>
        
        )


}
export default Card