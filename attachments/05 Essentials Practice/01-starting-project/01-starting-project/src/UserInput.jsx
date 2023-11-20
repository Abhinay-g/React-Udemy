
import {inputItemsKeyMap} from './App'
export default function UserInput({ getReturns,inputState }) {
 
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={inputState[inputItemsKeyMap.INITIAL_INVESTMENT]}
            onChange={(event) =>
              getReturns(
                inputItemsKeyMap.INITIAL_INVESTMENT,
                +event.target.value
              )
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={inputState[inputItemsKeyMap.ANNUAL_INVESTMENT]}
            onChange={(event) =>
              getReturns(
                inputItemsKeyMap.ANNUAL_INVESTMENT,
                +event.target.value
              )
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Resturns</label>
          <input
            type="number"
            required
            value={inputState[inputItemsKeyMap.EXPECTED_RETURNS]}
            onChange={(event) =>
              getReturns(
                inputItemsKeyMap.EXPECTED_RETURNS,
                +event.target.value
              )
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={inputState[inputItemsKeyMap.DURATION]}
            onChange={(event) =>
              getReturns(
                inputItemsKeyMap.DURATION,
                +event.target.value
              )
            }
          />
        </p>
      </div>
    </section>
  );
}
