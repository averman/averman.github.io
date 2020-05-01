description = `
please create a function that return the string
<br />
<code>Hello world!</code>
`;

questions.push({
    name: "Hello world!",
    description,
    check: function(answerF){
        try{
            if(typeof answerF(undefined,undefined,"Hello world!") == "undefined"){
                throw new Error("Hello world! check not passed, you have undefined return value")
            }
            if("Hello world!"!=answerF(undefined,undefined,"Hello world!").toString()){
                const err = "Hello world! check not passed, your answer returned "
                    +answerF(undefined,undefined,"Hello world!")+" supposed to be Hello world!";
                throw new Error(err);
            }
        }catch(e){
            console.error(e);
            throw(e.message.replace("answerF","your answer"));
        }
    },
    scoring: [
        {
            name: "DOM command",
            items: ["document","querySelector","children","Attribute"],
            startingPrice: 1,
            increment: 1,
            free: 6
        },
        {
            name: "braces",
            items: ["[","]","(",")","{","}"],
            startingPrice: 1,
            increment: 1,
            free: 6
        },
        {
            name: "return",
            items: ["return"],
            startingPrice: 10,
            increment: 10,
            free: 1
        },
        {
            name: "Hello world!",
            items: ["H","e","l","o","w","r","d","!"],
            startingPrice: 15,
            increment: 1,
            free: 4
        },
        {
            name: "other",
            default: true,
            startingPrice: 1,
            increment: 1,
            free: 50
        }
    ]
});