import styled from 'styled-components';
// colors and fonts
import colors from '../tools/color.json';
import fonts from '../tools/fonts.json';
// icons
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'

export const Input = styled.input`
  width: 95%;
  font-weight: 500;
  font-family: ${fonts.letter4};
  height: 5vh;
  color: #fff;
  border-radius: 10px;
  border: 1px solid ${colors.graywhite};
  background: ${colors.dark};
  transition: ease-in .1s;
  padding: 1vh 1.5%;
  &:focus {
    outline: none;
    border: 2px solid ${colors.pink} ;
  }
  &::placeholder{
    font-size: 15px;
    color: #ffffffa0;
  } 
`

export const Div = styled.div`
  position: relative;
`

export const Label = styled.label`
  color: ${colors.white};
  font-family: ${fonts.letter4};
  margin-left: 0.5%;
`

export const ErrorButton = styled(CloseCircleOutlined )`
  position: absolute;
  top: 10px;
  right: 25px;
  color: red;
  @media screen and (max-width: 700px ) {
    right: 18px;
  }
  @media screen and (max-width: 400px ) {
    right: 10px;
  }
`
export const CheckButton = styled(CheckCircleOutlined )`
  position: absolute;
  top: 10px;
  right: 25px;
  color: green;
  @media screen and (max-width: 700px ) {
    right: 18px;
  }
  @media screen and (max-width: 400px ) {
    right: 10px;
  }
`