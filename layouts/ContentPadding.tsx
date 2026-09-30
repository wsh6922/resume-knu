import styled from "styled-components";
import { sizeUnder } from "../utils/Layout";

const ContentPadding = styled.div`
  padding: 0 28px;

  ${sizeUnder.md`
    padding: 0 24px;
  `}

  ${sizeUnder.sm`
    padding: 0 16px;
  `}
`;

export default ContentPadding;
