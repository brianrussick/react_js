import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css'

export default function PortfolioProject() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    // send a request to some backend server
    // to fetch the piece of data with an id of router.query.id

  return (
    <div className={styles.container}>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}