import { FunctionComponent } from "react";
import styled from "styled-components";
import MetricItem from "./MetricItem";

export type MetricGroupType = {
  className?: string;
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
const ArrowUp = styled.input`
  margin: 0;
  height: 12px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const Badge1 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--success-50);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-3xs) var(--padding-11xs)
    var(--padding-5xs);
  gap: var(--gap-9xs);
  mix-blend-mode: multiply;
`;
const BadgeWrap = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
  text-align: center;
  font-size: var(--text-sm-medium-size);
  color: var(--success-700);
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
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
`;
const MetricItem1 = styled.div`
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
`;
const SectionRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0px var(--padding-93xl);
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--text-sm-medium-size);
  color: var(--gray-600);
  font-family: var(--text-sm-medium);
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-37xl);
    padding-right: var(--padding-37xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const MetricGroup: FunctionComponent<MetricGroupType> = ({
  className = "",
}) => {
  return (
    <SectionRoot className={className}>
      <MetricItem1>
        <Heading>Total coupons</Heading>
        <NumberAndBadge>
          <Number1>1,000</Number1>
          <BadgeWrap>
            <Badge1>
              <ArrowUp type="checkbox" />
              <Text1>100%</Text1>
            </Badge1>
          </BadgeWrap>
        </NumberAndBadge>
        <SupportingText>Views 24 hours</SupportingText>
        <Dropdown>
          <DotsVerticalIcon alt="" src="/dotsvertical.svg" />
        </Dropdown>
      </MetricItem1>
      <MetricItem1>
        <Heading>Redeemed</Heading>
        <NumberAndBadge>
          <Number1>545</Number1>
          <BadgeWrap>
            <Badge1>
              <ArrowUp type="checkbox" />
              <Text1>100%</Text1>
            </Badge1>
          </BadgeWrap>
        </NumberAndBadge>
        <SupportingText>Views 24 hours</SupportingText>
        <Dropdown>
          <DotsVerticalIcon alt="" src="/dotsvertical.svg" />
        </Dropdown>
      </MetricItem1>
      <MetricItem1>
        <Heading>Unredeemed</Heading>
        <NumberAndBadge>
          <Number1>455</Number1>
          <BadgeWrap>
            <Badge1>
              <ArrowUp type="checkbox" />
              <Text1>100%</Text1>
            </Badge1>
          </BadgeWrap>
        </NumberAndBadge>
        <SupportingText>Views 24 hours</SupportingText>
        <Dropdown>
          <DotsVerticalIcon alt="" src="/dotsvertical.svg" />
        </Dropdown>
      </MetricItem1>
      <MetricItem dropdownIcon />
    </SectionRoot>
  );
};

export default MetricGroup;
