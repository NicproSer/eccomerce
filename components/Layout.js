import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";

import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "@/utils/Store";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");

    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <Head>
        <title>
          {title ? title + " - Pulidonow Store " : "Pulidonow Store"}
        </title>
        <meta
          name="description"
          content="En Pulidonow nos enfocamos en atender las necesidades de los clientes, basandonos en las tendencias del mundo de la moda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/" className="text-lg font-bold">
              Pulidonow Store
            </Link>
            <div>
              <Link href="/" className="p-3">
                Inicio
              </Link>
              <Link href="/about" className="p-3">
                Nosotros
              </Link>
              <Link href="/productos" className="p-3">
                Productos
              </Link>
              <Link href="/contacto" className="p-3">
                Contacto
              </Link>
              <Link href="/cart" className="p-3">
                <i className="bx bx-shopping-bag"></i>
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-blue-600 p-2 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {status === "loanding" ? (
                "Loanding"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Perfil
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Ordenes
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        className="dropdown-link"
                        onClick={logoutClickHandler}
                      >
                        Salir
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="p-3">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>

        <div id="footer">Footer</div>
        <footer
          id="credits"
          className="flex h-10 justify-center items-center shadow-inner"
        >
          &copy; {new Date().getFullYear()} - Pulidonow Store | Desarrollado por
          {"  "}
          <a
            href="https://nicprodev.mgpanel.org"
            target="_blank"
            className="font-bold px-2"
          >
            NICPRODEV
          </a>
        </footer>
      </div>
    </>
  );
}
