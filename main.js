function pilihanComputer(){
    const comp = Math.random();
    if( comp < 0.34 ) return  'gajah';
    if( comp >= 0.34 && comp < 0.67 )  return 'orang';
    return 'semut';
}

function getHasil(comp, p){
    if( p == comp )
        return 'SERI!';
    if( p == 'gajah' ) 
        return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( p == 'orang' )
        return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( p == 'semut' ) 
        return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
    const pilihankom = pilihanComputer();  // Panggil fungsi pilihanComputer() yang benar
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihankom, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer')
imgComputer.setAttribute('src', 'img/' + pilihankom + '.png')

const info = document.querySelector('.info')
info.innerHTML = hasil
});


const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function(){
    const pilihankom = pilihanComputer();  // Panggil fungsi pilihanComputer() yang benar
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihankom, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer')
imgComputer.setAttribute('src', 'img/' + pilihankom + '.png')

const info = document.querySelector('.info')
info.innerHTML = hasil
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function(){
    const pilihankom = pilihanComputer();  // Panggil fungsi pilihanComputer() yang benar
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihankom, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer')
imgComputer.setAttribute('src', 'img/' + pilihankom + '.png')

const info = document.querySelector('.info')
info.innerHTML = hasil
});