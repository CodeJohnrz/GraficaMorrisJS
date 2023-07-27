new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20, value2:30 },
    { year: '2009', value: 10, value2:40 },
    { year: '2010', value: 5, value2:10 },
    { year: '2011', value: 5, value2: 5},
    { year: '2012', value: 20, value2: 20},
    { year: '2012', value: 45, value2: 11},

  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'value2'],
  lineWidth: 1.5,
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Coca Cola', 'Pepsi'],
  resize: true,
  lineColors: ['#C14D9F', '#2CB4AC']

});

Morris.Bar({
  element: 'bar-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  barColors: ['#C14D9F', '#2CB4AC']
});



Morris.Area({
  element: 'area-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  lineColors: ['#C14D9F', '#2CB4AC'],
  lineWidth: 1

});


Morris.Donut({
  element: 'donut-example',
  data: [
    {label: "Ventas en linea", value: 12},
    {label: "Ventas en tienda", value: 30},
    {label: "Ventas por correo", value: 20}
  ],
  colors: ['#C14D9F', '#2CB4AC', '#000000']
});
