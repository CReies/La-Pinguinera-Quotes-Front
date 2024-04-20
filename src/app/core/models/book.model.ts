export interface IBook {
  title: string;
  author: string;
  price: number;
  type;
}

enum BookType {
  Book,
  Novel,
}
