const KMeansModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training KMeans')
        this.isTrained = true
    }

    predict = () => {
        console.log('Predict KMeans')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}