"use client";

export default function error({ error, reset }: any) {
  return (
    <div>
      {error.message}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
