
function uno (dos) {
    console.log("uno")
    setTimeout(dos,2000);
} 

function dos () {
    console.log("dos")
    
}
setTimeout(() =>uno(dos),5000);


const nombre = function() {
    console.log("Nombre");
} 

nombre();

const persona =()=> console.log('pendejo');