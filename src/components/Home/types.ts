interface IPokemon {
  url: string;
  name: string;
}
export interface IData {
  count: number;
  next: string;
  previus: string;
  results: IPokemon[];
}
