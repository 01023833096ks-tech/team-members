import { Routes, Route } from "react-router-dom";
import Favorites from "./components/favorites";
import TeamMembers from "./components/teamMembers";
import NewMemberForm from "./components/form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TeamMembers />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/form" element={<NewMemberForm />} />
    </Routes>
  );
}

export default App;
