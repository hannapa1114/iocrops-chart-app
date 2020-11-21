import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';
import dataExport from 'highcharts/modules/export-data';
import { time, WC_slab1, WC_slab2 } from '../../chartdata';
import './Table.css';

HC_exporting(Highcharts);
dataExport(Highcharts);

function WC(): JSX.Element {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'X',
    },
    title: {
      text: 'WC',
    },
    xAxis: {
      categories: time,
    },
    series: [
      {
        name: 'WC_slab1',
        data: WC_slab1,
      },
      {
        name: 'WC_slab2',
        data: WC_slab2,
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

export default WC;
