import Banner from "../../Component/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>WanderWaveTravel-Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
