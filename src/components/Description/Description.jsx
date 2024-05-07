import styles from "./description.module.css";

export default function Description({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p className={styles.mainText}>{description}</p>
    </div>
  );
}
