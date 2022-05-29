
export interface ProductResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
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
  attributes: DatumAttributes;
}

export interface DatumAttributes {
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
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  medium:    Large;
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

export interface CoverImage {
  data: DAT;
}

export interface Meta {
}
