import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

export default function BlogPost() {
    const router = useRouter();
    console.log(router.query);
    
  return (
    <div className={styles.container}>
      <h1>The Blog Posts</h1>
    </div>
  )
}