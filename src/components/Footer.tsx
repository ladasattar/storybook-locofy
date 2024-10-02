import { FunctionComponent } from "react";
import styled from "styled-components";
import Badge from "./Badge";

export type FooterType = {
  className?: string;
};

const FooterText = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  display: inline-block;
  min-width: 210px;
  max-width: 100%;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: 0px var(--padding-12xl) 0px var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 675px) {
    gap: var(--gap-base);
  }
`;
const FooterRoot = styled.section`
  align-self: stretch;
  background-color: var(--base-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-29xl) var(--padding-61xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-md-regular-size);
  color: var(--gray-500);
  font-family: var(--text-sm-medium);
  @media screen and (max-width: 750px) {
    gap: var(--gap-13xl);
    padding-left: var(--padding-21xl);
    padding-right: var(--padding-21xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <Content>
        <FooterText>© 2024 EventCHI. All rights reserved.</FooterText>
        <Badge dot="/-dot.svg" text="Platform status" />
      </Content>
    </FooterRoot>
  );
};

export default Footer;
