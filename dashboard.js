const clockElement = document.getElementById('clock');
function updateClock() {
  const now = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);
  const timeString = now.toLocaleTimeString(undefined, { hour12: false });
  clockElement.textContent = `${dateString} · ${timeString}`;
}
updateClock();
setInterval(updateClock, 1000);

const palette = ['#00d4ff', '#3366ff', '#7c3aed', '#10b981', '#f59e0b'];

const line = echarts.init(document.getElementById('lineChart'));
const lineOption = {
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(15, 23, 42, 0.95)', borderColor: '#334155', textStyle: { color: '#e2e8f0' } },
  grid: { left: '10%', right: '6%', top: '16%', bottom: '14%' },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: { lineStyle: { color: '#475569' } },
    axisLabel: { color: '#94a3b8' },
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    axisLine: { lineStyle: { color: '#475569' } },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.12)' } },
    axisLabel: { color: '#94a3b8' },
  },
  series: [{
    name: 'Visitors',
    type: 'line',
    smooth: true,
    showSymbol: false,
    lineStyle: { width: 3, color: palette[0] },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(0, 212, 255, 0.32)' },
        { offset: 1, color: 'rgba(0, 212, 255, 0.02)' },
      ]),
    },
    emphasis: { focus: 'series' },
    data: [3100, 4200, 3800, 4600, 5200, 4800, 5700],
  }],
};
line.setOption(lineOption);

const bar = echarts.init(document.getElementById('barChart'));
const barOption = {
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, backgroundColor: 'rgba(15,23,42,0.95)' },
  grid: { left: '12%', right: '8%', top: '18%', bottom: '14%' },
  xAxis: {
    type: 'value',
    axisLine: { show: false },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.12)' } },
    axisLabel: { color: '#94a3b8' },
  },
  yAxis: {
    type: 'category',
    data: ['Product E', 'Product D', 'Product C', 'Product B', 'Product A'],
    axisLine: { lineStyle: { color: '#475569' } },
    axisLabel: { color: '#e2e8f0' },
  },
  series: [{
    name: 'Sales',
    type: 'bar',
    barWidth: 18,
    itemStyle: { color: palette[1], borderRadius: 8 },
    data: [1200, 1850, 2700, 3400, 4500],
  }],
};
bar.setOption(barOption);

const pie = echarts.init(document.getElementById('pieChart'));
const pieOption = {
  tooltip: { trigger: 'item', backgroundColor: 'rgba(15,23,42,0.95)' },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
    textStyle: { color: '#cbd5e1' },
  },
  series: [{
    name: 'Traffic Sources',
    type: 'pie',
    radius: ['46%', '72%'],
    center: ['45%', '50%'],
    avoidLabelOverlap: false,
    label: {
      position: 'outside',
      color: '#e2e8f0',
      formatter: '{b}: {d}%',
    },
    emphasis: { itemStyle: { shadowBlur: 12, shadowColor: 'rgba(0,0,0,0.35)' } },
    labelLine: { length: 18, length2: 8, lineStyle: { color: 'rgba(148,163,184,0.5)' } },
    data: [
      { value: 35, name: 'Direct' },
      { value: 28, name: 'Organic' },
      { value: 22, name: 'Social' },
      { value: 10, name: 'Referral' },
      { value: 5, name: 'Email' },
    ],
    color: palette,
  }, {
    name: 'Total',
    type: 'pie',
    radius: ['0%', '0%'],
    label: {
      show: true,
      position: 'center',
      formatter: 'Total\n100%',
      color: '#e2e8f0',
      fontSize: 16,
      lineHeight: 24,
    },
    data: [{ value: 100, name: 'Total' }],
  }],
};
pie.setOption(pieOption);

const radar = echarts.init(document.getElementById('radarChart'));
const radarOption = {
  tooltip: { backgroundColor: 'rgba(15,23,42,0.95)' },
  radar: {
    axisName: { color: '#cbd5e1', fontSize: 12 },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.16)' } },
    splitArea: { areaStyle: { color: ['rgba(0,0,0,0)', 'rgba(3,38,68,0.08)'] } },
    indicator: [
      { name: 'CPU', max: 100 },
      { name: 'Memory', max: 100 },
      { name: 'Disk', max: 100 },
      { name: 'Network', max: 100 },
      { name: 'Response', max: 100 },
    ],
  },
  series: [{
    name: 'System Performance',
    type: 'radar',
    data: [{
      value: [68, 74, 82, 55, 61],
      name: 'Current',
      areaStyle: { color: 'rgba(51, 102, 255, 0.2)' },
      lineStyle: { color: '#3366ff', width: 3 },
      itemStyle: { color: '#00d4ff' },
    }],
  }],
};
radar.setOption(radarOption);

window.addEventListener('resize', () => {
  line.resize();
  bar.resize();
  pie.resize();
  radar.resize();
});
