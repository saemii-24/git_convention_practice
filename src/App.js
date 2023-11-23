import axios from "axios";

function App() {
  const response = axios.get("/.netlify/functions/serverless");
  console.log(response.data);

  return <div className="App">야호!</div>;
}

export default App;
