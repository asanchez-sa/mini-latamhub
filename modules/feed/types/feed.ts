// types/feed.ts

import { post_category } from "@prisma/client";

// Tipo para representar un post
export type PostType = {
  post_id: string;
  user_id: string;
  content: string;
  is_anonymous: boolean;
  category: post_category;
  created_at: Date;
  updated_at: Date;
  user: UserType;
  tags: PostTagType[];
};

// Tipo para representar un usuario (asumiendo algunos campos básicos)
export type UserType = {
  user_id: string;
  name: string;
  email: string;
  // Otros campos relevantes del usuario
};

// Tipo para representar una etiqueta de post
export type PostTagType = {
  tag_id: string;
  post_id: string;
  tag_name: string;
};

// Tipo para el input de creación de un post
export type CreatePostInputType = {
  user_id: string;
  content: string;
  is_anonymous: boolean;
  category: post_category;
  tags: string[]; // Array de nombres de etiquetas
};

// Tipo para el input de actualización de un post
export type UpdatePostInputType = Partial<
  Omit<CreatePostInputType, "user_id">
> & {
  post_id: string;
};

// Tipo para los parámetros de búsqueda y paginación
export type FeedQueryParamsType = {
  query?: string;
  category?: post_category;
  page?: number;
  limit?: number;
};

// Tipo para la respuesta paginada del feed
export type PaginatedFeedResponseType = {
  items: PostType[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
};
