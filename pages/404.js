import Image from "next/image";
import errorImg from "../components/undraw_Not_found_re_bh2e.png";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error page</title>
      </Head>

      <div className="flex flex-col items-center justify-center">
        <Image src={errorImg} alt="error" />
        <h1 className="text-xl">
          Lo sentimos no encontramos lo que estabas buscando
        </h1>
        <Link href="/" className="primary-button text-white">
          Regresar
        </Link>
      </div>
    </>
  );
}
