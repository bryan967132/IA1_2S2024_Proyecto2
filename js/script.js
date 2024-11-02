const getSelectedOption = () => {
    const selectElement = document.getElementById("models_name");
    return selectElement.options[selectElement.selectedIndex].value;
}

const updateModelName = () => {
    const modelSelect = getSelectedOption()
    document.getElementById('model_name').textContent = modelSelect
    models[modelSelect].reset()
    sectionResults()
    if(modelSelect !== 'Naive Bayes') {
        if(contentFile) {
            document.getElementById('actions').innerHTML = `<h3>Actions</h3><button type="button" onclick="train()" class="btn btn-primary">Train</button>`
        } else {
            document.getElementById('actions').innerHTML = `<h3>Actions</h3><p>No actions yet!</p>`
        }
    } else {
        document.getElementById('actions').innerHTML = ``
        if(contentFile) {
            models[modelSelect].train(contentFile)
        }
    }
}

const sectionResults = () => {
    const modelSelect = getSelectedOption()
    document.getElementById('section_results').innerHTML = modelSelect === 'Linear Regression' ? `<div class="row mt-5 p-4">
            <div class="col-md-12 text-center">
            <h4 class="text-primary">Training</h4>
        </div>
        <div class="col-md-12 text-center" id="data_training">
            <p>No results yet!</p>
        </div>
        </div>
        <div class="row mt-5 p-4">
            <div class="col-md-12 text-center">
                <h4 class="text-primary">Predict</h4>
            </div>
            <div class="col-md-12 text-center" id="predict_result">
                <p>No results yet!</p>
            </div>
        </div>
        <div class="row mt-5 p-4">
            <div class="col-md-12 text-center">
                <h4 class="text-primary">Results</h4>
            </div>
            <div class="col-md-12 text-center" id="results">
                <p>No results yet!</p>
            </div>
        </div>` : (modelSelect === 'Naive Bayes' ?
        `<div class="container mt-4 pt-5">
            <div class="row">
                <div class="col-md-4">
                    <h3>Training</h3>
                    <table id="tabla" class="table table-striped table-hover" border="1"></table>
                </div>
                <div class="col-md-4">
                    <h3>Predict</h3>
                    <select name="effect" class="form-select" id="effect_dropdown"></select>
                </div>
                <div class="col-md-4">
                    <h3>When</h3>
                    <div id = "events"></div><br>
                    <button type="button" onclick="predict()" class="btn btn-primary">PREDICT!</button>
                </div>
            </div>
            <div class="row mt-5 p-4">
                <div class="col-md-12 text-center">
                    <h3 class="text-primary">Result</h3>
                    <div class="display-1 " id="predict_result"></div>
                </div>
            </div>
        </div>` :
        `<center><div class="mb-3">
            <input
                id="cluster_count"
                type="number"
                class="form-control" 
                placeholder="Ingrese la cantidad de clusters" 
                style="width: 60%;" 
            />
        </div>
        <div class="mb-3">
            <input
                id="iterations"
                type="number"
                class="form-control" 
                placeholder="Ingrese la cantidad de clusters" 
                style="width: 60%;" 
            />
        </div>
        <div id="chart_div" style="width: 900px; height: 500px;"></div></center>`)
}

var contentFile = null

const parseCSV = (data) => {
    const rows = data.trim().split("\n"); // Separar por líneas
    const headers = rows[0].split(","); // Suponiendo que la primera fila contiene los encabezados
    const results = rows.slice(1).map(row => {
        const values = row.split(",");
        return headers.reduce((obj, header, i) => {
            obj[header.trim()] = values[i].trim();
            return obj;
        }, {});
    });
    return results;
}

const readFileContent = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
        const reader = new FileReader();
        reader.onload = (e) => {
            contentFile = parseCSV(e.target.result);
            const modelSelect = getSelectedOption()
            models[modelSelect].reset()
            sectionResults()
            if(modelSelect !== 'Naive Bayes') {
                document.getElementById('actions').innerHTML = `<h3>Actions</h3><button type="button" onclick="train()" class="btn btn-primary">Train</button>`
            } else {
                document.getElementById('actions').innerHTML = ``
                models[modelSelect].train(contentFile)
            }
        };
        reader.readAsText(file, "UTF-8");
    } else {
        alert("Por favor, selecciona un archivo CSV válido.");
    }
}

const models = {
    "Linear Regression":     new LinearRegressionModel(),
    "Naive Bayes":           new NaiveBayesModel(),
    "KMeans":                new KMeansModel(),
}

const train = () => {
    const modelSelect = getSelectedOption()
    models[modelSelect].reset()
    models[modelSelect].train(contentFile)
    if(models[modelSelect].isTrained) {
        document.getElementById('actions').innerHTML = `<h3>Actions</h3><button type="button" onclick="predict()" class="btn btn-primary">Predict</button>`
    }
}

const predict = () => {
    const modelSelect = getSelectedOption()
    models[modelSelect].predict()
    if(models[modelSelect].isPredict) {
        document.getElementById('actions').innerHTML = `<h3>Actions</h3><button type="button" onclick="graphic()" class="btn btn-primary">Graphic</button>`
    }
}

const graphic = () => {
    models[getSelectedOption()].graphic()
    document.getElementById('actions').innerHTML = `<h3>Actions</h3><button type="button" onclick="train()" class="btn btn-primary">Train</button>`
}

window.onload = () => {
    document.getElementById("data_file").addEventListener("change", readFileContent);
};

updateModelName()