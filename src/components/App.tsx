import React from 'react';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import styled from 'styled-components';

import { ChartsWithRouter } from './page/Charts';
import { NavWithRouter } from '../components/nav/Nav';
import { DashBoardWithRouter } from '../components/page/DashBoard';

export const App = ({
  match,
  history,
  location,
}: RouteComponentProps): JSX.Element => {
  return (
    <Container className='appContainer'>
      <Main className='main'>
        <Side>
          <Route component={NavWithRouter} />
        </Side>
        <Content>
          <Switch>
            <Route path='/charts' component={ChartsWithRouter} />
            <Route exact path='/' component={DashBoardWithRouter} />
          </Switch>
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 0.1fr 0.3fr 3fr 0.1fr;
  grid-template-rows: 0.2fr 2.6fr 0.1fr;
  gap: 5px 5px;
  grid-template-areas:
    '. . . .'
    '. Main Main .'
    '. . . .';
`;
const Main = styled.div`
  display: grid;
  grid-area: Main;
  grid-template-columns: 15em auto;
  margin: 0;
`;

const Side = styled.div`
  display: grid;
  grid-area: Main;
  grid-column: 1 / 2;
`;

const Content = styled.div`
  display: grid;
  grid-area: Main;
  grid-column: 2 / 3;
`;

export const AppWithRouter = withRouter(App);
