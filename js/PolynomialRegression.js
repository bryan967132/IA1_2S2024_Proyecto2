const PolynomialRegressionModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training Polynomial Regression')
        this.isTrained = true
    }

    predict = () => {
        console.log('Predict Polynomial Regression')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}