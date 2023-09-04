alert( "مرحبا في موقعي! انا اسمي شيخة الفهد، سوف احسب درجتك")
let grade= prompt("ادخل درجتك")
console.log("grade")

if(grade>= 90 && grade<=100){
    console.log("لقد حصلت عل، امتياز")
}

else if(grade>=80 && grade<=89)[
    console.log("لقد حصلت على جيد جدا")
]

else if(grade>=70 && grade<=79){
    console.log("لقد حصلت على جيد")
}

else if(grade>60 && grade<=69){
    console.log("لقد حصلت على مقبرل")
}

else if(grade>=50 && grade<=59){
    console.log("لقد حصلت على ضعيف")
}

else{
    console.log("راسب")
}