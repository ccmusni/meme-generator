export type Meme = {
  id: string;
  name: string;
  url?: string;
  blank?: string;
  width: number;
  height: number;
  box_count: {
    [key: number]: string;
  };
};
