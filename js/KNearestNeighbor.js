const KNearestNeighborModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training KNearestNeighbor')
        this.isTrained = true
    }

    predict = () => {
        console.log('Predict KNearestNeighbor')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}