function Converter(){
  var valorDigitado = document.getElementById('valor');
  var valorReal = parseFloat(valorDigitado.value);
  // var valorRealFormatado = valorReal.toLocaleString('pt-br', {minimumFractionDigits: 2});
  var valorRealFormatado = valorReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  var moedaSelecionada = document.getElementsByName('moedaEstrangeira');
  

  var valorDolar = 5.1478
  var valorEuro = 5.1827
  var valorLibra = 5.9767
  var valorBitcoin = 111403.54
  var valorIene = 0.03608


  for(let i = 0; i < moedaSelecionada.length; i++){
    if(moedaSelecionada[i].checked){
      moedaEstrangeira = moedaSelecionada[i].value
    }
  }

  
  if (moedaEstrangeira === 'Dólar'){
    let dolarConvertido = valorReal / valorDolar
    valorConvertido.innerHTML = (`${valorRealFormatado} convertido em Dólar é: $${dolarConvertido.toFixed(2)}`);
    }else if (moedaEstrangeira === 'Euro'){
      let euroConvertido = valorReal / valorEuro
      valorConvertido.innerHTML = (`${valorRealFormatado} convertido em Euro é: €${euroConvertido.toFixed(2)}`);
      }else if (moedaEstrangeira === 'Libra'){
        let libraConvertida = valorReal / valorLibra
        valorConvertido.innerHTML = (`${valorRealFormatado} convertido em Libra é: £${libraConvertida.toFixed(2)}`);
        }else if (moedaEstrangeira === 'Bitcoin'){
          let bitcoinConvertido = valorReal / valorBitcoin
          valorConvertido.innerHTML = (`${valorRealFormatado} convertido em Bitcoin é: ₿${bitcoinConvertido.toFixed(7)}`);
          }else if (moedaEstrangeira === 'Iene'){
            let ieneConvertido = valorReal / valorIene
            valorConvertido.innerHTML = (`${valorRealFormatado} convertido em Iene é: ¥${ieneConvertido.toFixed(2)}`);
  }

  document.getElementById('valor').value='';
}

function typeWriter(elemento) {
	const textoArray=elemento.innerHTML.split('');
	elemento.innerHTML='';
	textoArray.forEach((letra,i) => {
		setTimeout(() => elemento.innerHTML += letra ,75*i)
	});
}
const titulo=document.querySelector('p');
typeWriter(titulo);

function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

//cria um event listener que escuta mudanças no input
document.getElementById("moedas","valor").addEventListener("input", function(event){
    
  //busca conteúdo do input
    var conteudo = document.getElementById("moedas").value;
    var conteudoValor = document.getElementById("valor").value;

  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '' && conteudoValor !== null && conteudoValor !== '') {
      //habilita o botão
      document.getElementById("botao").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("botao").disabled = true;
    }
});