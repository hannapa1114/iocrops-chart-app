import React from 'react';
import styled from 'styled-components';

function Toggle(): JSX.Element {
  return (
    <FavWrap className='favWrap'>
      <Fav id='favToggle' type='checkbox'></Fav>
      <FavLB htmlFor='favToggle'></FavLB>
    </FavWrap>
  );
}

const FavWrap = styled.div`
  margin: 0 0 0.89em 0em;
`;
const Fav = styled.input`
  display: none;
  &:checked + label {
    background-color: green;
    border-radius: 14px;
  }
  &:checked + label:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
    border-radius: 20px;
  }
  &:focus {
    outline: none;
  }
`;
const FavLB = styled.label`
  cursor: pointer;

  display: flex;
  position: relative;
  width: 42px;
  height: 24px;
  background-color: lightgray;
  border-radius: 20px;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    left: 2px;
    bottom: 2px;
    position: absolute;
    background-color: #fff;
    transition: all 0.4s ease;
    border-radius: 100px;
  }
`;

export default Toggle;
