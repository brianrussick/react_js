import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css'

export default function ClientProjects() {
    const router = useRouter();
    console.log(router.query);
    
  return (
    <div className={styles.container}>
      <h1>The Projects of a Given Client</h1>
    </div>
  )
}