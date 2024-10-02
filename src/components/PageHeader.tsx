import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import BreadcrumbButtonBase from "./BreadcrumbButtonBase";
import Button1 from "./Button1";

export type PageHeaderType = {
  className?: string;
  search?: boolean;
  breadcrumbs?: boolean;
};

const HomeLineIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BreadcrumbButtonBase1 = styled.div`
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs);
`;
const ChevronRightIcon = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const BreadcrumbButtonBase2 = styled.div`
  border-radius: var(--br-7xs);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-6xs);
`;
const ChevronRightIcon1 = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Breadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Text2 = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 38px;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
    line-height: 30px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 23px;
  }
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--gray-600);
`;
const TextAndSupportingText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  min-width: 682px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const PlaceholderIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Text3 = styled.div`
  position: relative;
  font-size: var(--text-sm-medium-size);
  line-height: 20px;
  font-weight: 600;
  font-family: var(--text-sm-medium);
  color: var(--gray-600);
  text-align: left;
`;
const Button2 = styled.div`
  border-radius: var(--br-5xs);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-mini);
  gap: var(--gap-5xs);
`;
const Text4 = styled.div`
  position: relative;
  font-size: var(--text-sm-medium-size);
  line-height: 20px;
  font-weight: 600;
  font-family: var(--text-sm-medium);
  color: var(--primary-700);
  text-align: left;
`;
const Button3 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--primary-50);
  border: 1px solid var(--primary-50);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-mini);
  gap: var(--gap-5xs);
`;
const Text5 = styled.div`
  position: relative;
  font-size: var(--text-sm-medium-size);
  line-height: 20px;
  font-weight: 600;
  font-family: var(--text-sm-medium);
  color: var(--gray-700);
  text-align: left;
`;
const Button4 = styled.div`
  align-self: stretch;
  box-shadow: var(--shadow-xs);
  border-radius: var(--br-5xs);
  background-color: var(--base-white);
  border: 1px solid var(--gray-300);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-mini);
  gap: var(--gap-5xs);
`;
const Actions = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Label = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: none;
`;
const Text6 = styled.div`
  position: relative;
  line-height: 24px;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const XCloseIcon = styled.img`
  width: 10px;
  height: 10px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Close1 = styled.div`
  border-radius: var(--br-10xs);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs);
`;
const Input1 = styled.div`
  align-self: stretch;
  flex: 1;
  box-shadow: var(--shadow-xs);
  border-radius: var(--br-5xs);
  background-color: var(--base-white);
  border: 1px solid var(--gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-smi);
  gap: var(--gap-5xs);
  font-size: var(--text-md-regular-size);
  color: var(--gray-500);
`;
const InputWithLabel = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const HintText = styled.div`
  position: relative;
  line-height: 20px;
  color: var(--gray-600);
  display: none;
`;
const InputDropdown = styled.div`
  height: 44px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--text-sm-medium-size);
  color: var(--gray-700);
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
  font-size: var(--display-sm-semibold-size);
  color: var(--gray-900);
`;
const DividerIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const PageHeaderRoot = styled.div`
  width: 1216px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--text-sm-medium-size);
  color: var(--gray-600);
  font-family: var(--text-sm-medium);
`;

const PageHeader: FunctionComponent<PageHeaderType> = ({
  className = "",
  search = false,
  breadcrumbs = false,
}) => {
  const onActionsClick = useCallback(() => {
    // Please sync "Create Configure" to the project
  }, []);

  return (
    <PageHeaderRoot className={className}>
      {breadcrumbs && (
        <Breadcrumbs>
          <Tabs>
            <BreadcrumbButtonBase1>
              <HomeLineIcon alt="" src="/homeline.svg" />
            </BreadcrumbButtonBase1>
            <ChevronRightIcon alt="" src="/chevronright.svg" />
            <BreadcrumbButtonBase
              text="Settings"
              propBackgroundColor="unset"
              propFontWeight="500"
              propColor="#475467"
            />
            <ChevronRightIcon alt="" src="/chevronright.svg" />
            <BreadcrumbButtonBase
              text="..."
              propBackgroundColor="unset"
              propFontWeight="500"
              propColor="#475467"
            />
            <ChevronRightIcon alt="" src="/chevronright.svg" />
            <BreadcrumbButtonBase2>
              <Text1>Another link</Text1>
            </BreadcrumbButtonBase2>
            <ChevronRightIcon1 alt="" src="/chevronright.svg" />
            <BreadcrumbButtonBase text="Team" />
          </Tabs>
        </Breadcrumbs>
      )}
      <Content1>
        <TextAndSupportingText>
          <Text2>Coupons</Text2>
          <SupportingText>
            Your current sales summary and activity.
          </SupportingText>
        </TextAndSupportingText>
        <Actions onClick={onActionsClick}>
          <Button2>
            <PlaceholderIcon alt="" src="/placeholder.svg" />
            <Text3>Tertiary</Text3>
            <PlaceholderIcon alt="" src="/placeholder.svg" />
          </Button2>
          <Button3>
            <PlaceholderIcon alt="" src="/placeholder1.svg" />
            <Text4>Secondary</Text4>
            <PlaceholderIcon alt="" src="/placeholder1.svg" />
          </Button3>
          <Button4>
            <PlaceholderIcon alt="" src="/placeholder2.svg" />
            <Text5>Secondary</Text5>
            <PlaceholderIcon alt="" src="/placeholder2.svg" />
          </Button4>
          <Button1 iconTrailing iconLeading />
        </Actions>
        {search && (
          <InputDropdown>
            <InputWithLabel>
              <Label>Search</Label>
              <Input1>
                <Content>
                  <HomeLineIcon alt="" src="/searchlg.svg" />
                  <Text6>Search</Text6>
                </Content>
                <Close1>
                  <XCloseIcon alt="" src="/xclose.svg" />
                </Close1>
              </Input1>
            </InputWithLabel>
            <HintText>This is a hint text to help user.</HintText>
          </InputDropdown>
        )}
      </Content1>
      <DividerIcon loading="lazy" alt="" src="/divider.svg" />
    </PageHeaderRoot>
  );
};

export default PageHeader;
