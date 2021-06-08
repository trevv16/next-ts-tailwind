import Head from 'next/head';
import { SITE_DESCRIPTION, SITE_IMG, SITE_IMG_ALT, SITE_LIVE_URL, SITE_NAME } from '../Config';

export default function SeoMeta({ title, description, image, image_alt }) {
  return (
    <Head>
      <title>{`${title} | ${SITE_NAME}` || SITE_NAME}</title>
      <meta name='description' content={description || SITE_DESCRIPTION} />

      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={title || SITE_NAME} />
      <meta name='og:description' property='og:description' content={description || SITE_DESCRIPTION} />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta name='og:image' content={image || SITE_IMG} />

      <link rel='canonical' href={SITE_LIVE_URL} />

      <link rel='icon' type='image/png' href='/public/favicon.ico' />
      <link rel='apple-touch-icon' href='/public/favicon.ico' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title || SITE_NAME} />
      <meta name='twitter:description' content={description || SITE_DESCRIPTION} />
      <meta name='twitter:image' content={image || SITE_IMG} />
      <meta name='twitter:site' content='@trevva_' />
      <meta name='twitter:creator' content='@trevva_' />
      <meta name='twitter:image:alt' content={image_alt || SITE_IMG_ALT} />
    </Head>
  );
}
