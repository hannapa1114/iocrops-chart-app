import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import {
  DASH,
  EC,
  WC,
  CO2,
  HUMDEF,
  SCR,
  AIR,
  PIPE,
  IGLOB,
  RADSUM,
} from '../../modules/changechart';

function Nav({ history }: RouteComponentProps): JSX.Element {
  const dispatch = useDispatch();

  const handleClickDash = () => {
    dispatch({ type: DASH });
    history.push('/');
  };
  const handleClickEc = () => {
    dispatch({ type: EC });
    history.push('/charts');
  };
  const handleClickWc = () => {
    dispatch({ type: WC });
    history.push('/charts');
  };
  const handleClickCo2 = () => {
    dispatch({ type: CO2 });
    history.push('/charts');
  };
  const handleClickHumDef = () => {
    dispatch({ type: HUMDEF });
    history.push('/charts');
  };
  const handleClickAir = () => {
    dispatch({ type: AIR });
    history.push('/charts');
  };
  const handleClickScr = () => {
    dispatch({ type: SCR });
    history.push('/charts');
  };
  const handleClickPipe = () => {
    dispatch({ type: PIPE });
    history.push('/charts');
  };
  const handleClickIglob = () => {
    dispatch({ type: IGLOB });
    history.push('/charts');
  };
  const handleClickRadSum = () => {
    dispatch({ type: RADSUM });
    history.push('/charts');
  };

  return (
    <ListNav>
      <UL>
        <ListBtn
          onClick={() => {
            handleClickDash();
          }}
        >
          <Span>&nbsp;Dashboard&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickEc();
          }}
        >
          <Span>&nbsp;EC&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickWc();
          }}
        >
          <Span>&nbsp;WC&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickCo2();
          }}
        >
          <Span>&nbsp;CO2air&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickHumDef();
          }}
        >
          <Span>&nbsp;HumDef&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickAir();
          }}
        >
          <Span>&nbsp;Air&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickScr();
          }}
        >
          <Span>&nbsp;Scr&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickPipe();
          }}
        >
          <Span>PipeGrow&amp;Low</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickIglob();
          }}
        >
          <Span>&nbsp;Iglob&nbsp;</Span>
        </ListBtn>
        <ListBtn
          onClick={() => {
            handleClickRadSum();
          }}
        >
          <Span>&nbsp;RadSum&nbsp;</Span>
        </ListBtn>
      </UL>
    </ListNav>
  );
}

const ListNav = styled.div`
  height: 90vh;
  }
`;

const UL = styled.div`
  list-style: none;
  padding: 0.3rem 0 0 0;
`;

const ListBtn = styled.li`
  margin: 2rem 0rem 1.25rem 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 1.2em;
  border-radius: 3px;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: rgba(20, 233, 0, 0.7);
    transition: 1s;
  }
`;
export const NavWithRouter = withRouter(Nav);
