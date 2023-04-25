import styled from '@emotion/styled';

export const StatisticsTable = styled.section`
  width: 450px;
  border: 2px solid #000000;
  border-radius: 15px;
  padding: 15px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: content;
`;

export const StatItem = styled.li`
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const StatName = styled.span``;

export const Percentage = styled.span`
  font-weight: 700;
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
`;
