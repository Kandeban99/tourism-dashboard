
import HelloWorld from "./HelloWorld";

import Apple from "./Apple";

function Vehicle() {

const myInfo={ name:"mathusan", age:24, city:"jaffna"};

const fruitInfo={ type:"fruit", color:"red", taste:"sweet"};



const fruitList=[
  { type:"fruit", color:"red", taste:"sweet" },
  { type:"fruit", color:"yellow", taste:"sour" },
  { type:"fruit", color:"green", taste:"bitter" },
];

const isCar=true;

let message;


if (isCar) {
  message= <h2>This is a car</h2>;
}else{
message= <h2>This is not a car</h2>;
}

  return (
    <>
      <h1>Vehicle This is a vehicle component.</h1>
      {isCar?<h2>This is a car</h2> : <h2>This is not a car</h2>}
      {isCar&& <h2>This is a car</h2>}

    {/* {if (isCar) {
      <h2>This is a car</h2>                   it might be error you cant use if else in jsx.
    } else {
      <h2>This is not a car</h2>
    } } */}
      
      {message}
      
      <HelloWorld myInfo={myInfo} />
      <Apple fruitInfo={fruitInfo} />
      <ul>
        {fruitList.map((fruit,index)=>{
          console.log('index', index)
          return <li key={index}>{fruit.type} - {fruit.color} - {fruit.taste} </li>;
        })}
      </ul> 
    </>
  );
}
export default Vehicle;
