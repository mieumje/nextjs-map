import Link from 'next/link';
import styles from '../../styles/header.module.scss';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <img
            src="https://lecture-1.vercel.app/inflearn.png"
            alt="inflean logo"
            width={110}
            height={40}
            className={styles.box}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
