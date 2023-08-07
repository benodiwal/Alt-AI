import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PhotoRestoration from "./PhotoRestore/PhotoRestoration";
import PhotoRestore from "./PhotoRestore/Functionality";
import ImageGeneration from "./ImageGeneration/ImageGeneration";
import Dashboard from "./ImageGeneration/Dashboard";
import Assistant from "./Assistant/Assistant";
import AudioToText from "./audioToText/AudioToText";
import Moderation from "./moderation/Moderation";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/restore" element={<PhotoRestoration />}/>
        <Route path="/restore/restore" element={<PhotoRestore />}/>
        <Route path="/generation" element={<ImageGeneration />}/>
        <Route path="/generation/dashboard" element={<Dashboard />}/>
        <Route path="/assistant" element={ <Assistant /> }/>
        <Route path="/audioToText" element={<AudioToText />}/>
        <Route path="/moderation" element={<Moderation />}/>
      </Routes>
    </div>
  )
}

export default App