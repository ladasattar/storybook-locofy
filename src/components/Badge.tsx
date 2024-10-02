import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type BadgeType = {
  className?: string;
  dot?: string;
  text?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const DotIcon = styled.img<{
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
}>`height: 8px;
  width: 8px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  height: ${(p) => p.propHeight1}
  width: ${(p) => p.propWidth}
`;
const Text1 = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const BadgeRoot = styled.div<{
  propHeight?: CSSProperties["height"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
}>`height: 28px;
  border-radius: var(--br-base);
  border: 1.5px solid var(--success-600);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs) var(--padding-11xs) var(--padding-3xs);
  gap: var(--gap-7xs);
  text-align: center;
  font-size: var(--text-sm-medium-size);
  color: var(--success-700);
  font-family: var(--text-sm-medium);
  height: ${(p) => p.propHeight}
  border: ${(p) => p.propBorder}
  background-color: ${(p) => p.propBackgroundColor}
  mix-blend-mode: ${(p) => p.propMixBlendMode}
`;

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  propHeight,
  propBorder,
  propBackgroundColor,
  propMixBlendMode,
  dot,
  propHeight1,
  propWidth,
  text,
}) => {
  return (
    <BadgeRoot
      propHeight={propHeight}
      propBorder={propBorder}
      propBackgroundColor={propBackgroundColor}
      propMixBlendMode={propMixBlendMode}
      className={className}
    >
      <DotIcon
        loading="lazy"
        alt=""
        src={dot}
        propHeight1={propHeight1}
        propWidth={propWidth}
      />
      <Text1>{text}</Text1>
    </BadgeRoot>
  );
};

export default Badge;
