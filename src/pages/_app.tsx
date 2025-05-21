import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>生成AIで未来の業務を変える | 株式会社tale</title>
        <meta name="description" content="研修・診断・オンプレミス導入まで、生成AIの導入・活用をトータルサポート" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </>
  )
}