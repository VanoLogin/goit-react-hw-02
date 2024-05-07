import styles from "./styles.module.css";

export default function FeedBack({ values, totalFeedback, positiveFeedback }) {
  const valuesKeys = Object.keys(values);
  // const totalFeedback = Object.values(values).reduce(
  //   (sum, value) => sum + value,
  //   0
  // );

  // const positiveFeedback = Math.round((values.good / totalFeedback) * 100) || 0;
  if (!totalFeedback) {
    return <p className={styles.paragraph}>No FeedBack yet</p>;
  } else {
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
}
