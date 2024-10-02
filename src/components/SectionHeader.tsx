import { FunctionComponent } from "react";
import PageHeader from "./PageHeader";
import styled from "styled-components";

export type SectionHeaderType = {
  className?: string;
};

const HeaderSectionRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-sm-medium-size);
  color: var(--gray-600);
  font-family: var(--text-sm-medium);
`;

const SectionHeader: FunctionComponent<SectionHeaderType> = ({
  className = "",
}) => {
  return (
    <HeaderSectionRoot className={className}>
      <PageHeader search breadcrumbs />
    </HeaderSectionRoot>
  );
};

export default SectionHeader;
