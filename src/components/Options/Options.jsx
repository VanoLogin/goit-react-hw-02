import styles from "./options.module.css";

export default function Options({
  options,
  handleUpdateFeedback,
  totalFeedback,
}) {
  return (
    <div className={styles.container} onClick={handleUpdateFeedback}>
      {Object.keys(options).map((option, i) => (
        <button key={i} data-option={option} type="button">
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button type="button" data-option="reset">
          Reset
        </button>
      )}
    </div>
  );
}
