import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Arunkumar Dharmarajan — Senior Frontend Engineer</title>
        <meta name="description" content="Senior Frontend Engineer specializing in React, Next.js & Performance Optimization — Portfolio of Arunkumar Dharmarajan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="Arunkumar Dharmarajan — Senior Frontend Engineer" />
        <meta property="og:description" content="Senior Frontend Engineer specializing in React, Next.js & Performance Optimization" />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </>
  )
}
