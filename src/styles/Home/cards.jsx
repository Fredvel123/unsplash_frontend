import styled from 'styled-components';
// icons
import {PlusCircleOutlined } from '@ant-design/icons';

export const Image = styled.div`
  position: relative;
  img {
    width: 100%;
  margin: 0 auto;
  break-inside: avoid;
  transition: .3s;
  }
`
export const IconPlus = styled(PlusCircleOutlined)` 
  opacity: 0;
  /* display: ${({state}) => state ? "none" : "block"} ; */
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  display: flex;
  top: 5%;
  left: 4%;
  transition: ease-in .3s;
  &:hover {
    opacity: 1;
    transform: scale(1.5);
  }
`
export const CardsImages = styled.div`
  columns: 5 320px;
  margin: 0 15px;
  column-gap: 10px;
  display: inline-block;
  text-align: center;
`