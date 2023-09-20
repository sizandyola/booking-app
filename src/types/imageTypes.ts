export type ImageType = {
    id?: number;
    name?: string;
    alternativeText?: null;
    caption?: null;
    width?: number;
    height?: number;
    formats?: Formats;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: null;
    provider?: string;
    provider_metadata?: null;
    createdAt?: Date;
    updatedAt?: Date;
};

export type Formats = {
    thumbnail?: Large;
    small?: Large;
    large?: Large;
    medium?: Large;
};

export type Large = {
    name?: string;
    hash?: string;
    ext?: string;
    mime?: string;
    path?: null;
    width?: number;
    height?: number;
    size?: number;
    url?: string;
};
