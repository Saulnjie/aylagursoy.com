export interface MessagesResponse {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:         number;
  attributes: Attributes;
}

export interface Attributes {
  email:       string;
  name:        string;
  message:     string;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
