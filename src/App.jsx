import "./App.css";
import Description from "./components/Description/Description.jsx";
import FeedBack from "./components/FeedBack/FeedBack.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";
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

  const handleUpdateFeedback = (typeOfFeedback) => {
    if (typeOfFeedback === "reset") {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
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
        {totalFeedback === 0 ? (
          <Notification message="No FeedBack yet"></Notification>
        ) : (
          <FeedBack
            values={values}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
      </div>
    </>
  );
}
