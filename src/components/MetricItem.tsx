import { FunctionComponent } from "react";
import styled from "styled-components";
import Badge from "./Badge";

export type MetricItemType = {
  className?: string;
  dropdownIcon?: boolean;
};

const Heading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const Number1 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-10xl);
    line-height: 35px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 26px;
  }
`;
const BadgeWrap = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
`;
const NumberAndBadge = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--display-md-semibold-size);
  color: var(--gray-900);
`;
const SupportingText = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: none;
  z-index: 2;
`;
const DotsVerticalIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Dropdown = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
`;
const MetricItemRoot = styled.div`
  flex: 1;
  box-shadow: var(--shadow-sm);
  border-radius: var(--br-xs);
  background-color: var(--base-white);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) var(--padding-4xl);
  position: relative;
  gap: var(--gap-5xs);
  min-width: 214px;
  max-width: 286px;
  min-height: 120px;
  text-align: left;
  font-size: var(--text-sm-medium-size);
  color: var(--gray-600);
  font-family: var(--text-sm-medium);
`;

const MetricItem: FunctionComponent<MetricItemType> = ({
  className = "",
  dropdownIcon = false,
}) => {
  return (
    <MetricItemRoot className={className}>
      <Heading>Fees</Heading>
      <NumberAndBadge>
        <Number1>$200,00</Number1>
        <BadgeWrap>
          <Badge
            propHeight="unset"
            propBorder="unset"
            propBackgroundColor="#ecfdf3"
            propMixBlendMode="multiply"
            dot="/arrowup-3.svg"
            propHeight1="12px"
            propWidth="12px"
            text="100%"
          />
        </BadgeWrap>
      </NumberAndBadge>
      <SupportingText>Views 24 hours</SupportingText>
      {dropdownIcon && (
        <Dropdown>
          <DotsVerticalIcon alt="" src="/dotsvertical.svg" />
        </Dropdown>
      )}
    </MetricItemRoot>
  );
};

export default MetricItem;
