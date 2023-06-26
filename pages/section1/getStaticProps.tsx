import { NextPage } from "next";

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }: Props) => {
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값 : {data}</p>
    </main>
  )
}

export default Example;

export async function getStaticProps() {
  const delaySeconds = 2;
  const data = await new Promise((resolve) => setTimeout(() => {
    return resolve(Math.random())
  }, delaySeconds * 1000))

  return {
    props: { data },
    revalidate: 5,
  }
}