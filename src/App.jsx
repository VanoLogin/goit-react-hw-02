import "./App.css";
import Description from "./components/Description/Description.jsx";
import FeedBack from "./components/FeedBack/FeedBack.jsx";
import Options from "./components/Options/Options.jsx";

import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  useEffect(() => {
    const storedValues = localStorage.getItem("feedbackValues");
    if (storedValues) {
      setValues(JSON.parse(storedValues));
    }
  }, []);

  const totalFeedback = Object.values(values).reduce(
    (sum, value) => sum + value,
    0
  );
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100) || 0;
  // console.log(totalFeedback);

  const handleUpdateFeedback = (e) => {
    if (e.target === e.currentTarget) return;

    const typeOfFeedback = e.target.dataset.option;

    if (typeOfFeedback === "reset") {
      const emptyState = { ...values };
      for (const key in emptyState) {
        emptyState[key] = 0;
      }

      setValues(emptyState);
      localStorage.setItem("feedbackValues", JSON.stringify(emptyState));
      return;
    }

    setValues((v) => ({
      ...v,
      [typeOfFeedback]: v[typeOfFeedback] + 1,
    }));
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  };

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
