//1
let arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(a){
    console.log(a);
});

//2
let arr1=[10,20,30,40];
let arr2=arr1.map(function(num){
    return num*5;
})
console.log(arr2);

//3
let arr3=[21,22,11,10,25];
let result=arr3.filter(function(b){
    return b>20;
})
console.log(result);

//4
let employees=[
    {
        name:"raji",
        salary:300000
    },
    {
        name:"laali",
        salary:20000
    },
    {
        name:"nilan",
        salary:400000

    }
];

let result1=employees.filter(function(c){
    return c.salary>300000
});

//5
let result2=employees.find(function(c){
    return c.salary>200000
})
console.log(result1);
console.log(result2);

//6
let arr4=[2,3,4,5,6];
let result3=arr4.reduce(function(sum,numb){
    return sum+numb;
},0);
console.log(result3);

//7
let arr5=[2,3,4,6,7];
let result5=arr5.some(function(f){
    return f%2===0;
});
console.log(result5);

//8
let arr6=[20,30,2,3,0];
let result6=arr6.every(function(g){
    return g>0;
});
console.log(result6);

//9
let numbers=[3,2,4,8];
numbers.sort(function(a,b){
    return a-b;
})
console.log(numbers);

//10
let number=[10,40,60,80,20];
number.sort(function(c,d){
    return d-c;
});
console.log(number);

//11
let str="javascript";
console.log(str.charAt(4));

//12
console.log(str.charCodeAt(2));

//13
let str1=" Helloworld "
console.log(str1);
console.log(str1.trim());

//14
let str2="onboard";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

//15
let str3="is this script done";
console.log(str3.includes("script"));

//16
let str4="java in javascript";
console.log(str4.startsWith("java"));
console.log(str4.endsWith("script"));

//17
console.log(str4.replaceAll("java","python"));

//18
let str5="html-css-javascript-react";
console.log(str5.split("-"));

//19
let arr8=["reena","veena","meena"];
console.log(arr8.join(","));

//20
let str6="The apple is red";
console.log(str6.slice(3,9));

//21
let today=new Date();
console.log("Year:",today.getFullYear());
console.log("Month:",today.getMonth()+1);
console.log("Date:",today.getDate());
console.log("Day:",today.getDay());

//22
let arr9=["january","febraury","march","april","may","june","july","august","september","october","November","december"];
let todays=new Date();
let month=today.getMonth();
console.log("Current Month:",arr9[month]);

//23
let todayy=new Date();
console.log("Hour:",today.getHours());
console.log("Minute:",today.getMinutes());
console.log("seconds:",today.getSeconds());

//24
let todayyy=new Date();
today.setFullYear(2003);
today.setMonth(0);
today.setDate(30);

console.log(today.toDateString());

//25
function greet(){
    console.log("hello javascript");
}
setTimeout(greet,3000);

//26
let intervalid=setInterval(function(){
    console.log("javascript");
},2000);

//27
setTimeout(function(){
    clearInterval(intervalid);
    console.log("Interval stopped")
},8000);

//28
function one(){
    console.log("one")
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
one();
setTimeout(two,0);
three();

//29
let login=new Promise(function(resolve,reject){
    resolve("Login Successfull");
});
login.then(function(result){
    console.log(result);
});

//30
let loginn=new Promise(function(resolve,reject){
    reject("Invalid password");
});
loginn.catch(function(error){
    console.log(error);
});

//31
let message=new Promise(function(resolve,reject){
    resolve("hello everyone");
});
message.then(function(value){
    console.log(value);
});
message.finally(function(){
    console.log("Process Completed");
});

//32
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        products.forEach(function(product) {
            console.log(product.title);
        });
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

//33
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        products.forEach(function(product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

//34
fetch("https://fakestoreapi.com/products")
     .then(function(response){
        return response.json();
     })
     .then(function(products){
        products.forEach(function(product){
            console.log(product.title);
        });
     })
     .catch(function(error){
        console.warn("Error fetching products:", error.message);
     });
//35
fetch("https://fakestoreapi.com/products")
    .then(function(response){
         if(!response.ok){
            throw new Error("HTTP error: "+response.status);
         }
         return response.json();
    })
    .then(function(products){
        products.forEach(function(product){
            console.log(product.title);
        });
    })
    .catch(function(error){
        console.warn("API Error:",error.message);
    })
    .finally(function(){
        console.log("API call completed");
    });
//36
let emps=[
    {
        name:"heena",
        salary:300000
    },
    {
        name:"raju",
        salary:400000

    },
    {
        name:"seetha",
        salary:600000
    }
]
let res=emps.filter(function(emp){
        return emp.salary>300000;
});
console.log(res);
emps.forEach(function(emp) {
    console.log("Name:", emp.name);
    console.log("Salary:", emp.salary);
});

//37
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let result = products.map(function(product) {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log(result);
    })
    .catch(function(error) {
        console.warn("API Error:", error.message);
    });
    
//38
fetch("https://fakestoreapi.com/products")
     .then(function(response){
        return response.json();
     })
     .then(function(products){
        let result=products.filter(function(product){
            return product.category==="jewellery";
        });
        result.forEach(function(product){
            console.log("Product:",product.title);
            console.log("Category:",product.category);
            console.log("Price:",product.price);
        });
     })
     .catch(function(error){
        console.log("Error:",error.message);
     })
//39
let array=[10,20,30,40,50,60];
let doubled=array.map(function(num){
       return num*2;
});
console.log(doubled);
let greater=array.filter(function(num){
    return num>25;
});
console.log(greater);
let total=array.reduce(function(sum,num){
    return sum+num;
},0);
console.log(total);
let hasgreater=array.some(function(num){
    return num>40;
});
console.log(hasgreater);
let allgreater=array.every(function(num){
    return num>5;
});
console.log(allgreater);

//40
fetch("https://fakestoreapi.com/products")
     .then(function(response){
        return response.json();
     })
     .then(function(products){
        products.forEach(function(product){
            console.log("Title:",product.title);
            console.log("Price:",product.price);
            console.log("Category:",product.category);
            console.log("----------------------");
        });
     })
     .catch(function(error){
        console.log("Error:",error.message);
     })
     .finally(function(){
        console.log("Product listing completed");
     });