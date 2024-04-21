export interface IBook {
  title: string;
  author: string;
  price: number;
  type: BookType;
}

type BookType = 'Book' | 'Novel' | 0 | 1; // 0 and 1 are used to represent the types in the database
