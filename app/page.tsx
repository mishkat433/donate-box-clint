import HeroSlider from "../components/Common/Header/HeroSlider/HeroSlider";
import DonateOrGet from "../components/Home/DonateOrGet/DonateOrGet";
import Statistics from "../components/Home/Statistics/Statistics";
// import Header from './../components/Common/Header/Header';



export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <HeroSlider />
      <DonateOrGet />
      <Statistics />
    </main>
  )
}
