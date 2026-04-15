export type ProductCategory =
    | "setovi"
    | "fileri"
    | "kreme-serumi"
    | "pilinzi-maske"
    | "infuzije"
    | "ulja"
    | "ostalo";

export interface Product {
    slug: string;
    name: string;
    nameEn: string;
    category: ProductCategory;
    subcategory?: string;
    volume?: string;
    shortDescription: string;
    description: string;
    image: string;
    featured?: boolean;
    badge?: string;
    contents?: string[];
    ingredients?: string;
    howToUse?: string;
    videoUrl?: string;
    pdfUrl?: string;
    treatments?: { label: string; count: number }[];
}

export interface NavLink {
    href: string;
    label: string;
}
