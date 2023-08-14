
const a = [1,2,3,4,5,6]


const f = a.filter(a => a > 3)
console.log(f)


const m = a.map(a => a  * 2)
console.log(m) 


const r = a.reduce((p, a) => p + a)
console.log(r)