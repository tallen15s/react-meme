import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => {
  // `event` is coming from the child b/c of `onSubmit`
  function handleSubmit(event) {
    event.preventDefault();

    // TODO: Pass these values into Meme to show up on the picture
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
  }

  return (
    <main>
      {/* Passing props */}
      <Form submitHandler={handleSubmit} />
      <QueryClientProvider client={qc}>
        <Meme />
      </QueryClientProvider>
    </main>
  );
};

export default Main;
