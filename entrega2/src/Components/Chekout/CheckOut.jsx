import { useState, useEffect } from "react"
import { useCartContext } from "../Context/CartContext"
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


export const CheckOut = () =>{

      const [nombre, setNombre] = useState('');
      const [apellido, setApellido] = useState('');
      const [telefono, setTelefono] = useState('');
      const [email, setEmail] = useState('');
      const [emailConfirmacion, setEmailConfirmacion] = useState('');
      const [error, setError] = useState('');
      const [ordenId, setOrdenId] = useState('');
      const [mensaje, setMensaje] = useState('');
      const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
      const year = now.getFullYear();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
      setCurrentDate(formattedDate);
    };

    // Actualizar la fecha cada minuto (o ajusta según necesidades)
    const intervalId = setInterval(updateDate, 60000);

    // Llamada inicial para mostrar la fecha inmediatamente
    updateDate();

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

      const [isSubmitted, setIsSubmitted] = useState(false);
      

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
     Promise.all(
      orden.items.map(async (productoOrden)=>{
             const db = getFirestore();
             const productoRef = doc(db, 'productos', productoOrden.id);

             const productoDoc = await getDoc(productoRef);
             const stockActual = productoDoc.data().stock;

             if (productoOrden.cantidad <= 0 || productoOrden.cantidad > stockActual) {
                throw new Error(`La cantidad solicitada para el producto ${productoOrden.id} no es válida o no queda stock`);
              }

             await updateDoc( productoRef, {
              stock: stockActual - productoOrden.cantidad,
             });
           
      })
     )
     .then(()=>{
       const db = getFirestore();
       addDoc(collection(db, 'orders'), orden)
       .then((docRef)=>{
        setOrdenId(docRef.id);
        setIsSubmitted(true);
        removeProduct();
       })
      .catch((error)=>{
        console.log('No se pudo crear la orden', error);
        setError('Error en la orden');
      });
     })
     .catch((error)=>{
      console.log('No se puede actualizar el stock', error);     
      setError('Porfavor revisar stock');
     });    
    
     setNombre('');
     setApellido('');
     setTelefono('');
     setEmail('');
     setEmailConfirmacion('');
     setMensaje('');
    
};
  return(
        <div className="formu">
          <h2> Complete el formulario para confirmar la compra </h2>
           <form className="formulario" onSubmit={manejadorFormulario}>
           
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
            <p> ¡Gracias por tu compra ! 
            con fecha {currentDate} <br></br>
            Tu numero de seguimiento es: <br/> {''} {ordenId} {''} <br/></p>
          )}
           <div>
           {isSubmitted ? (
        <Link to="/"><Button type="button">Volver al Home</Button></Link>
      ) : (
        <Button type="submit">Enviar</Button>
      )}
           </div>
          </form>
        </div>
     );
    }