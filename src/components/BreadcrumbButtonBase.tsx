import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type BreadcrumbButtonBaseType = {
  className?: string;
  text?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
};

const Text1 = styled.div<{
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
}>`position: relative;
  line-height: 20px;
  font-weight: 600;
  font-weight: ${(p) => p.propFontWeight}
  color: ${(p) => p.propColor}
`;
const BreadcrumbButtonBaseRoot = styled.div<{
  propBackgroundColor?: CSSProperties["backgroundColor"];
}>`
  border-radius: var(--br-7xs);
  background-color: var(--gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-5xs);
  text-align: left;
  font-size: var(--text-sm-medium-size);
  color: var(--gray-700);
  font-family: var(--text-sm-medium);
  background-color: ${(p) => p.propBackgroundColor};
`;

const BreadcrumbButtonBase: FunctionComponent<BreadcrumbButtonBaseType> = ({
  className = "",
  text,
  propBackgroundColor,
  propFontWeight,
  propColor,
}) => {
  return (
    <BreadcrumbButtonBaseRoot
      propBackgroundColor={propBackgroundColor}
      className={className}
    >
      <Text1 propFontWeight={propFontWeight} propColor={propColor}>
        {text}
      </Text1>
    </BreadcrumbButtonBaseRoot>
  );
};

export default BreadcrumbButtonBase;
