import axios from "axios";

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get("/.netlify/functions/serverless");
      const data = response.data;

      console.log(data);
    } catch (error) {
      console.error("에러 발생: " + error);
    }
  };
  fetchData();
  return <div className="App">야호!</div>;
}

export default App;
