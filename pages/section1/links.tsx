/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';

export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      <div style={{ height: '200vh' }} />
      {/* <a href="/section1/getStaticProps">/getStaticProps</a> */}
      <Link href="/section1/getStaticProps">/getStaticProps</Link>
      {/* <Link href="/section1/getStaticProps" legacyBehavior>
        <a href="/section1/getStaticProps">/getStaticProps</a>
      </Link> */}
    </main>
  );
}
