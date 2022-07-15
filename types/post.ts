export interface Category {
    id: number;
    name: string;
}

export interface Author {
    id: number;
    username: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Thumbnail {
    id: number;
    url: string;
}

export interface Data {
    id: number;
    title: string;
    description: string;
    views: string;
    category: Category;
    author: Author;
    tags: Tag[];
    thumbnail: Thumbnail;
}

export interface SinglePost {
    data: Data;
}