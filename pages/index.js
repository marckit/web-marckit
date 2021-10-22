import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import en from '../locales/en/pages/index';
import fr from '../locales/fr/pages/index';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <div>
      <Head>
        <title>{t.tabTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className="homePage">
          <h1>{t.titleHome}</h1>
          <Image
            src="/svg/Logo.svg"
            alt="My Logo"
            width={350}
            height={350}
            priority
          />
          <div id="explain">
            <div className="md:pr-12">
              <h2>{t.whyThis}</h2>
              <p>{t.explainProject}</p>
            </div>
            <div id="acronym">
              <h2>{t.whatAcronym}</h2>
              <p>
                Marc<span>&apos;s</span>
              </p>
              <p>
                K<span>ownledge of</span>
              </p>
              <p>
                I<span>nformation</span>
              </p>
              <p>
                T<span>echnologies</span>
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
