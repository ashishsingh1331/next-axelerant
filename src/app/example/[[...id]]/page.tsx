export default function page({ params }) {
  console.log(params);
  return <div>hi{params.id?.join(",")}</div>;
}
