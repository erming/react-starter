import { Fragment } from "react";
import { Example } from "@/components";

export default ({ bar }) => {
  return (
    <Fragment>
      <Example>
        <div>{bar}</div>
      </Example>
    </Fragment>
  );
}
