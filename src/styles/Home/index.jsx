import styled from 'styled-components';
// colors and fonts
import colors from '../tools/color.json';
import fonts from '../tools/fonts.json';

export const Header = styled.header`
  height: 10vh;
  display: flex;
  margin-bottom: 2vh;
  align-items: center;
  justify-content: space-between;
  background: ${colors.darkBlue};
  h2 {
    font-family: ${fonts.letter3};
    color: ${colors.graywhite};
    font-size: 25px;
    margin-left: 5%;
  }
  nav {
    /* width: 25%; */
    display: flex;
    h3 {
      font-family: ${fonts.letter6};
      color: ${colors.graywhite};
      font-size: 20px;
      margin-right: 25px;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
    }
    nav h3{
      font-size: 16px; 
      margin-right: 10px ;
    }
  }
`