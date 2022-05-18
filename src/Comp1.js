export default function Comp(props) {
  return (
    <div>
      <h2>My name is {props.name}</h2>
      <p>I am {props.age}</p>
      <b>{props.comment}</b>
      <img src={props.image} />
    </div>
  );
}
