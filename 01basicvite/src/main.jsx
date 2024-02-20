import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to visit google",
};

function MyApp() {
    return <div>Custom App</div>;
}

const aReactElment = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "click to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
    // MyApp()
    // <MyApp />
    // aReactElment
);
