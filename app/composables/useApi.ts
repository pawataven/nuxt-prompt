type ApiFetchOptions = Parameters<typeof $fetch>[1];

export interface ApiHealth {
  status: 'ok' | 'degraded';
  service: string;
  database: 'ok' | 'unavailable';
  checkedAt: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  color: string | null;
  createdAt: string;
  updatedAt: string;
  _count?: {
    prompts: number;
  };
}

export interface PaginatedCategories {
  data: CategoryItem[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CategoryPayload {
  name: string;
  slug: string;
  color?: string | null;
}

export function useApi() {
  const config = useRuntimeConfig();

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    credentials: 'include',
  });

  function get<T>(path: string, options?: ApiFetchOptions) {
    return apiFetch<T>(path, {
      ...options,
      method: 'GET',
    });
  }

  function post<T>(path: string, body?: unknown, options?: ApiFetchOptions) {
    return apiFetch<T>(path, {
      ...options,
      method: 'POST',
      body,
    });
  }

  function patch<T>(path: string, body?: unknown, options?: ApiFetchOptions) {
    return apiFetch<T>(path, {
      ...options,
      method: 'PATCH',
      body,
    });
  }

  function remove<T>(path: string, options?: ApiFetchOptions) {
    return apiFetch<T>(path, {
      ...options,
      method: 'DELETE',
    });
  }

  return {
    get,
    post,
    patch,
    remove,
    health: () => get<ApiHealth>('/health'),
    listCategories: () => get<PaginatedCategories>('/categories'),
    createCategory: (payload: CategoryPayload) =>
      post<CategoryItem>('/categories', payload),
    updateCategory: (id: string, payload: CategoryPayload) =>
      patch<CategoryItem>(`/categories/${id}`, payload),
    deleteCategory: (id: string) =>
      remove<{ success: boolean }>(`/categories/${id}`),
  };
}
