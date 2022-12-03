import HeartSvg from "../../assets/icons/heart.svg";
import reactJsPng from "../../assets/images/reactjs.png";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <p>
        Welcome to webpack-ts-boilerplate repo! <HeartSvg />
      </p>
      <p>The app is running in port {process.env.PORT}</p>
      <img src={reactJsPng} width="100px" alt="heart" />
    </HomeWrapper>
  );
};

export default Home;
