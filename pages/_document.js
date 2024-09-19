import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: "Сайт Сармата Гаппоева",
    description:
      'Сармат Гаппоев - это очень крутой разработчик ваще жесть умеет код писать я в ахуе.',
    image: '/images/Moh.jpg'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohsinhyt" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RJJ7FBBKY2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-RJJ7FBBKY2');
              `
          }}
        />
      </Head>
      <body className='dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
