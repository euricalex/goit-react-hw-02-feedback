import styled from 'styled-components';

export const StateContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StateButtons = styled.div`
margin-right: 115px;
gap: 20px;
display: flex;
list-style: none;`;
export const StatisticContainer = styled.div`
width: 200px;
margin-right: 170px;`;
export const StatisticDesc = styled.h2`
margin-left: 40px;
font-size: 25px;
font-weight: bold;

`;
export const StateList = styled.ul`
list-style: none;
`;
export const NotificationMess = styled.p`
margin-left: 35px;
`;
export const Button = styled.button`
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
  }
`;
