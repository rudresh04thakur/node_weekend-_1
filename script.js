//var -- global
//let -- block level
//const -- global and readonly


//loop

/*

    for(init;condition;counter){
        code
    }

    while(condition){
        code
    }

    do{
        code
    }while(condition);

    for(var in array){
        code
    }

    for(var of array){ es7
        code
    } //ignore it


    enum=[key:value]

    // enum w = {1:Modnay,2:tuesday}
    // enum[1]
*/


//Interaction

/*

    Array.forEach((element,index)=>{
        code

        return no required
    })

    var newArray = Array.map((element,index)=>{
        code
        return required  it return new array
    })

    var newArray = Array.filter((element,index)=>{
        code
        return required  but on condition

        it modify existing array
    })

    Array.tap((element,index)=>{
        code
    }) es16 // ignore it 

    Array.forEach((element,index)=>{
        code
    })

    while(condition){
        code
    }

    do{
        code
    }while(condition);

    flag = true
    switch(choice){
        case 1:
            code 1
            break;
        case 2:
            var i=10
            code 2
            break;
        case 3:
            code 3
            break;
    }
    arr = [1,2,3,4,5]

    console.log("hi")

    function funName(<[params]> | [params] | [...arr,6,7,8,9]){
        code
    }

    funName(args)




    .click(function([params]){
        code
    })

    var i = function(<[params]> | [params] | [...arr,6,7,8,9]){
        code
    }

    i(args)

    var k = ([params])=>{
        code
    }

    k(args)

    (function([params]){
        code
    })(args) //invoke function

*/



const Math = {
    "1":(a,b)=>{ return a+b },
    "2":(a,b)=>{ return a-b },
    "3":(a,b)=>{ return a/b },
    "4":(a,b)=>{ return a*b },
}

module.exports = Math
