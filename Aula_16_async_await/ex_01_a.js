// Aula 16


const atraso = () => new Promise(resolve => setTimeout (resolve, 100))
const umPorSegundo = async () => {
    await atraso(console.log('1s'));
    await atraso(console.log('2s'));
    await atraso(console.log('3s'));
}

umPorSegundo();