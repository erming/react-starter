import React from "react";
import { setFoo, setBar } from "@/actions";
import { Item } from "@/components";

export default ({ foo, bar }) => {
  return (
    <div>
      <Item/>
      <div>Foo: <input value={foo} onInput={e => setFoo(e.target.value)}/></div>
      <div>Bar: <input value={bar} onInput={e => setBar(e.target.value)}/></div>
    </div>
  );
}
