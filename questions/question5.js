description = `
please create a function that receives an input parameter, 
and return the input parameter before that function call
`;

questions.push({
    name: "Variables",
    description,
    check: function(answerF){
        let checklist = [];
        let last;
        for(let i=0; i<100; i++){
            let now=Math.random();
            checklist.push([now,last]);
            last=now;
        }
        try{
            checklist.forEach((q,idx)=>{
                let ans = answerF(q[0])
                if(idx==0)return;
                if(typeof ans == "undefined"){
                    throw new Error("variable check not passed, input of "+q[0]+" have undefined return value")
                }
                if(ans!=q[1]){
                    const err = "variable check not passed, input of "+q[0]+
                        " have value "+ans+" supposed to be "+q[1];
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
            name: "do not use =",
            items: ["="],
            startingPrice: 101,
            increment: 0,
            free: 0
        },
        {
            name: "anything else is free",
            default: true,
            startingPrice: 0,
            increment: 0,
            free: 0
        }
    ]
});