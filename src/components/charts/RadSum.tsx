import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';
import dataExport from 'highcharts/modules/export-data';
import { time, RADSum } from '../../chartdata';
import './Table.css';

HC_exporting(Highcharts);
dataExport(Highcharts);

function RadSum(): JSX.Element {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x',
    },
    title: {
      text: 'RadSum',
    },
    xAxis: {
      categories: time,
    },
    series: [
      {
        name: 'RadSum',
        data: RADSum,
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

export default RadSum;
