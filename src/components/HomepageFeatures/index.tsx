import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: 'Open Source Community' }),
    Svg: require('@site/static/img/undraw_chatting_5u5z.svg').default,
    description: (
      <Translate>
        Join a thriving open-source community driven by innovation and collaboration.
        Discover projects, share knowledge, and build impactful solutions together.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'Solutions for Developers' }),
    Svg: require('@site/static/img/undraw_programmer_raqr.svg').default,
    description: (
      <Translate>
        Explore tools and solutions tailored for developers, designed to simplify workflows,
        enhance productivity, and address real-world challenges efficiently.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'Contribute to Projects' }),
    Svg: require('@site/static/img/undraw_reading_c1xl.svg').default,
    description: (
      <Translate>
        Become a part of the innovation by contributing to our projects. From code
        contributions to documentation, your input makes a difference.
      </Translate>
    ),
  },
];


function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
