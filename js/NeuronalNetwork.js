const NeuronalNetworkModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training NeuronalNetwork')
        this.isTrained = true
    }

    predict = () => {
        console.log('Predict NeuronalNetwork')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}