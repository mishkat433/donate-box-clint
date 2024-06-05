// import HeroSlider from "../../components/HeroSlider/HeroSlider";
import DonateOrGet from "../../components/Home/DonateOrGet/DonateOrGet";
import Statistics from "../../components/Home/Statistics/Statistics";


const page = () => {
  return (
    <main className="font-mulish">
      <section className="">
        {/* <HeroSlider /> */}
        <DonateOrGet />
        <Statistics />
      </section>
    </main>
  );
};

export default page;