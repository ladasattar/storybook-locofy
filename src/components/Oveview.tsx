import { FunctionComponent } from "react";
import SectionHeader from "./SectionHeader";
import MetricGroup from "./MetricGroup";
import styled from "styled-components";
import Footer from "./Footer";

export type OveviewType = {
  className?: string;
};

const Main = styled.section`
  align-self: stretch;
  background-color: var(--gray-25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-29xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-base);
  }
`;
const OveviewRoot = styled.div`
  width: 1440px;
  background-color: var(--base-white);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const Oveview: FunctionComponent<OveviewType> = ({ className = "" }) => {
  return (
    <OveviewRoot className={className}>
      <Main>
        <SectionHeader />
        <MetricGroup />
      </Main>
      <Footer />
    </OveviewRoot>
  );
};

export default Oveview;
