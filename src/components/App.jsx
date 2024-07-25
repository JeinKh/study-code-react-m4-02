import { fetchNews } from "../services/api";
import UseMemoExample from "./UseMemoExample/UseMemoExample";
import UseRefExample from "./UseRefExample/UseRefExample";
import UseMemoExample from "./UseContextExample/UseContextExample";

const App = () => {
  return (
    <div>
      <UseMemoExample />
      <UseRefExample />
      <UseContextExample />
    </div>
  );
};

export default App;
