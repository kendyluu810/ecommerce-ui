import ProductInteraction from "@/components/ProductInteraction";
import { products } from "@/raw-data/data";
import Image from "next/image";

const ProductPage = async (props: {
  params: { id: string } | Promise<{ id: string }>;
  searchParams?: { color?: string; size?: string };
}) => {
  // In some Next.js versions `params` can be a Promise — unwrap it before use.
  const { params, searchParams } = props;
  const { id } = (await params) as { id: string };
  // searchParams can also be a Promise in some Next.js versions — unwrap if needed.
  let resolvedSearchParams: { color?: string; size?: string } | undefined =
    searchParams ?? undefined;
  if (
    resolvedSearchParams &&
    typeof (resolvedSearchParams as { then?: unknown }).then === "function"
  ) {
    resolvedSearchParams = (await (resolvedSearchParams as Promise<{
      color?: string;
      size?: string;
    }>)) as {
      color?: string;
      size?: string;
    };
  }
  const { size, color } = resolvedSearchParams ?? {};

  // find the product by id from the exported array
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <div className="mt-12">Product not found.</div>;
  }

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
