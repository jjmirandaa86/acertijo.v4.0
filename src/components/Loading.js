import { Spinner } from "react-bootstrap";

const Loading = () => {

  return (
    <>
      <Spinner animation="grow" variant="warning"></Spinner>
      <Spinner animation="grow" variant="primary"></Spinner>
      <Spinner animation="grow" variant="dark"></Spinner>
    </ >
  );
};

export default Loading;