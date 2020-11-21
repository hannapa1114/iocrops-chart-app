import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';
import dataExport from 'highcharts/modules/export-data';
import { time, HUMDef } from '../../chartdata';
import './Table.css';

HC_exporting(Highcharts);
dataExport(Highcharts);

function HumDef(): JSX.Element {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'X',
    },
    title: {
      text: 'HumDef',
    },
    xAxis: {
      categories: time,
    },
    series: [
      {
        name: 'HumDef',
        data: HUMDef,
      },
    ],
    exporting: {
      showTable: false,
      tableCaption: 'Data table',
    },
  };
  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </Container>
  );
}

const Container = styled.div`
  
}`;

export default HumDef;
