import React from "react";

type Props = {
  targetRef: React.MutableRefObject<null>;
};

const AwesimeTemplate = ({ targetRef }: Props) => {
  return <div ref={targetRef}>AwesimeTemplate</div>;
};

export default AwesimeTemplate;
