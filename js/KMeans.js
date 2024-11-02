const KMeansModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
        this.xValues = []
        this.yValues = []
        this.data = []
        this.clusters = []
        this.clusterized_data = []
    }

    train = (data) => {
        try {
            console.log('Training KMeans')
            this.data = data.map(item => [Number(item.EjeX), Number(item.EjeY)]);
            console.log(this.data)
            let k = document.getElementById('cluster_count').value
            this.kmeans = new _2DKMeans(k, this.data)
            this.isTrained = true
        } catch (error) {
            console.log(error)
            alert('Error training KMeans')
        }
    }

    predict = () => {
        try {
            console.log('Predict KMeans')
            let k = document.getElementById('cluster_count').value
            let iterations = document.getElementById('iterations').value
            this.clusterized_data = this.kmeans.clusterize(k, this.data, iterations)
            this.clusters = this.clusterized_data.map(a => [a[1][0], a[1][1]])
            this.clusters = this.clusters.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i)
            this.clusters.forEach((cluster, i) => {
                this.clusters[i] = [cluster, "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })]
            });

            console.log(this.clusters)
            this.isPredict = true
        } catch (error) {
            console.log(error)
            alert('Error predict KMeans')
        }
    }

    graphic = () => {
        google.charts.load('current', { 'packages': ['corechart'] });
        
        const drawChart = () => {
            var graph_data = new google.visualization.DataTable();
            graph_data.addColumn('number', 'X')
            graph_data.addColumn('number', 'Y')
            graph_data.addColumn({ type: 'string', role: 'style' }); // style col.
            let a = this.clusterized_data.map(e => [e[0][0], e[0][1], `point { size: 7; shape-type: diamond; fill-color: ${this.clusters[this.clusters.findIndex(a => JSON.stringify(a[0]) == JSON.stringify(e[1]))][1]}}`])

            graph_data.addRows(a)

            this.clusters.forEach(c => {
                graph_data.addRow([c[0][0], c[0][1], `point { size: 3; shape-type: square; fill-color: #ff0000`])
            });

            var options = {
                title: 'Puntos',
                seriesType: 'scatter',
                series: { 1: { type: 'line' } },
                hAxis: { title: 'X' },
                yAxis: { title: 'Y' },
                legend: 'none'
            };

            var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
            chart.draw(graph_data, options);
        }

        google.charts.setOnLoadCallback(function () { drawChart() });
    }

    reset = () => {
        this.isTrained = false
        this.isPredict = false
        this.xValues = []
        this.yValues = []
        this.data = []
        this.clusters = []
    }
}