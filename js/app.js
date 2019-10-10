/*
var plusSigns = document.querySelectorAll(".addSign");
var signImgs = document.querySelectorAll(".imgHolder");
var faq = document.querySelector(".faqDiv");
var ansDivs = document.querySelectorAll(".faqAns");

for(var i = 0; i < plusSigns.length; i++) {
    signImgs[i].addEventListener('click', function(e) {
        var ansDiv = this.parentElement.nextElementSibling;
        var minusSign = this.children[0].nextElementSibling;
        if(ansDiv.style.height) {
            ansDiv.style.height = null;
            this.children[0].style.display = "block";
            minusSign.style.display = "none";
            faq.style.height = 200 + "px";
        } else {
            for(var x = 0; x < ansDivs.length; x++) {
                ansDivs[x].style.height = null;
                plusSigns[x].style.display = "block";
            }
            ansDiv.style.height = 50 + "px";
            this.children[0].style.display = "none";
            minusSign.style.display = "block";
            faq.style.height = 250 + "px";
        }
    })
}
*/

revealSlider();
// revealSlider2();

function revealSlider() {
    var addSigns = document.querySelectorAll(".addSign");
    var minusSigns = document.querySelectorAll(".minusSign");
    var ansDivs = document.querySelectorAll(".faqAns");
    var faq = document.querySelector(".faqDiv");

    //faq.style.height = 200 + "px";

    // Add the click event to plus signs
    addSigns.forEach(function(addSign) {
        addSign.addEventListener("click", function(e) {
            var minusSign = addSign.nextElementSibling;
            var ansDiv = addSign.parentElement.parentElement.nextElementSibling;
            
            // Close any open minus signs & any open answer divs
            for(let i = 0; i < minusSigns.length; i++) {
                minusSigns[i].style.display = "none";
                addSigns[i].style.display = "block";
                ansDivs[i].style.height = 0 + "px";
            }

            // Add sign to change to a minus sign
            addSign.style.display = "none";
            minusSign.style.display = "block";

            // Answer div's height to be 50px
            ansDiv.style.height = 50 + "px";

            // Form's height to be 50px more
            //faq.style.height = (parseInt(faq.style.height) + 50) + "px";
            faq.style.height = 250 + "px";
            
        })
    })

    // Add the click event to minus signs
    minusSigns.forEach(function(minusSign) {
        minusSign.addEventListener("click", function(e) {
            var addSign = minusSign.previousElementSibling;
            var ansDiv = minusSign.parentElement.parentElement.nextElementSibling;

            // Minus sign to turn to an add sign
            minusSign.style.display = "none";
            addSign.style.display = "block";

            // Answer div height to be 0px
            ansDiv.style.height = 0 + "px";

            // Form div height to be 200px
            faq.style.height = 200 + "px";
        })
    })
}

function revealSlider2 () {

    var addSigns = document.querySelectorAll(".addSign");
    var minusSigns = document.querySelectorAll(".minusSign");
    var faq = document.querySelector(".faqDiv");

    faq.style.height = 200 + "px";

    // Add the click event to plus signs
    addSigns.forEach(function(addSign) {
        addSign.addEventListener("click", function(e) {
            var minusSign = addSign.nextElementSibling;
            var ansDiv = addSign.parentElement.parentElement.nextElementSibling;

            // Add sign to change to a minus sign
            addSign.style.display = "none";
            minusSign.style.display = "block";

            // Answer div's height to be 50px
            ansDiv.style.height = 50 + "px";

            // Form's height to be 50px more
            faq.style.height = (parseInt(faq.style.height) + 50) + "px";
            //faq.style.height = 250 + "px";
            
        })
    })

    // Add the click event to minus signs
    minusSigns.forEach(function(minusSign) {
        minusSign.addEventListener("click", function(e) {
            var addSign = minusSign.previousElementSibling;
            var ansDiv = minusSign.parentElement.parentElement.nextElementSibling;

            // Minus sign to turn to an add sign
            minusSign.style.display = "none";
            addSign.style.display = "block";

            // Answer div height to be 0px
            ansDiv.style.height = 0 + "px";

            // Form div height to be 200px
            faq.style.height = (parseInt(faq.style.height) - 50) + "px";
        })
    })
};