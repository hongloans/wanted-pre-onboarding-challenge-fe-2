/**
 * Create button components
 * @props {function} onClick - onClick event handler
 * @props {string} type - string on the button
 * @props {string} id - id of the todo
 *
 * @returns \<button> element
 */
function Button(props: any) {
  const style = props.type === "delete" ? { color: "red" } : { color: "black" };
  return (
    <button onClick={props.onClick} style={style} id={props.id}>
      {props.type}
    </button>
  );
}

export default Button;
