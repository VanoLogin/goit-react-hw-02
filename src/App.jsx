import "./App.css";
import Description from "./components/Description/Description.jsx";
import FeedBack from "./components/FeedBack/FeedBack.jsx";
import Options from "./components/Options/Options.jsx";

import { useState } from "react";
import { useEffect } from "react";

const getLsvalue = () => {
  const valueLS = localStorage.getItem("feedbackValues");
  return valueLS !== null
    ? JSON.parse(valueLS)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [values, setValues] = useState(getLsvalue);

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);

  const handleUpdateFeedback = (e) => {
    if (e.target === e.currentTarget) return;

    const typeOfFeedback = e.target.dataset.option;

    if (typeOfFeedback === "reset") {
      const emptyState = { ...values };
      for (const key in emptyState) {
        emptyState[key] = 0;
      }

      setValues(emptyState);
      return;
    }

    setValues((v) => ({
      ...v,
      [typeOfFeedback]: v[typeOfFeedback] + 1,
    }));
  };

  const totalFeedback = Object.values(values).reduce(
    (sum, value) => sum + value,
    0
  );
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100) || 0;

  return (
    <>
      <div className="container">
        <Description
          title="Sip Happens Café"
          description="Please leave your feedback about our service by selecting one of the
          options below."
        />
        <Options
          options={values}
          handleUpdateFeedback={handleUpdateFeedback}
          totalFeedback={totalFeedback}
        />
        <FeedBack
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </div>
    </>
  );
}
