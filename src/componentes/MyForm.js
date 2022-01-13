import React, { Component } from 'react';

class MyForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            moedaA: "",
            moedaA_valor: "",
            moedaB: "",
            moedaB_valor: "",
            saida:""
        }
    /*OQUE PRECISO FAZER:
        -> O arquivo JSON correspondente na formatação 'BRL_USD: cotacao'
        -> depois lê-lo da seguinte forma require('arquivo.json')
        */
        this.Converter = this.Converter.bind(this);
        this.moedaA_mudar = this.moedaA_mudar.bind(this);
        this.moedaB_mudar = this.moedaB_mudar.bind(this);
    }
  Converter() {
    if((this.state.moedaA)=='' || isNaN(this.state.moedaB)=='') alert("Selecione a Conversão Desejada!")
    else if (!isNaN(this.state.moedaA_valor) && (this.state.moedaA_valor.length > 0)) {
        let de_para = `${this.state.moedaA}_${this.state.moedaB}`

        var objeto = {  "USD_CAD": 1.25,"USD_USD":1.00, "USD_EU": 0.87, "USD_CHF":0.91, "USD_JPY": 114.84, "USD_GBP": 0.73, "USD_ARS": 103.63, "USD_BRL": 5.50,
                        "CHF_USD": 1.09,"CHF_CHF":1.00, "CHF_CAD": 1.36, "CHF_EU": 0.95, "CHF_JPY": 125.52, "CHF_GBP": 0.79, "CHF_ARS": 113.26, "CHF_BRL": 6.07,
                        "GBP_USD": 1.36,"GBP_GBP":1.00, "GBP_CAD": 1.71, "GBP_EU": 1.19, "GBP_CHF": 1.25, "GBP_JPY": 157.15, "GBP_ARS": 141.81, "GBP_BRL": 7.60,
                        "CAD_USD": 0.80, "CAD_CAD": 1.00,"CAD_EU":0.70, "CAD_CHF":0.73, "CAD_JPY": 91.77, "CAD_GBP": 0.58, "CAD_ARS": 82.91, "CAD_BRL": 4.44,
                        "EU_USD": 1.14, "EU_CAD": 1.43, "EU_EU": 1.00, "EU_CHF": 1.04, "EU_JPY": 131.15, "EU_GBP": 0.83, "EU_ARS": 118.49, "EU_BRL": 6.35,
                        "JPY_USD": 0.0087, "JPY_CAD": 0.011, "JPY_EU": 0.0076, "JPY_CHF": 0.0080, "JPY_JPY": 1.0, "JPY_GBP": 0.0064, "JPY_ARS": 0.90, "JPY_BRL": 0.048,
                        "ARS_USD": 0.0096, "ARS_CAD": 0.012, "ARS_EU": 0.0084, "ARS_CHF": 0.0088, "ARS_JPY": 1.11, "ARS_GBP": 0.0070, "ARS_ARS": 1.00, "ARS_BRL": 0.054,
                        "BRL_USD": 0.18, "BRL_CAD": 0.22, "BRL_EU": 0.15, "BRL_CHF": 0.16, "BRL_JPY": 20.64, "BRL_GBP": 0.1300, "BRL_ARS": 18.66, "BRL_BRL": 1.00,};
        let cotacao      = parseFloat(objeto[de_para])
        let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao)
        if(moedaB_valor<0.01) moedaB_valor = (moedaB_valor).toFixed(4)
        else moedaB_valor = (moedaB_valor).toFixed(2)
        moedaB_valor = moedaB_valor + ' ' + this.state.moedaB
        this.setState({saida: moedaB_valor})
        document.getElementById("saida").style.visibility= "visible";
   }
   else
     alert("Digite um valor numérico!")
    }
    moedaA_mudar(event) {
        this.setState({moedaA: event.target.value});
    }
     moedaB_mudar(event) {
        this.setState({moedaB: event.target.value}); 
    }
    render() {
        return (
    <form >
    <label id = "from">Converter de:  
        <select name="moedaA" onChange = {this.moedaA_mudar}>
        <option defaultValue="" selected disabled value="">Selecione</option>
          <option value = "USD">Dólar</option>
          <option value = "CAD">Dólar Canadense</option>
          <option value = "EU">Euro</option>
          <option value = "CHF">Franco Suíço</option>
          <option value = "JPY">Iene</option>
          <option value = "GBP">Libra Esterlina</option>
          <option value = "ARS">Peso Argentino</option>
          <option value = "BRL">Real</option>
        </select>
    </label>
    <label id= "to">Para:  
      <select name="moedaB" onChange ={this.moedaB_mudar}>
      <option defaultValue = "" selected disabled value="">Selecione</option>
        <option value = "USD">Dólar</option>
        <option value = "CAD">Dólar Canadense</option>
        <option value = "EU">Euro</option>
        <option value = "CHF">Franco Suíço</option>
        <option value = "JPY">Iene</option>
        <option value = "GBP">Libra Esterlina</option>
        <option value = "ARS">Peso Argentino</option>
        <option value = "BRL">Real</option>
      </select>
      </label>
      <br/>
      <br/>
      <label id = "value">Valor:  
      <input type =  "text" size = '30' 
       onChange = {(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
       </label>
       <br/><br/><br/><br/>
       <input type = "button" onClick={this.Converter} value = "Converter"id ="botao"></input><br/><br/>
       <p id = "saida" >Valor Convertido: {this.state.saida}</p>
    </form>
        )
    }
}

export default MyForm;
