import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Arunkumar Dharmarajan — Senior Front-End Engineer</title>
        <meta name="description" content="Lead Front-End Developer (React & Next.js) — portfolio of Arunkumar Dharmarajan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="min-h-screen py-8 px-4">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </>
  )
}
