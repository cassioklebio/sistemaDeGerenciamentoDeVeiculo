package br.com.ctis.lti.detran.dto;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.NotEmpty;

import br.com.ctis.lti.detran.model.Multa;

public class MultaDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	@NotEmpty(message="Preenchimento obrigatório")
	private String placa;
	@NotEmpty(message="Preenchimento obrigatório")
	private double valor;
	@NotEmpty(message="Preenchimento obrigatório")
	private Date data;
	@NotEmpty(message="Preenchimento obrigatório")
	private String tipo;
	@NotEmpty(message="Preenchimento obrigatório")
	private int pontos;
	
	
	public MultaDTO() {
		
	}
	
	public MultaDTO(Multa obj) {
		this.id = obj.getId();
		this.placa = obj.getPlaca();
		this.valor = obj.getValor();
		this.data = obj.getData();
		this.tipo = obj.getTipo();
		this.pontos = obj.getPontos();
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	public String getPlaca() {
		return placa;
	}

	public void setId(String placa) {
		this.placa = placa;
	}
	

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getPontos() {
		return pontos;
	}

	public void setPontos(int pontos) {
		this.pontos = pontos;
	}
	

}
