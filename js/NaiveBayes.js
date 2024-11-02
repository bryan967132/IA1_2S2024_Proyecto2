const NaiveBayesModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training NaiveBayes')
        this.isTrained = true
    }

    predict = () => {
        console.log('Predict NaiveBayes')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}