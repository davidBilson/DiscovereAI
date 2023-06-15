import { useEffect } from "react";
import DarkOverlay from "./Components/DarkOverlay/DarkOverlay"
import HeroContainer from "./Components/HeroSection/HeroContainer"
import VideoBg from "./Components/VideoBg/VideoBg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <VideoBg />
      <DarkOverlay />
      <HeroContainer />
    </>
  )
}

export default App