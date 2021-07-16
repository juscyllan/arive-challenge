import { QueryClient } from 'react-query';

import { API_URL } from '../constants';
import { ApiCategory, ApiProduct } from './api.types';

export const client = new QueryClient();

export const getCategoryDetails = async () => {
  const res = await fetch(`${API_URL}/categories/1`);
  return (await res.json()) as ApiCategory;
};

export const getProducts = async (subCategoryId?: string) => {
  const res = await fetch(
    `${API_URL}/products${subCategoryId ? `?sub-categoryid=${subCategoryId}` : ''}`
  );
  return (await res.json()) as ApiProduct[];
};
