import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://foireann.ie',
      lastModified: new Date(),
    },
  ];
}
