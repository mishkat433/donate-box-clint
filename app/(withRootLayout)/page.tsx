import DonateOrGet from "../../components/Home/DonateOrGet/DonateOrGet";
import HeroSlider from "../../components/Home/HeroSlider/HeroSlider";
import Statistics from "../../components/Home/Statistics/Statistics";


const page = () => {
  return (
    <main className="font-mulish">
      <HeroSlider />
      <DonateOrGet />
      <Statistics />
    </main>
  );
};

export default page;