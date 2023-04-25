import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 250px;
  border: 2px solid #000000;
  border-radius: 15px;
  padding: 15px;
`;

export const Description = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 20px;
`;

export const Location = styled.p`
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  max-width: 100%;
  list-style: none;
  flex-wrap: wrap;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
