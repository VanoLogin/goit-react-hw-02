import styles from "./styles.module.css";

const Notification = ({ message }) => {
  return (
    <div>
      <p className={styles.paragraph}>{message}</p>
    </div>
  );
};

export default Notification;
