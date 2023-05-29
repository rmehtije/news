import { useState } from "react";
import InfoComponent from "./InfoComponent";

function TestComponent({ firstName, lastName, age }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const Color = ({ color }) => <div>Hair color: {color}</div>;

  return (
    <div>
      {show ? (
        <InfoComponent
          height={185}
          weight={95}
          setCount={setCount}
          HairColor={Color}
        />
      ) : null}

      <button onClick={() => setShow(!show)}>Toggle show</button>
      <p>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <p>Fisrtname: {firstName}</p>
      <p>Lastname: {lastName}</p>
      <p>Age: {age}</p>
      <Color color="black" />
    </div>
  );
}

export default TestComponent;
