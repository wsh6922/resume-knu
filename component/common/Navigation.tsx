import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import styled from "styled-components";
import ContentPadding from "../../layouts/ContentPadding";

const TopNavigationHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 100;
`;

const TopNavigationContainer = styled(ContentPadding)`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

const TopNavigationItems = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const TopNavigationItem = styled.a`
  color: rgb(138, 143, 149);
  height: 96px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 auto;
  gap: 4px;
  text-decoration: none;
  &:hover {
    color: black;
    font-weight: 600;
  }
`;

const Language = styled.a`
  height: 96px;
  display: flex;
  -webkit-box-pack: end;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 32px;
  min-width: 0;
`;

const Navigation: React.FC = () => {
  return (
    <TopNavigationHeader>
      <TopNavigationContainer>
        <TopNavigationItems as="nav">
          <Link href="/" passHref>
            <TopNavigationItem>
              <IconHome />
            </TopNavigationItem>
          </Link>
          <Link href="/cv" passHref>
            <TopNavigationItem>이력서</TopNavigationItem>
          </Link>
          <Link href="/voices" passHref>
            <TopNavigationItem>사람들</TopNavigationItem>
          </Link>
          <Link href="/contact" passHref>
            <TopNavigationItem>링크</TopNavigationItem>
          </Link>
          <Link href="/music" passHref>
            <TopNavigationItem>음악</TopNavigationItem>
          </Link>
          <Link href="/language" passHref>
            <Language>언어</Language>
          </Link>
        </TopNavigationItems>
      </TopNavigationContainer>
    </TopNavigationHeader>
  );
};

export default Navigation;
