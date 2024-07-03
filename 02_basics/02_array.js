const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
const real_another_array = another_array.flat(3) // or give 2 or 3 flat like this

// console.log(real_another_array);


console.log(Array.isArray("Himansu")) // false
console.log(Array.from("Himansu")) // ["H", "i", "m", "a", "n", "s", "u"]
console.log(Array.from({name: "Himansu"})) // []  // interesting, // directly this not convert this object


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]

