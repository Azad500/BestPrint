import styles from "./AboutUsers.module.scss";

export default function AboutUsers() {
  return (
    <section className={styles.usersContainer}>
      <ul className={styles.usersElement}>
        <li>
          <p>Hesabım</p>
        </li>
        <li>
          <p>Sifarişlərim</p>
        </li>
        <li>
          <p>Sifariş et</p>
        </li>
      </ul>
    </section>
  );
}
