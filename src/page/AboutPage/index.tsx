import { FC, useEffect, useState } from "react";
export const AboutPage: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  const value = mockHeavy();
  return (
    <div>
      <p>Heavy Value: {value}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

function mockHeavy(): number {
  let value = 0;
  for (let i = 0; i < 1e10; i++) {
    value = Math.random();
  }
  return value;
}
