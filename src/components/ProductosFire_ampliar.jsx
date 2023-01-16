import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../queries/products';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    getProductById(db, id)
      .then((item) => {
        setProduct(item)
      })
  }, [id]);

  return (
    <div>
      <h1>Producto</h1>
      <h1>{product?.nombre}</h1>
      <p>{product?.descripcion}</p>
    </div>
  )
}

export default Product;
