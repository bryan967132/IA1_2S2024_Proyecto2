const LinearRegressionModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
        this.linearRegresion = new LinearRegression();
        this.xValues = []
        this.yValues = []
        this.result = null
    }

    train = (data) => {
        try {
            console.log('Training LinearRegression')
            this.xValues = data.map(item => parseFloat(item.EjeX));
            this.yValues = data.map(item => parseFloat(item.EjeY));
            document.getElementById('data_training').innerHTML = `<p>X: [${this.xValues.join(', ')}]</p><p>Y: [${this.yValues.join(', ')}]</p>`
			this.linearRegresion.fit(this.xValues, this.yValues);
            this.isTrained = true
        } catch (error) {
            console.log(error)
            alert('Error training LinearRegression')
        }
    }

    predict = () => {
        try {
            console.log('Predict LinearRegression')
            this.result = this.linearRegresion.predict(this.xValues);
            document.getElementById('predict_result').innerHTML = `<center><table id="displayTable" class="table table-striped table-bordered table-hover text-center"><tr><th>X Base</th><th>Y Predicted</th><th>ERROR %</th></tr></table></center>`
			let displayTable = document.getElementById("displayTable");
			for (let i = 0; i < this.xValues.length; i++) {
				const x = this.xValues[i];
				const y = this.result[i];
				let row = document.createElement("tr");
				let xCol = document.createElement("td");
				xCol.innerText = x.toString();
				let yCol = document.createElement("td");
				yCol.innerText = y.toFixed(2).toString();
				let errCol = document.createElement("td");
				errCol.innerHTML =
					((Math.abs(parseFloat(this.yValues[i]) - parseFloat(this.result[i])) /
						parseFloat(this.yValues[i]) ===
					Infinity
						? 1.0
						: Math.abs(parseFloat(this.yValues[i]) - parseFloat(this.result[i])) /
						  parseFloat(this.yValues[i])) * 100.0).toFixed(2);
				row.appendChild(xCol);
				row.appendChild(yCol);
				row.appendChild(errCol);
				displayTable.appendChild(row);
			}
            this.isPredict = true
        } catch (error) {
            console.log(error)
            alert('Error predict LinearRegression')
        }
    }

    graphic = () => {
        document.getElementById('results').innerHTML = '<center><div id="curve_chart" style="width: 900px; height: 500px"></div></center>'
        var graphDataSet = [];
		graphDataSet.push(["X", "Y", "Predicted"]);
		for (let i = 0; i < this.xValues.length; i++) {
			const x = this.xValues[i];
			graphDataSet.push([x.toString(), this.yValues[i], this.result[i]]);
		}
		google.charts.load("current", { packages: ["corechart"] });
        const drawChart = () => {
			var data = google.visualization.arrayToDataTable(graphDataSet);
			var options = {
				title: "Linear Regression",
				legend: { position: "bottom" },
			};
			var chart = new google.visualization.LineChart(
				document.getElementById("curve_chart")
			);
			chart.draw(data, options);
		}
		google.charts.setOnLoadCallback(drawChart);
    }

    reset = () => {
        this.isTrained = false
        this.isPredict = false
        this.linearRegresion = new LinearRegression();
        this.xValues = []
        this.yValues = []
        this.result = null
    }
}