export type Project = {
  title: string;
  openModal: boolean;
  description: string;
  featuredImg: string;
  hrefs: { label: string; url: string }[];
  tags: string[];
  projectImagesPath?: string;
  totalImages?: number;
};
