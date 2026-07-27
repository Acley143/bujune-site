export type Link = {
  title?: string;
  url?: string;
  icon?: string;
};

export type Asset = {
  url?: string;
  title?: string;
  width?: number;
  height?: number;
};

export type Project = {
  title: string;
  visible: boolean;
  layout?: 'wide' | 'tall';
  thumbnail?: Asset;
  link?: Link;
};
