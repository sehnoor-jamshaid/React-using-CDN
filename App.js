import React from "react";
import ReactDOM from "react-dom";


// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"This is headding");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement("div",{id:"div_child"},
[React.createElement("h1",{id:"heading",key:"key0"},
"Nested Example"
),React.createElement("h2",{id:"heading2",key:"key1"},
"Nested2 Example"
)],[React.createElement("h1",{id:"heading",key:"key0"},
"Example New"
),React.createElement("h2",{id:"heading2",key:"key1"},
"Nested2 Example"
)],
React.createElement("div",{id:"div_child"},
[React.createElement("h1",{id:"heading",key:"key2"},
"Nested Example"
),React.createElement("h2",{id:"heading2",key:"key3"},
"Nested2 Example"
)],[React.createElement("h1",{id:"heading",key:"key4"},
"Nested Example"
),React.createElement("h2",{id:"heading2",key:"key5"},
"Nested2 Example"
)]))

root.render(parent) 