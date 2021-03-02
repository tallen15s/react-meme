import { TextContext } from "context";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTopText(() => event.target.elements[0].value);
    setBottomText(() => event.target.elements[1].value);
  }

  return (
    <main className="ml-60">
      <Form submitHandler={handleSubmit} />
      <QueryClientProvider client={qc}>
        <TextContext.Provider value={{ topText, bottomText }}>
          <Meme />
        </TextContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
};

export default Main;
