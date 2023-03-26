export type Media = {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: 'CAROUSEL_ALBUM' | 'IMAGE';
  permalink: string;
};

export type InstagramData = {
  data: Media[];
};
