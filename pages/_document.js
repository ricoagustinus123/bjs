import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="author" content="Bintang Jamtama Sejahtera"/>
            <meta name="keywords" content="Office Boy,Office Girl,Driver,Security,Receptionist,Administrasi"/>
            <meta name="description" content="Outsourcing terbaik dan terpercaya"/>
            <title>Bintang Jamtama Sejahtera</title>
            <link rel="icon" href="../public/bjs-logo.svg" sizes="100x100"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@600&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument