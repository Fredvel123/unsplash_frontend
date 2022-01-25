import styled from "styled-components";
import { LeftOutlined } from '@ant-design/icons';
// colors and fonts
import colors from '../tools/color.json';
import fonts from '../tools/fonts.json';
import { Link } from "react-router-dom";

export const ButtonLeft = styled(LeftOutlined)`
  color: ${colors.graywhite};
  font-size: 55px;
  border: 3px solid ${colors.graywhite};
  border-radius: 25%;
  @media screen and (max-width: 700px ) {
    font-size: 30px;
  }
`
export const Header = styled.header`
  padding: 5vh 0;
  display: flex;
  align-items: center;
  h2{
    margin-left: 1%;
    color: ${colors.white};
    font-family: ${fonts.letter6} ;
  }
`
export const DivBox = styled.div`
  margin: 5vh 10%;
  h3 {
    color: ${colors.white};
    font-weight: 100;
    margin-top: 2vh;
    font-size: 15px;
    font-family: ${fonts.letter4};
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form button {
    color: ${colors.graywhite};
    width: 98.5%;
    text-align: center;
    cursor: pointer;
    margin-top: 3vh;
    padding: 2vh 2%;
    background: ${colors.pink};
    border: none;
  }
  @media screen and (max-width: 550px ) {
    margin: 4vh 2% ;
  }
`
export const LINK = styled(Link)`
  text-align: center;
  color: ${colors.sky};
  font-family: ${fonts.letter2};
`