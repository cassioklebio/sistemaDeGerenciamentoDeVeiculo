package br.com.ctis.lti.detran.model.Enum;

public enum EnumTipoMulta {
	GRAVISSIMA(293.47, 8), GRAVE(195.23, 6), MEDIA(130.16, 4), LEVE(88.38, 2);
	
	private double valor;
	private int pontos;
	
	
	private EnumTipoMulta(double valor, int pontos) {
		this.valor = valor;
		this.pontos = pontos;
		
	}


	public double getValor() {
		return valor;
	}


	public int getPontos() {
		return pontos;
	}
	
	

}
