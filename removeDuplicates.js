function removeDuplicate(string){

    input = string.split("")
//membuat set, set mengembalikan array tanpa ada item/ elemen yang diduplikasi
let x = [...new Set(input)];

console.log(x);
   
}

removeDuplicate("hahahahwwkwkwk");