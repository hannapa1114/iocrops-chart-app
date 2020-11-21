import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';
import dataExport from 'highcharts/modules/export-data';
import { time, PipeGrow, PipeLow } from '../../chartdata';
import './Table.css';

HC_exporting(Highcharts);
dataExport(Highcharts);

function Pipe(): JSX.Element {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x',
    },
    title: {
      text: 'Pipe',
    },
    xAxis: {
      categories: time,
    },
    series: [
      {
        name: 'PipeGrow',
        data: PipeGrow,
      },
      {
        name: 'PipeLow',
        data: PipeLow,
      },
    ],
    navigator: {
      enabled: true,
    },
    navigation: {
      buttonOptions: {
        enabled: true,
      },
    },
    scrollbar: {
      enabled: true,
    },
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

export default Pipe;
