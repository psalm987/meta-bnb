import React from "react";

import IndexLandingSection from "../Sections/indexLandingSection";
import OrgsSection from "../Sections/orgsSection";
import InspirationSection from "../Sections/inspirationSection";
import NFTSection from "../Sections/nftSection";

const IndexPage = () => {
  return (
    <React.Fragment>
      <IndexLandingSection />
      <OrgsSection />
      <InspirationSection />
      <NFTSection />
    </React.Fragment>
  );
};

export default IndexPage;
