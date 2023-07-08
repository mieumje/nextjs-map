import { NextPage } from 'next';
import Image from 'next/image';
import example from '../../public/example.jpeg';
import LegacyImage from 'next/legacy/image';

const Images: NextPage = () => {
  return (
    <main>
      {/* <section style={{ height: '500vh' }}>long long content</section> */}
      <hr style={{ margin: '32px 0' }} />

      <h1>img tag</h1>

      <figure>
        <img
          src="https://lecture-1.vercel.app/example.jpg"
          alt="inflearn logo"
          width={500}
          height={100}
          loading="lazy"
        />
      </figure>

      <h1>next image</h1>
      <figure>
        <Image
          src={example}
          width={500}
          height={100}
          alt="inflearn logo"
          placeholder="blur"
          quality={100}
        />
      </figure>
      <figcaption>v13 image static</figcaption>

      <h1>next image</h1>
      <figure>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          width={500}
          height={100}
          alt="inflearn logo"
        />
      </figure>
      <figcaption>v13 image</figcaption>

      <figure style={{ width: '500px', height: '100px', position: 'relative' }}>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          fill
          alt="inflearn logo fill"
          style={{ objectFit: 'cover' }}
        />
      </figure>
      <figcaption>v13 image fill</figcaption>

      <hr />
      <h1>next legacy image</h1>

      {/** statically import */}
      <figure>
        <LegacyImage src={example} alt="example image" />
        <figcaption>intrinsic static image</figcaption>
      </figure>

      {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="example" />*/}
      {/*  <figcaption>example image</figcaption>*/}
      {/*</figure>*/}

      {/** path string */}
      <figure>
        <LegacyImage
          src="https://lecture-1.vercel.app/example.jpg"
          alt="intrinsic image"
          width={500}
          height={100}
        />
        <figcaption>intrinsic remote image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="fixed image"
          layout="fixed"
          width={500}
          height={100}
        />
        <figcaption>fixed image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="responsive image"
          layout="responsive"
          width={500}
          height={100}
        />
        <figcaption>responsive image</figcaption>
      </figure>

      <figure>
        <div style={{ width: 500, height: 100, position: 'relative' }}>
          <LegacyImage
            src="https://lecture-1.vercel.app/example.jpg"
            alt="fill image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <figcaption>fill image</figcaption>
      </figure>

      <hr style={{ margin: '32px 0' }} />
    </main>
  );
};

export default Images;
