import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';
import dataExport from 'highcharts/modules/export-data';
import { time, EC_slab1, EC_slab2, EC_drain_PC } from '../../chartdata';
import './Table.css';

HC_exporting(Highcharts);
dataExport(Highcharts);

function EC(): JSX.Element {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x',
    },
    title: {
      text: 'EC',
    },
    xAxis: {
      categories: time,
    },
    series: [
      {
        name: 'EC_slab1',
        data: EC_slab1,
        dataGrouping: {
          enabled: false,
        },
      },
      {
        name: 'EC_slab2',
        data: EC_slab2,
      },
      {
        name: 'EC_drain_PC',
        data: EC_drain_PC,
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
      showTable: true,
      buttons: {
        contextButton: {
          enabled: true,
        },
      },
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

export default EC;
