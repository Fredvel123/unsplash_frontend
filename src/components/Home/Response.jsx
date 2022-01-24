import React from 'react';
import styled from 'styled-components';
// icons
import { CloseCircleOutlined } from '@ant-design/icons'

// styles components code
const Div = styled.div`
  transform: ${({state}) => state ? 'translateX(0)': 'translateX(-500%)' };
  background: green;
  position: fixed;
  top: 5vh;
  left: 15%;
  width: 70%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in .3s;
`
const ButtonClose = styled(CloseCircleOutlined)` 
  position: absolute;
  top: 1vh ;
  right: 2%;
  font-size: 30px ;
`

function Response({ state, setState }) {
  const CloseWindow = () => {
    setState(!state);
  }
  return (
    <Div state={state.added}>
      <ButtonClose onClick={CloseWindow} />
      <h2>{state.message}</h2>
    </Div>
  )
}

export default Response;
