
import {Route, Routes} from "react-router-dom";
import Navbar from "./modules/Navbar";
import Header from "./modules/Header";
import {Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets} from "./pages";


const App = () => {
  return(
    <div className="flex">
      <Navbar/>
      <div className="w-[75%] bg-[#F7F8FC]">
        <Header/>
        <Routes>
          <Route path="/" element={<Overview/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/ideas" element={<Ideas/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/agents" element={<Agents/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App