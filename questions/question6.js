description = `
please create a function that receives a positive integer (>1) and returns whether it's prime or not
`;

questions.push({
    name: "Prime",
    description,
    check: function(answerF){
        let checklist = new Array(1000).fill(0).map((value,index)=>index+2);
        let isPrime = function(x){
            for(let i=2; i<x; i++) if(x%i==0) return false;
            return true;
        }
        try{
            checklist.forEach((q)=>{
                if(typeof answerF(q) == "undefined"){
                    throw new Error("Prime check not passed, input of "+q+" have undefined return value")
                }
                if(answerF(q)!=isPrime(q)){
                    const err = "Prime check not passed, input of "+q+
                        " have value "+answerF(q)+" supposed to be "+isPrime(q);
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
            name: "free stuff",
            items: ["=>","(",")","==","+","0","&&",","],
            startingPrice: 0,
            increment: 0,
            free: 0
        },
        {
            name: "limited stuff",
            items: ["A","a","e","l","r"],
            startingPrice: 3,
            increment: 3,
            free: 20
        },
        {
            name: "pricy stuff",
            items: ["{","}","=","o","w"],
            startingPrice: 4,
            increment: 1,
            free: 1
        },
        {
            name: "number",
            items: ["1","2","3","4","5","6","7","8","9"],
            startingPrice: 5,
            increment: 0,
            free: 3
        },
        {
            name: "other",
            default: true,
            startingPrice: 1,
            increment: 1,
            free: 20
        }
    ]
});