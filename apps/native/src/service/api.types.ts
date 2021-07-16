export type ApiCategory = {
  id: number;
  name: string;
  subCategories: ApiSubCategory[];
};

export type ApiSubCategory = {
  id: string;
  name: string;
  productIds: number[];
};

export type ApiProduct = {
  id: number;
  name: string;
  brand: { name: string };
  price: number;
};
