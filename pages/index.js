import { Banner } from "@/components/Banner";
import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import data from "@/utils/data";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Inicio">
      <Banner />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
