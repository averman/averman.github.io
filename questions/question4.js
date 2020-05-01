description = `
please create a function that receives two numbers x and y, that return x*y
`;

questions.push({
    name: "Multiplication",
    description,
    check: function(answerF){
        let checklist = [
            [3,7,3*7],
            [-11,5,-11*5],
            [0.1,2,0.1*2],
            [1,0,1*0],
            [3,7,3*7]
        ];
        try{
            checklist.forEach((q)=>{
                if(typeof answerF(q[0],q[1]) == "undefined"){
                    throw new Error("Multiplication check not passed, input of "+q[0]+","+q[1]+" have undefined return value")
                }
                if(q[2]!=answerF(q[0],q[1]).toString()){
                    const err = "Multiplication check not passed, input of "+q[0]+","+q[1]+
                        " have value "+answerF(q[0],    q[1])+" supposed to be "+q[2];
                    throw new Error(err);
                }
            });
        }catch(e){
            console.error(e);
            throw(e.message.replace("answerF","your answer"));
        }
    },
    credits: 100,
    scoring: [
        {
            name: "do not use *",
            items: ["*"],
            startingPrice: 101,
            increment: 0,
            free: 0
        },
        {
            name: "number",
            items: ["0","1","2","3","4","5","6","7","8","9"],
            startingPrice: 5,
            increment: 0,
            free: 2
        },
        {
            name: "free x, y, and braces",
            items: ["x","y","(","[","{","}","]",")"],
            startingPrice: 0,
            increment: 0,
            free: 0
        },
        {
            name: "symbol",
            items: ["/","?",".",",","<",">","'",'"',";",":","!","%","^","&","*","+","-","="],
            startingPrice: 1,
            increment: 1,
            free: 8
        },
        {
            name: "other",
            default: true,
            startingPrice: 1,
            increment: 1,
            free: 0
        }
    ]
});