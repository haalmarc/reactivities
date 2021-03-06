import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      console.log(res);

      setActivities(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((a: any) => (
          <List.Item key={a.id}>{a.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
