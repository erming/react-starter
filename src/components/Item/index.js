import Item from "./Item";
import { connect } from "react-redux";

const mapState = (state) => ({
  foo: state.example.foo,
  bar: state.example.bar
});

export default connect(mapState)(Item);
