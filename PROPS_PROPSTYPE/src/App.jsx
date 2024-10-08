import Student from "./component/student"; // Import with an uppercase 'S'
import "./App.css"

function App() {
  return (
    <div>
      <Student name="Vigesh" age={22} isMarried={true}/>
      <Student name="Gitanjali" age={23} isMarried={false}/>
    </div>
  );
}

export default App;
