import { Fragment } from "react";
import { Example } from "@/components";

export default ({ foo }) => {
  return (
    <Fragment>
      <Example>
        <div>{foo}</div>
      </Example>
    </Fragment>
  );
}
