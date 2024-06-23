import DonateOrGet from "../../components/Home/DonateOrGet/DonateOrGet";
import Gallery from "../../components/Home/Gallery/Gallery";
import HeroSlider from "../../components/Home/HeroSlider/HeroSlider";
import Statistics from "../../components/Home/Statistics/Statistics";


const page = () => {
  return (
    <main className="font-mulish">
      <HeroSlider />
      <DonateOrGet />
      <Statistics />
      <Gallery/>
    </main>
  );
};

export default page;