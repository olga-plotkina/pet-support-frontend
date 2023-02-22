import styled from 'styled-components';

export const CardInfoWrapper = styled.div`
  padding-left: 20px;
  padding-right: 29px;

  @media (min-width: 768px) {
    padding-right: 85px;
  }
  @media (min-width: 1280px) {
    padding-right: 37px;
  }
`;

export const CardInfoList = styled.div`
  list-style: none;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: ${({ theme }) => theme.spacing[3]}px;
`;

export const CardInfoTitle = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.black};
`;

export const CardInfoField = styled.li`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.black};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardInfoName = styled.span`
  margin-right: 40px;
`;
export const CardInfoValue = styled.span``;
