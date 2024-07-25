"use client";

import { useParams } from "next/navigation";

export default function Example() {
  const params = useParams();
  return <div>{params.id}</div>;
}
