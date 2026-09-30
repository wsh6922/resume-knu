import Space from "../../utils/Space";

import ContentPadding from "../../layouts/ContentPadding";
import FullHeightPage from "../../layouts/FullHeightPage";
import Subcaption from "./Subcaption";

const Page: React.FC = () => {
  return (
    <>
      <FullHeightPage>
        <ContentPadding>
          <Subcaption>Namuk Kim</Subcaption>
          <Space h={64} />
          <p>
            <b>김남욱</b>
            <br />
            Software Engineer, DevOps Engineer and Graphic Designer
            <br />
            신구대학교 컴퓨터공학과 (졸업)
          </p>
        </ContentPadding>
      </FullHeightPage>
    </>
  );
};

export default Page;
