import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Clients() {
    const clients = [
        { id: "max", name: "Maximilian" },
        { id: "manny", name: "Manuel" },
    ];

  return (
    <div className={styles.container}>
      <h1>The Clients Page</h1>
      <ul>
          {clients.map((client) => (<li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>

          </li>))}
          

      </ul>
    </div>
  )
}