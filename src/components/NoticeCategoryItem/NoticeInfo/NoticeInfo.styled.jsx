import styled from 'styled-components';

export const CardInfoWrapper = styled.div`

    padding: 20px;


`;

export const CardInfoList = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: ${({ theme }) => theme.spacing[2]}px;
`;

export const CardInfoTitle = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
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
`;

export const CardInfoValue = styled.span``;
