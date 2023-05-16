import dynamic from "next/dynamic";
import React from "react";

const NoSSR = (Component: React.FunctionComponent) => dynamic(
    () => Promise.resolve(Component),
    { ssr: false }
)

export default NoSSR