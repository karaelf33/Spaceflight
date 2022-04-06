export interface Launches {
  id: string ;
  provider: string;
}
export interface Events {
  id:string;
  provider:string;
}


export interface Content {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newSite: string;
  summary: string;
  publishedAt: string;
  launches: Launches[];
  event:Events[];

}
