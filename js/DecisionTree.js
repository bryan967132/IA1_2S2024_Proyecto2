const DecisionTreeModel = class {
    constructor() {
        this.isTrained = false
        this.isPredict = false
    }

    train = () => {
        console.log('Training DecisionTree')
        this.isTrained = true
    }
    
    predict = () => {
        console.log('Predict DecisionTree')
        this.isPredict = true
    }

    graphic = () => {}

    reset = () => {
        this.isTrained = false
        this.isPredict = false
    }
}