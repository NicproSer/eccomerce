import Layout from "@/components/Layout";
import data from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Image from "next/image";
import { Store } from "@/utils/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return (
      <div>
        <h2 className="font-bold">Producto No encontrado</h2>
      </div>
    );
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Lo sentimos, este producto ya no está en stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">
          <i className="bx bx-chevron-left"></i> Regresar a la Tienda
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            width={550}
            height={500}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.name}</h1>
            </li>
            <li>Categorías: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              Descripción: <img src={product.getImageSize} alt="Descripcion" />
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>
                <h3>Precio</h3>
              </div>
              <div>
                <h3>$ {product.price}</h3>
              </div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>
                <h3>Status:</h3>
              </div>
              <div>
                {product.countInStock > 0 ? "En Stock" : "No Disponible"}
              </div>
            </div>
            <button
              className="primary-button w-full text-white"
              onClick={addToCartHandler}
            >
              <i className="bx bx-cart-add"></i> Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
