import React, { useEffect } from 'react';
import echarts from 'echarts/lib/echarts';

// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/scatter';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const ECharts: React.FC = () => {
  const getChartsData = () => ({
    title: {
      text: 'ECharts 入门示例',
      link: 'http://www.baidu.com',
      target: 'self',
      textStyle: {
        color: 'red',
        lineHeight: 56,
      },
      top: 100,
      width: 100,
      height: 100,
      backgroundColor: 'red',
      animation: false,
      animationDuration: 0,
    },
    tooltip: {},
    xAxis: {
    },
    yAxis: {},
    series: [{
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68],
      ],
      type: 'scatter',
    }],
  });
  useEffect(() => {
    const echartsContainer = document.getElementById('echarts-container');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const myChart = echarts.init(echartsContainer);
    myChart.setOption(getChartsData());
  }, []);
  return (
    <div id="echarts-container" style={{ width: 400, height: 400 }} />
  );
};

export default ECharts;
