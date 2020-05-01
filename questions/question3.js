description = `
please create a function that receives an array of number and return its average
`;

questions.push({
    name: "AVG",
    description,
    check: function(answerF){
        let checklist = [
            [1,2,3,4,5],
            [200,4,198,6],
            [1,1,1,1,1,1,1,1,1],
            [123,45],
            [0]
        ];
        let ans = [3,102,1,84,0]
        try{
            checklist.forEach((q,idx)=>{
                if(typeof answerF(q) == "undefined"){
                    throw new Error("average check not passed, input of "+i+" have undefined return value")
                }
                if(ans[idx]!=answerF(q).toString()){
                    const err = "average check not passed, input of "+q+" have value "+answerF(q)+" supposed to be "+ans[idx];
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
            name: "banned words",
            items: ["for","while"],
            startingPrice: 90,
            increment: 0,
            free: 0
        },
        {
            name: "number",
            items: ["0","1","2","3","4","5","6","7","8","9"],
            startingPrice: 1,
            increment: 1,
            free: 2
        },
        {
            name: "free letters",
            items: ["c","d","e","r","u"],
            startingPrice: 1,
            increment: 1,
            free: 15
        },
        {
            name: "braces",
            items: ["[","(",")","[","]","]"],
            startingPrice: 1,
            increment: 1,
            free: 12
        },
        {
            name: "symbol",
            items: ["/","?",".",",","<",">","'",'"',";",":","!","%","^","&","*","+","-","="],
            startingPrice: 1,
            increment: 1,
            free: 15
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