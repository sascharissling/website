import { Helmet } from "react-helmet";
import sascha from "../assets/sascha.jpg";

const Meta = () => {
  return (
    <Helmet>
      <title>Sascha Rissling</title>
      <meta
        name="description"
        content="Sascha Rissling - Freelance Frontend Developer"
      />
      <meta
        name="keywords"
        content="react, typescript, freelance web developer"
      />
      <meta name="author" content="Sascha Rissling" />
      <meta
        property="og:title"
        content="Sascha Rissling - Freelance Frontend Developer"
      />
      <meta
        property="og:description"
        content="Sascha Rissling - Freelance Frontend Developer"
      />
      <meta property="og:image" content={sascha} />
      <meta property="og:url" content="https://rissling.dev" />
    </Helmet>
  );
};

export default Meta;
