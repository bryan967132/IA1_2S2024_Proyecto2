const getSelectedOption = () => {
    const selectElement = document.getElementById("models_name");
    return selectElement.options[selectElement.selectedIndex].value;
}

const updateModelName = () => {
    document.getElementById('model_name').textContent = getSelectedOption()
}

var contentFile = null

const readFileContent = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
        const reader = new FileReader();
        reader.onload = (e) => {
            contentFile = e.target.result;
            document.getElementById('actions').innerHTML = `<h3>Actions</h3><button type="button" onclick="train()" class="btn btn-primary">Train</button>`
        };
        reader.readAsText(file, "UTF-8");
    } else {
        alert("Por favor, selecciona un archivo CSV válido.");
    }
}

window.onload = () => {
    document.getElementById("data_file").addEventListener("change", readFileContent);
};

updateModelName()

const models = {
    "Linear Regression":     new LinearRegressionModel(),
    "Polynomial Regression": new PolynomialRegressionModel(),
    "Decision Tree":         new DecisionTreeModel(),
    "Naive Bayes":           new NaiveBayesModel(),
    "Neuronal Network":      new NeuronalNetworkModel(),
    "KMeans":                new KMeansModel(),
    "K-Nearest Neighbor":    new KNearestNeighborModel(),
}

const train = () => {
    const modelSelect = getSelectedOption()
    models[modelSelect].reset()
    models[modelSelect].train()
    if(models[modelSelect].isTrained) {
        document.getElementById('actions').innerHTML += `<button type="button" onclick="predict()" class="btn btn-primary">Predict</button>`
    }
}

const predict = () => {
    const modelSelect = getSelectedOption()
    models[modelSelect].predict()
    if(models[modelSelect].isPredict) {
        document.getElementById('actions').innerHTML += `<button type="button" onclick="graphic()" class="btn btn-primary">Graphic</button>`
    }
}

const graphic = () => {
    models[getSelectedOption()].graphic()
}