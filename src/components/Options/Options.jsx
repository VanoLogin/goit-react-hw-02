import styles from "./options.module.css";

export default function Options({
  options,
  handleUpdateFeedback,
  totalFeedback,
}) {
  return (
    <div className={styles.container}>
      {Object.keys(options).map((option, i) => (
        <button
          key={i}
          data-option={option}
          onClick={() => handleUpdateFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button
          type="button"
          data-option="reset"
          onClick={() => handleUpdateFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
}
