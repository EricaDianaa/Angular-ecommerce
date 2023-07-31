export interface productor {
  products: prod[];
  limit?: number;
  skip?: number;
  total?: number;
}
export interface prod {
  id: number;
  description: string;
  title: number;
  price: number;
  images: string;
  brand: string;
  category: string;
  rating: number;
  stock: number;
  thumbnail: string;
}
