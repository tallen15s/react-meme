import Meme from "";
import { QueryClient, QueryClientProvider } from "react-query";
const qc = new QueryClient();

console.log(qc, QueryClientProvider);

const Main = () => <main></main>;

export default Main;
