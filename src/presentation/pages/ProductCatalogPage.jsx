import AppBar from "../components/AppBar";
import PageFooter from "../components/PageFooter";
import ProductCard from "../components/ProductCard";
import ProductCatalogHeadline from "../components/ProductCatalogHeadline";
import Pagnation from "../components/Pagnation";

const ProductCatalogPage = () => {
  const products = [
    {
      title: "Programming Laravel Getting Started with Laravel 9",
      subtitle: "Programming Laravel (Getting Started with Laravel 9)",
      batch: new Date("2023-07-30"),
      mentors: [
        "William Hartono, ",
        "Farel Prayoga",
      ],
      price: 798000,
      discount: 65,
    },
    {
      title: "Programming Laravel Getting Started with Laravel 9",
      subtitle: "Programming Laravel (Getting Started with Laravel 9)",
      batch: new Date("2023-07-30"),
      mentors: [
        "William Hartono, ",
        "Farel Prayoga",
      ],
      price: 798000,
      discount: 65,
    },
    {
      title: "Programming Laravel Getting Started with Laravel 9",
      subtitle: "Programming Laravel (Getting Started with Laravel 9)",
      batch: new Date("2023-07-30"),
      mentors: [
        "William Hartono, ",
        "Farel Prayoga",
      ],
      price: 798000,
      discount: 65,
    },
    {
      title: "Programming Laravel Getting Started with Laravel 9",
      subtitle: "Programming Laravel (Getting Started with Laravel 9)",
      batch: new Date("2023-07-30"),
      mentors: [
        "William Hartono, ",
        "Farel Prayoga",
      ],
      price: 798000,
      discount: 65,
    },
    {
      title: "Programming Laravel Getting Started with Laravel 9",
      subtitle: "Programming Laravel (Getting Started with Laravel 9)",
      batch: new Date("2023-07-30"),
      mentors: [
        "William Hartono, ",
        "Farel Prayoga",
      ],
      price: 798000,
      discount: 65,
    },
    {
      title: "Programming Laravel Getting Started with Laravel 9",
      subtitle: "Programming Laravel (Getting Started with Laravel 9)",
      batch: new Date("2023-07-30"),
      mentors: [
        "William Hartono, ",
        "Farel Prayoga",
      ],
      price: 798000,
      discount: 65,
    },
  ];

  return (
    <>
      <AppBar />
      <main className="bg-secondary">
        <ProductCatalogHeadline />
        <section
          id="products"
          className="grid gap-8 gap-y-16 grid-cols-3 justify-center items-center px-page py-16"
        >
          {products.map((e, i) => (
            <ProductCard key={i} product={e} />
          ))}
        </section>
        <Pagnation/>
      </main>
      <PageFooter />
      
    </>
  );
};

export default ProductCatalogPage;
