import {BrowserRouter, Routes, Route} from "react-router-dom"
import Favorites from "./components/favorites"

import TeamMembers from "./components/teamMembers"
import { TeamProvider } from "./components/contexts/teamMembersContext"
function App() {
 

  return (
    <TeamProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<TeamMembers />} />
            <Route path="/team-members"  element={<TeamMembers />} />
            <Route path="/favorites"  element={<Favorites />} />
          </Routes>
        </BrowserRouter>
    
    </TeamProvider>
  )
}

export default App
