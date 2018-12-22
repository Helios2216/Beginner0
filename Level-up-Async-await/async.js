//A-sync!
/*
async function myFunc(){

}

myFunc();

or expression

const myFun = async()=> {};
myFun();

async Functions always return a promise
can use .then() & catch()
returns 3 ways: 
1.nothing = undefined
2.if non-promise value returned from func, it will return a promise to that value
3. promise return = return promise

example:

async function fivePromise(){
    return 5;
}

fivePromise().then(resolvedValue =>{
    console.log(resolvedValue);
}) // prints 5
logic: #2 non-promise value returned as promised value

*/

//Await Operator

/*
The await keyword can be used inside an async func. 
await is an operator: it returns the resolved of a promise.
since promise resolve indeterminately. await halts or pauses the execution of our async func until a given promise is resolved.

exmaple: 
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
way easier then .then.catch 

other example:

async function mfunc(){
    let value = await promise();

    console.log(value);
}

or mfunc().then(resolve)//Read more on this: too much extra

*/

//Writting async function

/*
Don't forget await keyword:

async func nowait(){
    let value = promise();
    clg(value);
} 
//result = Promise {<pending>}
//clg executed before value = is resolved

*/

//Promise review:

/*
func/ arrow func:

const any = ()=>{

    //inisde: return new promise:

return new Promise((resolve,reject)=>{

    //callback logic:
    check/write logic with resolve and reject. Example:
    
    condition ? resolve(value): reject(value)

    //reject can be empty and handled by .catch()

})

}

*/

//Handling dependent Promises

/*
Example:

const makeBeans = async ()=>{
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
  
}
makeBeans();

resolved value used as callback value but way cleaner then older .then .catch

type resolved from shopForBeans: passed into  SoakTheBeans, its resolve passed into dinner

*/

//Handling Errors

/*
Try <-> Catch

Example:
ansync func any(){
    try{
        logic:
        let anyVal = await promise
        let anyVal2 = await secondPromise
    }
    catch (error){
        
        clg(error)
    }
}

any();
*/

//Handling Independent Promises

/*
Example:

async func concurrent(){
    const val = firstPromise();
    const val2 = secondPromise();

    console.log(await firstPromise, await SecondPromise)
}
*/

//Await Promise ALL

/*
Example:

async func anyPromAll(){
    const resultArr = await Promise.all([arg1(), arg2(), arg3(), arg4()]);

    for( result of resultArr){
        console.log(result)
    }

}

*/

//Codeacad Async Javascript completed.
