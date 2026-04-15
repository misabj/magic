import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";
import { motion } from "framer-motion";

interface ProductCardProps { product: Product; index?: number; }

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <Link
                to={`/proizvodi/${product.slug}`}
                className="group block bg-[#0A0A0A] border border-[#A07848]/25 hover:border-[#A07848]/50 transition-all duration-500 overflow-hidden hover:shadow-lg"
            >
                <div className="relative overflow-hidden aspect-[4/5] bg-[#111]">
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        className="transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {product.badge && (
                        <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-[#A07848] text-white px-3 py-1 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                            {product.badge}
                        </span>
                    )}
                    <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#A07848] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        <ArrowUpRight size={16} strokeWidth={1.5} className="text-white" />
                    </div>
                </div>
                <div className="p-5">
                    <div className="h-[1px] w-8 bg-[#A07848] mb-4 group-hover:w-full transition-all duration-500" />
                    <h3 className="text-[#F5F0E8] text-sm tracking-[0.1em] uppercase font-medium leading-tight mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                        {product.name}
                    </h3>
                    {product.volume && (
                        <p className="text-[#6A6A6A] text-xs tracking-wider font-light mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
                            {product.volume}
                        </p>
                    )}
                    <p className="text-[#6A6A6A] text-xs font-light leading-relaxed line-clamp-2" style={{ fontFamily: 'var(--font-inter)' }}>
                        {product.shortDescription}
                    </p>
                </div>
            </Link>
        </motion.article>
    );
}
