/**
 *
 * @props tags{string[]}:
 * @returns
 */
function Tag(props: any) {
  return (
    <div>
      {props.tags.map((tag: string) => (
        <button disabled={true}>{tag}</button>
      ))}
    </div>
  );
}
export default Tag;
