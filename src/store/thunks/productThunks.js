import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios.js';
import { setProducts, setLoading, setError } from '../slices/productSlice.js';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await api.get('/products');
      dispatch(setProducts(response.data));
      return response.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    }
  }
);
