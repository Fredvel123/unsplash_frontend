import styled from 'styled-components';
// colors and fonts
import colors from '../tools/color.json';
import fonts from '../tools/fonts.json';
// react router


export const StartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin:5vh 0;
    font-size: 40px;
    color: ${colors.graywhite};
    font-family: ${fonts.letter3};
  }
  p {
    font-family: ${fonts.letter6};
    color: ${colors.graywhite};
    text-align: center;
    width: 45%;
    font-size: 25px;
  }
`

export const Nav = styled.nav`
  margin-top: 15vh;
  width: 50%;
  display: flex;
  justify-content: space-around;
  a {
    border-radius: 50px;
    transition: ease-in 0.2s;
    font-family: ${fonts.letter2};
    background: ${colors.pink};
    color: ${colors.white};
    font-size: 30px;
    padding: 2vh 5%;
    &:hover{
      background: ${colors.sky};
    }
  }
`