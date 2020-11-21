import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as chart1 from '../../chart1.json';
import {
  time,
  EC_slab1,
  EC_slab2,
  EC_drain_PC,
  WC_slab1,
  WC_slab2,
  CO2air,
  HUMDef,
  Rhair,
  Tair,
  EnScr,
  BlackScr,
  PipeGrow,
  PipeLow,
  IGlob,
  RADSum,
  Tout,
} from '../../chartdata';

interface SeriesI {
  name: string;
  data: number[];
}

function DashBoard(): JSX.Element {
  const [series, setSeries] = useState<SeriesI[]>([]);
  const [isEc1, setEc1] = useState(true);
  const [isEc2, setEc2] = useState(true);
  const [isEcdrain, setEcdrain] = useState(true);
  const [isWc1, setWc1] = useState(true);
  const [isWc2, setWc2] = useState(true);
  const [isCo2, setCo2] = useState(true);
  const [isHumDef, setHumDef] = useState(true);
  const [isRhair, setRhair] = useState(true);
  const [isTair, setTair] = useState(true);
  const [isES, setES] = useState(true);
  const [isBS, setBS] = useState(true);
  const [isPG, setPG] = useState(true);
  const [isPL, setPL] = useState(true);
  const [isIG, setIG] = useState(true);
  const [isRS, setRS] = useState(true);
  const [isTout, setTout] = useState(true);

  const getKey = (): Array<string> => {
    const result = [];
    for (const key in chart1.dataset[0]) {
      if (key !== 'time') result.push(key);
    }
    return result;
  };
  const dataName = getKey().map((el, index) => <Li key={index}>{el}</Li>);
  const getAvg = (): Array<number> => {
    const result = [];
    const key = getKey();
    for (let i = 0; i < key.length; i++) {
      const sum = chart1.dataset
        .map((data: any) => data[key[i]])
        .reduce((sum, currentValue) => {
          return sum + currentValue;
        }, 0);
      const avg = sum / chart1.dataset.length;
      result.push(avg);
    }
    return result;
  };
  const dataAvg = getAvg().map((el, index) => <Li key={index}>{el}</Li>);

  const handleClickShowEC1 = (): void => {
    if (isEc1) {
      const newSerise = {
        name: 'EC_slab1',
        data: EC_slab1,
      };
      setSeries([...series, newSerise]);
      setEc1(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'EC_slab1');
      setSeries(deleteSerise);
      setEc1(true);
    }
  };
  const handleClickShowEC2 = (): void => {
    if (isEc2) {
      const newSerise = {
        name: 'EC_slab2',
        data: EC_slab2,
      };
      setSeries([...series, newSerise]);
      setEc2(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'EC_slab2');
      setSeries(deleteSerise);
      setEc2(true);
    }
  };
  const handleClickShowECdrain = (): void => {
    if (isEcdrain) {
      const newSerise = {
        name: 'EC_drain_PC',
        data: EC_drain_PC,
      };
      setSeries([...series, newSerise]);
      setEcdrain(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'EC_drain_PC');
      setSeries(deleteSerise);
      setEcdrain(true);
    }
  };
  const handleClickShowWC1 = (): void => {
    if (isWc1) {
      const newSerise = {
        name: 'WC_slab1',
        data: WC_slab1,
      };
      setSeries([...series, newSerise]);
      setWc1(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'WC_slab1');
      setSeries(deleteSerise);
      setWc1(true);
    }
  };
  const handleClickShowWC2 = (): void => {
    if (isWc1) {
      const newSerise = {
        name: 'WC_slab2',
        data: WC_slab2,
      };
      setSeries([...series, newSerise]);
      setWc2(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'WC_slab2');
      setSeries(deleteSerise);
      setWc2(true);
    }
  };
  const handleClickShowCo2 = (): void => {
    if (isCo2) {
      const newSerise = {
        name: 'CO2air',
        data: CO2air,
      };
      setSeries([...series, newSerise]);
      setCo2(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'CO2air');
      setSeries(deleteSerise);
      setCo2(true);
    }
  };
  const handleClickShowHumDef = (): void => {
    if (isHumDef) {
      const newSerise = {
        name: 'HumDef',
        data: HUMDef,
      };
      setSeries([...series, newSerise]);
      setHumDef(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'HumDef');
      setSeries(deleteSerise);
      setHumDef(true);
    }
  };
  const handleClickShowRhair = (): void => {
    if (isRhair) {
      const newSerise = {
        name: 'Rhair',
        data: Rhair,
      };
      setSeries([...series, newSerise]);
      setRhair(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'Rhair');
      setSeries(deleteSerise);
      setRhair(true);
    }
  };
  const handleClickShowTair = (): void => {
    if (isTair) {
      const newSerise = {
        name: 'Tair',
        data: Tair,
      };
      setSeries([...series, newSerise]);
      setTair(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'Tair');
      setSeries(deleteSerise);
      setTair(true);
    }
  };
  const handleClickShowEnScr = (): void => {
    if (isES) {
      const newSerise = {
        name: 'EnScr',
        data: EnScr,
      };
      setSeries([...series, newSerise]);
      setES(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'EnScr');
      setSeries(deleteSerise);
      setES(true);
    }
  };
  const handleClickShowBlackScr = (): void => {
    if (isBS) {
      const newSerise = {
        name: 'BlackScr',
        data: BlackScr,
      };
      setSeries([...series, newSerise]);
      setBS(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'BlackScr');
      setSeries(deleteSerise);
      setBS(true);
    }
  };
  const handleClickShowPipeGrow = (): void => {
    if (isPG) {
      const newSerise = {
        name: 'PipeGrow',
        data: PipeGrow,
      };
      setSeries([...series, newSerise]);
      setPG(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'PipeGrow');
      setSeries(deleteSerise);
      setPG(true);
    }
  };
  const handleClickShowPipeLow = (): void => {
    if (isPL) {
      const newSerise = {
        name: 'PipeLow',
        data: PipeLow,
      };
      setSeries([...series, newSerise]);
      setPL(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'PipeLow');
      setSeries(deleteSerise);
      setPL(true);
    }
  };
  const handleClickShowIGlob = (): void => {
    if (isIG) {
      const newSerise = {
        name: 'Iglob',
        data: IGlob,
      };
      setSeries([...series, newSerise]);
      setIG(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'Iglob');
      setSeries(deleteSerise);
      setIG(true);
    }
  };
  const handleClickShowRADSum = (): void => {
    if (isRS) {
      const newSerise = {
        name: 'RadSum',
        data: RADSum,
      };
      setSeries([...series, newSerise]);
      setRS(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'RadSum');
      setSeries(deleteSerise);
      setRS(true);
    }
  };
  const handleClickShowTout = (): void => {
    if (isTout) {
      const newSerise = {
        name: 'Tout',
        data: Tout,
      };
      setSeries([...series, newSerise]);
      setTout(false);
    } else {
      const deleteSerise = series.filter((el) => el.name !== 'Tout');
      setSeries(deleteSerise);
      setTout(true);
    }
  };

  const options = {
    chart: {
      type: 'line',
      zoomType: 'x',
    },
    title: {
      text: 'DashBoard',
    },
    xAxis: {
      categories: time,
    },
    series: series,
    rangeSelector: {
      allButtonsEnabled: true,
      selected: 1,
    },
    navigator: {
      enabled: true,
    },
  };
  return (
    <Container>
      <Chart>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        ></HighchartsReact>
      </Chart>
      <Table>
        <THead>
          <Li>이름</Li>
          <Li>평균</Li>
          <Li>즐겨찾기</Li>
        </THead>
        <TBody>
          <ChartData>
            <Li>{dataName}</Li>
            <Li>{dataAvg}</Li>
            <Li>
              <InputWrap>
                <input
                  type='checkbox'
                  id='ec1'
                  onClick={() => {
                    handleClickShowEC1();
                  }}
                />
                <label htmlFor='ec1'>EC_slab1</label>

                <input
                  type='checkbox'
                  id='ec2'
                  onClick={() => {
                    handleClickShowEC2();
                  }}
                />
                <label htmlFor='ec2'>EC_slab2</label>
                <input
                  type='checkbox'
                  id='ecdrain'
                  onClick={() => {
                    handleClickShowECdrain();
                  }}
                />
                <label htmlFor='ecdrain'>EC_drain_PC</label>
                <input
                  type='checkbox'
                  id='wc1'
                  onClick={() => {
                    handleClickShowWC1();
                  }}
                />
                <label htmlFor='wc1'>WC_slab1</label>
                <input
                  type='checkbox'
                  id='wc2'
                  onClick={() => {
                    handleClickShowWC2();
                  }}
                />
                <label htmlFor='wc2'>WC_slab2</label>
                <input
                  type='checkbox'
                  id='CO2air'
                  onClick={() => {
                    handleClickShowCo2();
                  }}
                />
                <label htmlFor='CO2air'>CO2air</label>
                <input
                  type='checkbox'
                  id='HUMDef'
                  onClick={() => {
                    handleClickShowHumDef();
                  }}
                />
                <label htmlFor='HUMDef'>HumDef</label>
                <input
                  type='checkbox'
                  id='Rhair'
                  onClick={() => {
                    handleClickShowRhair();
                  }}
                />
                <label htmlFor='Rhair'>Rhair</label>
                <input
                  type='checkbox'
                  id='Tair'
                  onClick={() => {
                    handleClickShowTair();
                  }}
                />
                <label htmlFor='Tair'>Tair</label>
                <input
                  type='checkbox'
                  id='EnScr'
                  onClick={() => {
                    handleClickShowEnScr();
                  }}
                />
                <label htmlFor='EnScr'>EnScr</label>
                <input
                  type='checkbox'
                  id='BlackScr'
                  onClick={() => {
                    handleClickShowBlackScr();
                  }}
                />
                <label htmlFor='BlackScr'>BlackScr</label>
                <input
                  type='checkbox'
                  id='PipeGrow'
                  onClick={() => {
                    handleClickShowPipeGrow();
                  }}
                />
                <label htmlFor='PipeGrow'>PipeGrow</label>
                <input
                  type='checkbox'
                  id='PipeLow'
                  onClick={() => {
                    handleClickShowPipeLow();
                  }}
                />
                <label htmlFor='PipeLow'>PipeLow</label>
                <input
                  type='checkbox'
                  id='IGlob'
                  onClick={() => {
                    handleClickShowIGlob();
                  }}
                />
                <label htmlFor='IGlob'>Iglob</label>
                <input
                  type='checkbox'
                  id='RADSum'
                  onClick={() => {
                    handleClickShowRADSum();
                  }}
                />
                <label htmlFor='RADSum'>RadSum</label>
                <input
                  type='checkbox'
                  id='Tout'
                  onClick={() => {
                    handleClickShowTout();
                  }}
                />
                <label htmlFor='Tout'>Tout</label>
              </InputWrap>
            </Li>
          </ChartData>
        </TBody>
      </Table>
    </Container>
  );
}

const Container = styled.div``;

const Chart = styled.div``;

const Table = styled.div`
  border: 2px solid black;
`;

const THead = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid black;
`;

const TBody = styled.div`
  height: 100%;
`;

const Li = styled.li`
  padding: 10px;
`;

const ChartData = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DashBoardWithRouter = withRouter(DashBoard);
