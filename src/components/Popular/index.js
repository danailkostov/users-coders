import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.zune";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Popular = ({ data }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Popular",
        xAxisName: "Repos",
        yAxisName: "stars",
        theme: "zune",
        palettecolors: "2CAEBA,5D62B5,FFC533,F2726F,8D6E63",
        rotateValues: "0",
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Popular;
