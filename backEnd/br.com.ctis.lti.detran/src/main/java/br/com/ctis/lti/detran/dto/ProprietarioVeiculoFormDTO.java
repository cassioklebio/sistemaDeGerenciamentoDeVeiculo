package br.com.ctis.lti.detran.dto;

import java.io.Serializable;

public class ProprietarioVeiculoFormDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String proprietarioNome;
	private String proprietarioCpfOuCnpj;
	private String proprietarioRG;
	private String proprietarioCNH;

	private String proprietarioEnderecoRua;
	private String proprietarioEnderecoNumero;
	private String proprietarioEnderecoComplemento;
	private String proprietarioEnderecoBairro;
	private int proprietarioEnderecoCep;

	private String veiculoPlaca;
	private String veiculoChassi;
	private String veiculoRenavam;
	private String veiculoMarca;
	private String veiculoModelo;
	private Integer veiculoAno;

	public String getProprietarioNome() {
		return proprietarioNome;
	}

	public void setProprietarioNome(String proprietarioNome) {
		this.proprietarioNome = proprietarioNome;
	}

	public String getProprietarioCpfOuCnpj() {
		return proprietarioCpfOuCnpj;
	}

	public void setProprietarioCpfOuCnpj(String proprietarioCpfOuCnpj) {
		this.proprietarioCpfOuCnpj = proprietarioCpfOuCnpj;
	}

	public String getProprietarioRG() {
		return proprietarioRG;
	}

	public void setProprietarioRG(String proprietarioRG) {
		this.proprietarioRG = proprietarioRG;
	}

	public String getProprietarioCNH() {
		return proprietarioCNH;
	}

	public void setProprietarioCNH(String proprietarioCNH) {
		this.proprietarioCNH = proprietarioCNH;
	}

	public String getProprietarioEnderecoRua() {
		return proprietarioEnderecoRua;
	}

	public void setProprietarioEnderecoRua(String proprietarioEnderecoRua) {
		this.proprietarioEnderecoRua = proprietarioEnderecoRua;
	}

	public String getProprietarioEnderecoNumero() {
		return proprietarioEnderecoNumero;
	}

	public void setProprietarioEnderecoNumero(String proprietarioEnderecoNumero) {
		this.proprietarioEnderecoNumero = proprietarioEnderecoNumero;
	}

	public String getProprietarioEnderecoComplemento() {
		return proprietarioEnderecoComplemento;
	}

	public void setProprietarioEnderecoComplemento(String proprietarioEnderecoComplemento) {
		this.proprietarioEnderecoComplemento = proprietarioEnderecoComplemento;
	}

	public String getProprietarioEnderecoBairro() {
		return proprietarioEnderecoBairro;
	}

	public void setProprietarioEnderecoBairro(String proprietarioEnderecoBairro) {
		this.proprietarioEnderecoBairro = proprietarioEnderecoBairro;
	}

	public int getProprietarioEnderecoCep() {
		return proprietarioEnderecoCep;
	}

	public void setProprietarioEnderecoCep(int proprietarioEnderecoCep) {
		this.proprietarioEnderecoCep = proprietarioEnderecoCep;
	}

	public String getVeiculoPlaca() {
		return veiculoPlaca;
	}

	public void setVeiculoPlaca(String veiculoPlaca) {
		this.veiculoPlaca = veiculoPlaca;
	}

	public String getVeiculoChassi() {
		return veiculoChassi;
	}

	public void setVeiculoChassi(String veiculoChassi) {
		this.veiculoChassi = veiculoChassi;
	}

	public String getVeiculoRenavam() {
		return veiculoRenavam;
	}

	public void setVeiculoRenavam(String veiculoRenavam) {
		this.veiculoRenavam = veiculoRenavam;
	}

	public String getVeiculoMarca() {
		return veiculoMarca;
	}

	public void setVeiculoMarca(String veiculoMarca) {
		this.veiculoMarca = veiculoMarca;
	}

	public String getVeiculoModelo() {
		return veiculoModelo;
	}

	public void setVeiculoModelo(String veiculoModelo) {
		this.veiculoModelo = veiculoModelo;
	}

	public Integer getVeiculoAno() {
		return veiculoAno;
	}

	public void setVeiculoAno(Integer veiculoAno) {
		this.veiculoAno = veiculoAno;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "ProprietarioVeiculoFormDTO [proprietarioNome=" + proprietarioNome + ", proprietarioCpfOuCnpj="
				+ proprietarioCpfOuCnpj + ", proprietarioRG=" + proprietarioRG + ", proprietarioCNH=" + proprietarioCNH
				+ ", proprietarioEnderecoRua=" + proprietarioEnderecoRua + ", proprietarioEnderecoNumero="
				+ proprietarioEnderecoNumero + ", proprietarioEnderecoComplemento=" + proprietarioEnderecoComplemento
				+ ", proprietarioEnderecoBairro=" + proprietarioEnderecoBairro + ", proprietarioEnderecoCep="
				+ proprietarioEnderecoCep + ", veiculoPlaca=" + veiculoPlaca + ", veiculoChassi=" + veiculoChassi
				+ ", veiculoRenavam=" + veiculoRenavam + ", veiculoMarca=" + veiculoMarca + ", veiculoNome="
				+ veiculoModelo + ", veiculoAno=" + veiculoAno + "]";
	}

}
