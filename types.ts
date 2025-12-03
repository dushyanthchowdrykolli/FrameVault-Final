export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  coverUrl?: string;
}

export interface Photo {
  id: string;
  albumId: string;
  url: string;
  dateAdded: string;
}

export interface Share {
  id: string;
  albumId: string;
  token: string;
}
