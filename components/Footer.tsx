import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center md:gap-0 md:flex-row md:justify-between md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-base font-medium tracking-wider text-white">
            TRENDKL
          </p>
        </Link>
        <p className="text-sm text-gray-400">@2025 TrendKL</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className="hover:underline">
          Homepage
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/tos" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/all-products" className="hover:underline">
          All Products
        </Link>
        <Link href="/new-arrivals" className="hover:underline">
          New Arrivals
        </Link>
        <Link href="/best-sellers" className="hover:underline">
          Best Sellers
        </Link>
        <Link href="/sales" className="hover:underline">
          Sales
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/blogs" className="hover:underline">
          Blogs
        </Link>
        <Link href="/affiliate-program" className="hover:underline">
          Affiliate Program
        </Link>
      </div>
    </div>
  );
};

export default Footer;
