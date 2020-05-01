description = `
please create a function that receive a single Number parameter, and return:<br />
<ul>
<li>the word "fizz" if it's multiple of 3</li>
<li>the word "buzz" if it's multiple of 5</li>
<li>the word "fizzbuzz" if it's multiple of 3 and 5</li>
<li>the input itself otherwise</li>
</ul>
`;

questions.push({
    name: "fizzbuzz",
    description,
    check: function(answerF){
        try{
            answers = ["buzz","fizz","-98","-97","fizz","buzz","-94","fizz","-92","-91","fizzbuzz","-89","-88","fizz","-86","buzz","fizz","-83","-82","fizz","buzz","-79","fizz","-77","-76","fizzbuzz","-74","-73","fizz","-71","buzz","fizz","-68","-67","fizz","buzz","-64","fizz","-62","-61","fizzbuzz","-59","-58","fizz","-56","buzz","fizz","-53","-52","fizz","buzz","-49","fizz","-47","-46","fizzbuzz","-44","-43","fizz","-41","buzz","fizz","-38","-37","fizz","buzz","-34","fizz","-32","-31","fizzbuzz","-29","-28","fizz","-26","buzz","fizz","-23","-22","fizz","buzz","-19","fizz","-17","-16","fizzbuzz","-14","-13","fizz","-11","buzz","fizz","-8","-7","fizz","buzz","-4","fizz","-2","-1","fizzbuzz","1","2","fizz","4","buzz","fizz","7","8","fizz","buzz","11","fizz","13","14","fizzbuzz","16","17","fizz","19","buzz","fizz","22","23","fizz","buzz","26","fizz","28","29","fizzbuzz","31","32","fizz","34","buzz","fizz","37","38","fizz","buzz","41","fizz","43","44","fizzbuzz","46","47","fizz","49","buzz","fizz","52","53","fizz","buzz","56","fizz","58","59","fizzbuzz","61","62","fizz","64","buzz","fizz","67","68","fizz","buzz","71","fizz","73","74","fizzbuzz","76","77","fizz","79","buzz","fizz","82","83","fizz","buzz","86","fizz","88","89","fizzbuzz","91","92","fizz","94","buzz","fizz","97","98","fizz"];
            answers.forEach((ans,idx)=>{
                let i = idx-100;
                if(typeof answerF(i) == "undefined"){
                    throw new Error("fizzbuzz check not passed, input of "+i+" have undefined return value")
                }
                if(ans!=answerF(i).toString()){
                    const err = "fizzbuzz check not passed, input of "+i+" have value "+answerF(i)+" supposed to be "+ans;
                    throw new Error(err);
                }
            });
        }catch(e){
            console.error(e);
            throw(e.message.replace("answerF","your answer"));
        }
    },
    scoring: [
        {
            name: "fizz",
            items: ["fizz"],
            startingPrice: 15,
            increment: 15,
            free: 1
        },
        {
            name: "buzz",
            items: ["buzz"],
            startingPrice: 15,
            increment: 15,
            free: 1
        },
        {
            name: "0",
            items: ["0"],
            startingPrice: 2,
            increment: 4,
            free: 2
        },
        {
            name: "==",
            items: ["=="],
            startingPrice: 2,
            increment: 2,
            free: 1
        },
        {
            name: "xyz",
            items: ["x","y","z"],
            startingPrice: 1,
            increment: 1,
            free: 8
        },
        {
            name: "symbol",
            items: ["/","?",".",",","<",">","'",'"',";",":","!","%","^","&","*","+","-","="],
            startingPrice: 1,
            increment: 1,
            free: 25
        },
        {
            name: "other",
            default: true,
            startingPrice: 1,
            increment: 2,
            free: 25
        }
    ]
});