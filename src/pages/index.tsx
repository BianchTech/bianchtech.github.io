import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="bg-gradient-to-br from-indigo-900 via-indigo-700 to-cyan-500 text-white py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {siteConfig.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2">
          {siteConfig.tagline}
        </p>
        <p className="text-lg text-gray-100 mb-6">
          <Translate>Where innovation meets collaboration.</Translate>
        </p>
        <div>
          <Link
            className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-md text-lg transition"
            to="/docs/intro"
          >
            <Translate>Explore the Projects</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
