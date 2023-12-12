import { Helmet } from "react-helmet";
import sascha from "../assets/sascha.jpg";

const Meta = () => {
  return (
    <Helmet>
      <meta property="og:image" content={sascha} />
      <meta property="og:url" content="https://rissling.dev" />
    </Helmet>
  );
};

export default Meta;
