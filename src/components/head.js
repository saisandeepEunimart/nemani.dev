import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import ogImage from '@images/og.png';
import { theme } from '@styles';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href="/public/favicon.png" />
    <link rel="canonical" href="https://nemani.dev" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />

    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="blog" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <meta name="msapplication-TileColor" content={theme.colors.navy} />

    <meta name="theme-color" content={theme.colors.navy} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
