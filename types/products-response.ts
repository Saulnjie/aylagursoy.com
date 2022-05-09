// export interface ProductsResponse {
//     data: Datum[];
//     meta: Meta;
// }

// export interface Datum {
//     id:         number;
//     attributes: Attributes;
// }

// export interface Attributes {
//     title:       string;
//     description: string;
//     createdAt:   Date;
//     updatedAt:   Date;
//     publishedAt: Date;
// }

// export interface Meta {
//     pagination: Pagination;
// }

// export interface Pagination {
//     page:      number;
//     pageSize:  number;
//     pageCount: number;
//     total:     number;
// }

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
    purchased:        null | string;
    coverImage:       CoverImage;
    additionalImages: AdditionalImages;
}

export interface AdditionalImages {
    data: DAT[] | null;
}

export interface DAT {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    JPEG = ".jpeg",
    Jpg = ".jpg",
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
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export enum Provider {
    Local = "local",
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

