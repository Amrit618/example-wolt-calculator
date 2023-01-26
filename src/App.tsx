import { useState } from "react";
import { calculate } from "./Functions";
import "./styles.css";

type InputValuesType = {
  cartValue: React.HTMLInputTypeAttribute;
  distance: React.HTMLInputTypeAttribute;
  items: React.HTMLInputTypeAttribute;
  dateTime: React.HTMLInputTypeAttribute;
};

export default function App() {
  const [charge, setCharge] = useState<number>(0);

  const [inputValues, setInputValues] = useState<InputValuesType>({
    cartValue: "",
    distance: "",
    items: "",
    dateTime: ""
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { cartValue, distance, items, dateTime } = inputValues;

    const result = calculate(
      Number(cartValue),
      Number(distance),
      Number(items),
      dateTime
    );

    setCharge(Number(result));
  };

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <div className="inputfield">
          <div className="inputfield-title">Cart Value</div>

          <div className="inputfield-input">
            <input
              type="text"
              value={inputValues.cartValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValues((prev: any) => {
                  return {
                    ...prev,
                    cartValue: e.target.value
                  };
                });
              }}
            />
          </div>

          <div className="inputfield-symbol">&euro;</div>
        </div>

        <div className="inputfield">
          <div className="inputfield-title">Delivery Distance</div>

          <div
            className="inputfield-input"
            style={{ position: "relative", left: -55 }}
          >
            <input
              type="text"
              value={inputValues.distance}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValues((prev: any) => {
                  return {
                    ...prev,
                    distance: e.target.value
                  };
                });
              }}
            />
          </div>

          <div
            className="inputfield-symbol"
            style={{ position: "relative", left: -55 }}
          >
            m
          </div>
        </div>

        <div className="inputfield">
          <div className="inputfield-title">No. of Items</div>

          <div
            className="inputfield-input"
            style={{ position: "relative", left: -13 }}
          >
            <input
              type="text"
              value={inputValues.items}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValues((prev: any) => {
                  return {
                    ...prev,
                    items: e.target.value
                  };
                });
              }}
            />
          </div>
        </div>

        <div className="inputfield">
          <div className="inputfield-title">Time & Date</div>

          <div
            className="inputfield-input"
            style={{ position: "relative", left: -12 }}
          >
            <input
              type="datetime-local"
              value={inputValues.dateTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValues((prev: any) => {
                  return {
                    ...prev,
                    dateTime: e.target.value
                  };
                });
              }}
            />
          </div>

          <div className="inputfield-symbol"></div>
        </div>

        <button type="submit">Calculate delivery price</button>
      </form>

      <div className="output">
        Delivery price: <span>{charge} &euro;</span>
      </div>
    </div>
  );
}

