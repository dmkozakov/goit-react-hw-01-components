import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 280px;
  margin: 0 auto;
  padding: 8px;

  background-color: #ffffff;

  border-radius: 12px;
  box-shadow: 10px 11px 19px 5px rgba(64, 42, 64, 0.28);

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  display: block;
  width: 44px;
`;

export const UserName = styled.p`
  font-size: 18px;
`;
