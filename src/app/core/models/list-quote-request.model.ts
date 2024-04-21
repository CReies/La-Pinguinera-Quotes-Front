export interface IListQuoteRequest {
  books: IBook[];
  
}

interface IBook {
  id: number;
  quantity: number;
}
