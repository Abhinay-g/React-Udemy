import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultDialogue = forwardRef(function ResultDialogue(
  { targetTime, timeRemaining, onReset },
  ref
) {
  const dilogRef = useRef();
  let userLost = timeRemaining <= 0;
  let formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  let score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dilogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dilogRef} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score {score}</h2>}
      <p>
        Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped timer in <strong>{formattedRemainingTime} seconds</strong>{" "}
        left
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultDialogue;
