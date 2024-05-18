import styles from "./MyAccount.module.scss";

export default function MyAccount() {
  return (
    <section className={styles.myAccountPart}>
      <div className={styles.myAccountTexts}>
        <h1>Hesabım</h1>
        <p>Hesab məlumatlarım</p>
        <div className={styles.expenseText}>
          <p>Son 3 ildə xərclənən məbləğ:</p>
          <p>
            3450 <span>AZN</span>
          </p>
        </div>
      </div>
      <form>
        <ul className={styles.inputsContainer}>
          <li>
            <div className={styles.inputElement}>
              <label htmlFor="Adınız">Adınız</label>
              <input type="text" name="name" id="Adınız" />
            </div>
            <div className={styles.inputElement}>
              <label htmlFor="Soyadınız">Soyadınız</label>
              <input type="text" name="surname" id="Soyadınız" />
            </div>
          </li>
          <li>
            <div className={styles.inputElement}>
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" id="Email" />
            </div>
            <div className={styles.inputElement}>
              <label htmlFor="Telefon">Əlaqə nömrəsi</label>
              <input type="number" name="phone" id="Telefon" />
            </div>
          </li>
        </ul>
        <div className={styles.buttons}>
          <a>Şifrəni dəyiş</a>
          <input type="submit" name="submitButton" value={"Yadda saxla"} />
        </div>
      </form>
    </section>
  );
}
