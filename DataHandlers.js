function categoryCallBack(response){
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}
	categoryData = response.getDataTable();
	drawCategoryChart();
}

function salesCallBack(response){
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}
	salesData = response.getDataTable();
	drawSalesChart();
}