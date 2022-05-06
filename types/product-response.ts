export interface ProductResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id:         number;
  attributes: Attributes;
}

export interface Attributes {
  title:          string;
  description:    string;
  createdAt:      Date;
  updatedAt:      Date;
  publishedAt:    Date;
  specifications: string;
  purchased:      string;
}

export interface Meta {
}
