/*Visualization handles*/
var categoryChart;
var salesChart;

function initCharts(){
//	salesChart = new google.visualization.ColumnChart(document.getElementById('SMSTableContainer'));
/*
	google.visualization.events.addListener(leftChart, 'onmouseover', barMouseOver);
    google.visualization.events.addListener(leftChart, 'onmouseout', barMouseOut);
    google.visualization.events.addListener(rightChart,'select',tableSelected);
    //google.visualization.events.addListener(rightChart,'onmouseout',tableMouseOut);
    google.visualization.events.addListener(centerTopChart, 'onmouseover', rangeMouseOver);
    google.visualization.events.addListener(centerTopChart, 'onmouseout', rangeMouseOut);
*/
}

function drawSalesChart(){
	var options = {
	  title: 'Sales Performance', 
	  width: 500, 
	  height:400, 
	  isStacked:true,
    hAxis: {title: 'Week Number', titleTextStyle: {color: 'black'}},
    vAxis: {title: 'Sales in BDT', titleTextStyle: {color: 'black'}}
    };
  /*  
  var formatter = new google.visualization.NumberFormat({prefix: '$'});
    	formatter.format(leftData, 1); // Apply formatter to second column
	*/
	salesChart.draw(salesData, options);
}
