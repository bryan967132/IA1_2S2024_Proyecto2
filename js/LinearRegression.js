const LinearRegressionModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training LinearRegression')
        this.isTrained = true
    }

    predict = () => {
        console.log('Predict LinearRegression')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}