import ReactECharts from "echarts-for-react";

const donutOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false, // Set to false to hide the legend
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["70%", "100%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: "normal",
        },
      },
      labelLine: {
        show: false,
      },

      data: [
        { value: 1048, name: "Search Engine", itemStyle: { color: "#C1A06A" } },
        { value: 735, name: "Direct", itemStyle: { color: "#3395FF" } },
        { value: 580, name: "Email", itemStyle: { color: "#30B0C7" } },
        { value: 484, name: "Union Ads", itemStyle: { color: "#AF52DE" } },
        { value: 300, name: "Video Ads", itemStyle: { color: "#00438C" } },
      ],
    },
  ],
};

const SubjectDoughnut = () => {
  return (
    <ReactECharts
      option={donutOption}
      style={{ height: "170px", width: "200px" }}
    />
  );
};

export default SubjectDoughnut;
