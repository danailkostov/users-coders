import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Bar2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.zune";

ReactFC.fcRoot(FusionCharts, Bar2D, FusionTheme);

const Forked = ({ data }) => {
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Repos",
        yAxisName: "Forks",
        theme: "zune",
        palettecolors: "2CAEBA,5D62B5,FFC533,F2726F,8D6E63",
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Forked;
