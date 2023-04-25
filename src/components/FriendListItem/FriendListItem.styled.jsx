import styled from '@emotion/styled';

export const FriendCard = styled.li`
  border: 2px solid #000000;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  width: 250px;
  gap: 15px;
  align-items: center;
`;

export const StatusMarker = styled.span`
  align-self: flex-start;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
