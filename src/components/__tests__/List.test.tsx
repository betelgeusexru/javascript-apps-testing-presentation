import renderer from "react-test-renderer";
import { List } from "../List";

describe("List component", () => {
  test("renders correct when empty list provided", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correct when list provided", () => {
    const tree = renderer
      .create(<List list={["apple", "banana", "tomato"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
