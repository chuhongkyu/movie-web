import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response)=> response.json())
        .then((json)=> console.log(json))
  }, []);

  return(
    <div>
      {loading ? <h1>Loading...</h1>: null }
    </div>
  )
}

export default App;
