import { useRef, useState } from "react";
import ResultDialogue from "./ResultDialogue";
export default function TimerChallenge({ title, targetTime }) {
  let [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  let [isTimeStarted, setIsTimerStarted] = useState(false);
  let timer = useRef();
  let dialogRef = useRef();
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining < 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }
  const handleClick = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 10);
    }, 10);
  };
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  const handleStopClick = () => {
    dialogRef.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultDialogue
        ref={dialogRef}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStopClick : handleClick}>
            {isTimerActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running ...." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
