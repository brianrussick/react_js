import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css'

export default function ClientProjects() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {}
    // load data...
    router.push({
        pathname: '/clients/[id]/[id]',
        query: { id: 'max', id: 'projecta' },
    });

  return (
    <div className={styles.container}>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}