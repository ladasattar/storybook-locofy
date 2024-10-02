import { FunctionComponent } from "react";
import styled from "styled-components";

export type Button1Type = {
  className?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;
};

const PlusIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 600;
  display: inline-block;
  min-width: 92px;
`;
const ButtonRoot = styled.div`
  align-self: stretch;
  box-shadow: var(--shadow-xs);
  border-radius: var(--br-5xs);
  background-color: var(--primary-600);
  border: 1px solid var(--primary-600);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-sm);
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--text-sm-medium-size);
  color: var(--base-white);
  font-family: var(--text-sm-medium);
`;

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  iconTrailing = false,
  iconLeading = true,
}) => {
  return (
    <ButtonRoot className={className}>
      {iconLeading && <PlusIcon alt="" src="/plus.svg" />}
      <Text1>Create coupon</Text1>
      {iconTrailing && <PlusIcon alt="" src="/placeholder3.svg" />}
    </ButtonRoot>
  );
};

export default Button1;
