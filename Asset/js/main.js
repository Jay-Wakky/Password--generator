var inp = document.getElementById(`gen`)
var button = document.getElementById(`btn`)

const Pass = [`A`,`B`, `C`, `D`, `E`, `F`, `G`, `H`, 
`I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, 
`W`, `X`, `Y`, `Z`,

`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, 
`k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`,
 `w`, `x`, `y`, `z`,

1, 2, 3, 4, 5, 6, 7, 8, 9, 0,

`~`,`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`

]

button.onclick = myFunction()

function myFunction(){
        var random = Pass.sort(function()
        {return 0.5 - Math.random()}).join(``).substr(4, 6)
        var myTimeOut= setTimeout(inp.innerText = random, 3000)
    

clearTimeout(myTimeOut, clearUI)
}

var clearUI = 
    setTimeout(() => {inp.innerText=` `}, 4000);