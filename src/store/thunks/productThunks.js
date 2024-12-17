import { createAsyncThunk } from '@reduxjs/toolkit';
import { setProducts, setLoading, setError } from '../slices/productSlice.js';

// Mock data for development
const mockProducts = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/23856D/ffffff"
  },
  {
    id: 2,
    title: "Web Development",
    category: "IT Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/1B6350/ffffff"
  },
  {
    id: 3,
    title: "Mobile Development",
    category: "IT Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/154D3E/ffffff"
  },
  {
    id: 4,
    title: "UI/UX Design",
    category: "Design Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/23856D/ffffff"
  },
  {
    id: 5,
    title: "Digital Marketing",
    category: "Marketing Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/1B6350/ffffff"
  },
  {
    id: 6,
    title: "Content Writing",
    category: "English Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/154D3E/ffffff"
  },
  {
    id: 7,
    title: "SEO Optimization",
    category: "Marketing Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/23856D/ffffff"
  },
  {
    id: 8,
    title: "Data Analysis",
    category: "IT Department",
    price: 16.48,
    image: "https://via.placeholder.com/400x500/1B6350/ffffff"
  }
];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(setProducts(mockProducts));
      return mockProducts;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    }
  }
);
