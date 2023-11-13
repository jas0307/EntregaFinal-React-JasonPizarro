import { Container } from "react-bootstrap"
import banner from "../ItemListContainer/banner.png"
 
const ItemListContainer = ({greeting}) => {
    return(
        <Container>
            <h1>{greeting}</h1>
            <img src={banner} width="100%" />
        
        </Container>
       
        )
    }
    export default ItemListContainer