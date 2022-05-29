export interface ProductsResponse {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    title:            string;
    description:      string;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    specifications:   string;
    purchased:        string;
    introDescription: string;
    coverImage:       CoverImage;
    additionalImages: AdditionalImages;
}

export interface AdditionalImages {
    data: DAT[];
}

export interface DAT {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null | string;
    caption:           null | string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Large;
    medium?:   Large;
    small:     Large;
    large?:    Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface CoverImage {
    data: DAT;
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
