//JSON - JavaScript Object Notation
//Chave e valor com o objetivo de transferir dados
let name = "Felipe"
let age = 28
let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValeus = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValeus, age)

function generateInvoice(name, products, productsValeus, age) {
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("----------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValeus[0])

}