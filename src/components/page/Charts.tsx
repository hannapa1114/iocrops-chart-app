import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

import EC from '../charts/EC';
import WC from '../charts/WC';
import Co2 from '../charts/Co2';
import HumDef from '../charts/HumDef';
import Air from '../charts/Air';
import Scr from '../charts/Scr';
import Pipe from '../charts/Pipe';
import Iglob from '../charts/Iglob';
import RadSum from '../charts/RadSum';

function Charts(): JSX.Element {
  const isEc = useSelector((state: RootState) => state.changeChart.isEc);
  const isWc = useSelector((state: RootState) => state.changeChart.isWc);
  const isCo2 = useSelector((state: RootState) => state.changeChart.isCo2);
  const isHumDef = useSelector(
    (state: RootState) => state.changeChart.isHumDef,
  );
  const isAir = useSelector((state: RootState) => state.changeChart.isAir);
  const isScr = useSelector((state: RootState) => state.changeChart.isScr);
  const isPipe = useSelector((state: RootState) => state.changeChart.isPipe);
  const isIgolob = useSelector((state: RootState) => state.changeChart.isIglob);
  const isRadSum = useSelector(
    (state: RootState) => state.changeChart.isRadSum,
  );

  return (
    <Container>
      {isEc ? <EC /> : null}
      {isWc ? <WC /> : null}
      {isCo2 ? <Co2 /> : null}
      {isHumDef ? <HumDef /> : null}
      {isAir ? <Air /> : null}
      {isScr ? <Scr /> : null}
      {isPipe ? <Pipe /> : null}
      {isIgolob ? <Iglob /> : null}
      {isRadSum ? <RadSum /> : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
}
`;

const Wrap = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px 5px;
  grid-template-areas:
    'LeftTop RightTop'
    'LeftBot RightBot';
`;

const LeftTop = styled.div`
  display: grid;
  grid-area: LeftTop;

  grid-column: 1 / 2;
`;
const RightTop = styled.div`
  display: grid;
  grid-area: RightTop;

  grid-column: 2 / 3;
`;
const LeftBot = styled.div`
  display: grid;
  grid-area: LeftBot;

  grid-column: 1 / 2;
`;
const RightBot = styled.div`
  display: grid;
  grid-area: RightBot;

  grid-column: 2 / 3;
`;

export const ChartsWithRouter = withRouter(Charts);
