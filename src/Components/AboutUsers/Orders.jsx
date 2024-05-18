import styles from "./Orders.module.scss";

export default function Orders() {
  return (
    <section className={styles.ordersPart}>
      <div className={styles.ordersTexts}>
        <h1>Sifarişlərim</h1>
        <p>Sifariş tarixçəsi</p>
        <h2>Sifariş siyahısı</h2>
      </div>
    </section>
  );
}
