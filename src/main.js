"use strict";
(()=>{
    let flag = true
    const ab = flag ? "A" : "B" //flagがtrueだったら"A"が入る、falseなら"B"
    console.log(ab)

    let num = Math.floor(Math.random() * 10) + 1 
    console.log(num)
    const odd = (num%2==0) ? "偶数" : "奇数" 
    const odd2 = (num%2==0) && "偶数" //trueの時だけ
    console.log(odd)
    console.log(odd2)

    

    //即時関数内でもloadとかしないと要素は取得できない
    // window.addEventListener('load', e =>{
        // console.log(document.body)
        // console.log(e)
    // })
})()