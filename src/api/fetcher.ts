import { DOMAIN } from "@constants/domain";

interface IFetchOptions<T = unknown> {
  endpoint: string;
  body?: T;
  method?: string;
  authorization?: string;
  id?: string;
}

interface IGetOptions {
  endpoint: string;
  authorization?: string;
}

interface IPostOptions<T = unknown> {
  endpoint: string;
  body?: T;
  authorization?: string;
}

interface IDeleteOptions {
  endpoint: string;
  authorization?: string;
}

const API_BASE_URL = import.meta.env.NODE_ENV === "production" ? DOMAIN : "/api/v1";

const _fetch = async <T = unknown, R = unknown>({
  method,
  endpoint,
  body,
  authorization,
}: IFetchOptions<T>): Promise<R> => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (authorization) {
    headers.Authorization = "Bearer " + authorization;
  }

  const requestOptions: RequestInit = {
    method,
    headers,
    credentials: "include",
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const res = await fetch(`${API_BASE_URL}/${endpoint}`, requestOptions);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }
  return await res.json();
};

// T: 요청 body의 타입,
// R: 응답 body의 타입

const _get = async <R = unknown>({ endpoint, authorization }: IGetOptions): Promise<R> => {
  return _fetch<never, R>({ method: "GET", endpoint, authorization });
};

const _post = async <T = unknown, R = unknown>({
  endpoint,
  body,
  authorization,
}: IPostOptions<T>): Promise<R> => {
  return _fetch<T, R>({ method: "POST", endpoint, body, authorization });
};

const _patch = async <T = unknown, R = unknown>({
  endpoint,
  body,
  authorization,
}: IPostOptions<T>): Promise<R> => {
  return _fetch<T, R>({ method: "PATCH", endpoint, body, authorization });
};

const _put = async <T = unknown, R = unknown>({
  endpoint,
  body,
  authorization,
}: IPostOptions<T>): Promise<R> => {
  return _fetch<T, R>({ method: "PUT", endpoint, body, authorization });
};

const _delete = async <R = unknown>({ endpoint, authorization }: IDeleteOptions): Promise<R> => {
  return _fetch<never, R>({ method: "DELETE", authorization, endpoint });
};

const api = {
  get: _get,
  post: _post,
  patch: _patch,
  put: _put,
  delete: _delete,
};

export default api;
