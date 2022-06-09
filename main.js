function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/H1sMCLKXF/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}

var parrot = 0;
var cat = 0;
var dog = 0;
var tiger = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of -' + results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - ' + dog + ' Detected Cat - ' + cat + ' Detected Tiger - ' + tiger + ' Detected Parrot - ' + parrot;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
        document.getElementById("result_count").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";

        img = document.getElementById('animal_image');

        if (results[0].label == "dog") {
            img.src = 'dog.gif';
            dog = dog + 1;
        } else if (results[0].label == "cat") {
            img.src = 'cat.gif';
            cat = cat + 1;
        } else if (results[0].label == "parrot") {
            img.src = 'parrot.gif';
            parrot = parrot + 1;
        } else if (results[0].label == "tiger") {
            img.src = 'tiger.gif';
            tiger = tiger + 1;
        } else {
            img.src = 'listen.gif';
        }
    }
}