"use strict";
(()=>{

    let flag = true
    const ab = flag ? "A" : "B" //flagがtrueだったら"A"が入る、falseなら"B"
    console.log(ab)             // Aが出力される

    let randNum = Math.floor( Math.random() * 10 ) + 1 
    console.log(randNum)
    const odd = (randNum % 2 === 0) ? "偶数" : "奇数" 
    const odd2 = (randNum % 2 === 0) && "偶数" //trueの時だけ"偶数"、falseの時はfalseが入る
    console.log(odd)
    console.log(odd2)
    console.log(odd2 || "奇数")                //もしodd2がfalse(奇数)だった場合

    //即時関数内でもloadとかしないと要素は取得できない
    // window.addEventListener('load', e =>{
        // console.log(document.body)
        // console.log(e)
    // })
})()