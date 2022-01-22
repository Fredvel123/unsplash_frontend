import styled from "styled-components";
import { LeftOutlined } from '@ant-design/icons';
// colors and fonts
import colors from '../tools/color.json';
import fonts from '../tools/fonts.json';

export const ButtonLeft = styled(LeftOutlined)`
  color: ${colors.gray};
  font-size: 55px;
  border: 3px solid ${colors.gray};
  border-radius: 25%;
`
export const Header = styled.header`
  padding: 5vh 0;
  background: ${colors.darkBlue};
  display: flex;
  align-items: center;
  h2{
    margin-left: 1%;
    color: ${colors.white};
    font-family: ${fonts.letter2} ;
  }
`
