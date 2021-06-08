import Head from 'next/head';
import { SITE_DESCRIPTION, SITE_IMG, SITE_IMG_ALT, SITE_LIVE_URL, SITE_NAME } from '../Config';

type SeoMetaProps = {
  title?: string;
  description?: string;
  image?: string;
  image_alt?: string;
};

export default function SeoMeta({ title, description, image, image_alt }: SeoMetaProps) {
  const siteName = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const siteDescription = description ? description : SITE_DESCRIPTION;
  const siteImage = image ? image : SITE_IMG;
  const siteImageAlt = image_alt ? image_alt : SITE_IMG_ALT;

  return (
    <Head>
      <title>{siteName}</title>
      <meta name='description' content={siteDescription} />

      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={siteName} />
      <meta name='og:description' property='og:description' content={siteDescription} />
      <meta property='og:site_name' content={siteName} />
      <meta name='og:image' content={siteImage} />

      <link rel='canonical' href={SITE_LIVE_URL} />

      <link rel='icon' type='image/png' href='/public/favicon.ico' />
      <link rel='apple-touch-icon' href='/public/favicon.ico' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={siteName} />
      <meta name='twitter:description' content={siteDescription} />
      <meta name='twitter:image' content={siteImage} />
      <meta name='twitter:site' content='@trevva_' />
      <meta name='twitter:creator' content='@trevva_' />
      <meta name='twitter:image:alt' content={siteImageAlt} />
    </Head>
  );
}
