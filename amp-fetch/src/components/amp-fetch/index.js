import { Component, createRef, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { forwardRef } from "preact/compat";

export default function AmpFetch({ src, target }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return <TextArea id={target} value={JSON.stringify(data)} />;
}

// const Result = (result) => (
//   <div class="repl-list-item">
//     <div>
//       <a target="_blank" rel="noopener noreferrer" class="repl-link">
//         {result.author}
//       </a>
//       {" - "}
//       <strong>{result.title}</strong>
//     </div>
//   </div>
// );

const TextArea = ({id, value}) => (
  <textarea id={id} disabled style="height:0;width:0;position:absolute;top:-1000px">
    {value}
  </textarea>
);

// const TextAreaWithRef = forwardRef(TextArea);
