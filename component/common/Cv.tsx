import ContentPadding from "../../layouts/ContentPadding";
import Subcaption, { Subsubcaption } from "./Subcaption";
import Caption from "./Caption";
import Space from "../../utils/Space";
import Article from "./Article";

const Cv: React.FC = () => {
  return (
    <>
      <ContentPadding>
        <Subcaption>Programming</Subcaption>
        <Caption content={"지금까지 연 중괄호 수는\n기억 못하고 있습니다"} />
        <Space h={64} />

        <Article>
          <p></p>
        </Article>

        <Article>
          <Subsubcaption>Experiences</Subsubcaption>
        </Article>
      </ContentPadding>
    </>
  );
};

export default Cv;
