const NaiveBayesModel = class {
    constructor() {
        this.naive = new NaiveBayes();
        this.names = []
    }

    train = (data) => {
        try {
            console.log('Training NaiveBayes')
            this.names = [...new Set(data.flatMap(Object.keys))];
            const values = {}
            this.names.forEach(item1 => {
                values[item1] = []
                data.forEach(item2 => {
                    values[item1].push(item2[item1])
                })
            })
            this.names.forEach(item1 => {
                this.naive.insertCause(item1, values[item1]);
            })

            let table = ""
            table += "<tr>"
            this.names.forEach(item => {
                table += `<th>${item}</th>`;
            })
            table += "</tr>"
            for(let i = 0; i < data.length; i ++) {
                table += "<tr>"
                this.names.forEach(item1 => {
                    table += `<td>${values[item1][i]}</td>`
                })
                table += "</tr>"
            }
            document.getElementById("tabla").innerHTML = table

            let drop = "";
            this.names.forEach(item => {
                drop += `<option value="${item}">${item}</option>`
            })
            document.getElementById("effect_dropdown").innerHTML = drop

            let event_causes = "<table>";
            let causes = this.naive.causes;
            for (let index = 0; index < causes.length; index ++) {
                event_causes += `<tr><td><label id=label_${index + 1}>${causes[index][0]}</label><td>`;
                event_causes += `<td><select class="form-select" name="cause" id="cause${index + 1}_dropdown\">`;
                    var events = Array.from(new Set(causes[index][1]));
                    event_causes += `<option value="">- - -</option>`
                    for (let x = 0; x < events.length; x ++) {
                        event_causes += "<option value=" + events[x] + ">" + events[x] + "</option>"
                    }
                event_causes += "</select></td></tr>";
            }
            document.getElementById("events").innerHTML = event_causes;
        } catch (error) {
            console.log(error)
            alert('Error training NaiveBayes')
        }
    }

    predict = () => {
        console.log('Predict NaiveBayes')
        var effect = document.getElementById("effect_dropdown").value;
        let my_causes = [];

        for (let index = 0; index < this.names.length - 1; index++) {
            let id = index + 1;
            let label_text = document.getElementById("label_" + id).innerText;
            if (effect != "") {
                my_causes.push([label_text,document.getElementById("cause" + id + "_dropdown").value])
            }
        }

        var prediction = this.naive.predict(effect, my_causes);
        document.getElementById("predict_result").innerHTML = prediction[0] + " " + prediction[1];
    }

    graphic = () => {}

    reset = () => {
        this.naive = new NaiveBayes();
    }
}