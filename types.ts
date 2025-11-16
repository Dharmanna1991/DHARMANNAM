
export enum ProductType {
  EBOOK = 'E-Book',
  PDF = 'PDF',
  PPT = 'PowerPoint',
  NOTES = 'Notes',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: ProductType;
  subject: string;
  university: string;
  rating: number;
  reviewsCount: number;
  author: string;
  pages: number;
  createdAt: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  createdAt: string;
}

export interface Order {
    id: string;
    userId: string;
    userName: string;
    date: string;
    total: number;
    status: 'Pending' | 'Completed' | 'Refunded';
    items: {
        productId: string;
        productName: string;
        quantity: number;
        price: number;
    }[];
}

export interface Theme {
  colors: {
    primary: {
      light: string;
      default: string;
      dark: string;
    };
    secondary: {
      light: string;
      default: string;
      dark: string;
    };
  };
  font: string;
}
