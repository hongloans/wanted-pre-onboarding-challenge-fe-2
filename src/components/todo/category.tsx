/**
 *
 * @props category: string
 * @returns  <div> element
 */
function Category(props: any) {
  return <div style={{ color: "gray", backgroundColor: "lightgray" }}>{props.category}</div>;
}
export default Category;
