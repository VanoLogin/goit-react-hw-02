import styles from "./styles.module.css";

export default function FeedBack({ values, totalFeedback, positiveFeedback }) {
  const valuesKeys = Object.keys(values);

  return (
    <ul className={styles.valuesList}>
      {valuesKeys.map((key, i) => (
        <li key={i}>
          {key}: {values[key]}
        </li>
      ))}
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
