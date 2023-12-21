import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';

export const CheckOut = () =>{
      const [nombre, setNombre] = useState('');
      const [apellido, setApellido] = useState('');
      const [telefono, setTelefono] = useState('');
      const [email, setEmail] = useState('');
      const [emailConfirmacion, setEmailConfirmacion] = useState('');
      const [error, setError] = useState('');
      const [ordenId, setOrdenId] = useState('');
      const [mensaje, setMensaje] = useState('');

     const {cart, totalPrice, removeProduct} = useCartContext();

    const manejadorFormulario = (event) =>{
  
      event.preventDefault();
     

     if(!nombre || !apellido || !telefono || !email ||!emailConfirmacion ){
      setError('Por favor complete todos los campos requeridos');
      return;
     }

     if( email !== emailConfirmacion){
      setError('Los email no coinciden');
      return;
     }


     const total = totalPrice();
     const orden ={
      items: cart.map((producto)=>({
        id: producto.id,
        nombre: producto.name,
        cantidad: producto.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
     };
     
     const getStockForProduct = async (productId) => {
        const db = getFirestore();
        const productoRef = doc(db, 'productos', productId);
        const productoDoc = await getDoc(productoRef);
      
        return productoDoc.data().stock;
      };
      const checkStock = async (productoOrden) => {
        const stockActual = await getStockForProduct(productoOrden.id);
        return stockActual >= productoOrden.cantidad;
      };


       Promise.all(
      orden.items.map(async (productoOrden)=>{
        const stockAvailable = await checkStock(productoOrden);

        if (!stockAvailable) {
          console.log('No hay suficiente stock para el producto', productoOrden.id);
          setError('No hay suficiente stock para completar la orden');
          throw new Error('Insufficient stock for product');
        }

             const db = getFirestore();
             const productoRef = doc(db, 'productos', productoOrden.id);

             const productoDoc = await getDoc(productoRef);
             const stockActual = productoDoc.data().stock;

             await updateDoc( productoRef, {
              stock: stockActual - productoOrden.cantidad,
             });

             if (stockActual < productoOrden.cantidad) {
                setError(`No hay suficiente stock para ${productoOrden.nombre}`);
                return;}
      })
     )
     .then(()=>{
       const db = getFirestore();
       addDoc(collection(db, 'orders'), orden)
       .then((docRef)=>{
        setOrdenId(docRef.id);
        removeProduct();
       })
      .catch((error)=>{
        console.log('No se pudo crear la orden', error);
        setError('Error en la orden');
      });
     })
     .catch((error)=>{
      console.log('No se puede actualizar el stock', error);
      console.log(total);
      console.log(orden);
      console.log(stock);
      setError('No se actualizo el stock');
     });    
   
     setNombre('');
     setApellido('');
     setTelefono('');
     setEmail('');
     setEmailConfirmacion('');
     setMensaje('');
    
};
  return(
        <div>
          <h2> Complete el formulario para confirmar la compra </h2>
           <form onSubmit={manejadorFormulario}>
           
            {cart.map((producto)=>(
              <div key={producto.id}>
                <p>{''} {producto.nombre} {producto.cantidad}</p>
                <p>{producto.precio}</p>
              </div>
            ))}

          <div>
           <label className="lab-check">Nombre:</label>
             <input className="input-check" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
             />
          </div>

          <div>
           <label className="lab-check">Apellido:</label>
             <input className="input-check" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}
             />
          </div>

          <div>
           <label className="lab-check">Telefono:</label>
             <input className="input-check" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}
             />
          </div>

          <div>
           <label className="lab-check">Email:</label>
             <input className="input-check" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
             />
          </div>

          <div>
           <label className="lab-check">Confirmar email</label>
             <input className="input-check" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}
             />
          </div>


          {error && <p>{error}</p>}
          {ordenId && (
            <p> ¡Gracias por tu compra ! Tu numero de seguimiento es: <br/> {''} {ordenId} {''} <br/></p>
          )}
           <div>
            <button type="submit"> Enviar </button>
           </div>
          </form>
        </div>
     );
    }