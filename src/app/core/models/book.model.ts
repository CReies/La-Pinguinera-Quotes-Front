export interface IBook {
  title: string;
  author: string;
  price: number;
  type :BookType;
}

type BookType = "Book"  | "Novel"
