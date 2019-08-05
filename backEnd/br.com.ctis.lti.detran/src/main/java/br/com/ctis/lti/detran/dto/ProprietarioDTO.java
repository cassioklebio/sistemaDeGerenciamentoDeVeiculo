package br.com.ctis.lti.detran.dto;

import java.io.Serializable;

import javax.validation.constraints.NotEmpty;

import br.com.ctis.lti.detran.model.Proprietario;

public class ProprietarioDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	@NotEmpty(message="Preenchimento obrigatório")
	private String nome;
	@NotEmpty(message="Preenchimento obrigatório")
	private String cpfOuCnpj;
	@NotEmpty(message="Preenchimento obrigatório")
	private String RG; 
	@NotEmpty(message="Preenchimento obrigatório")
	private String CNH;
	
	public ProprietarioDTO() {
		
	}

	public ProprietarioDTO(Proprietario obj) {
		this.id = obj.getId();
		this.cpfOuCnpj = obj.getCpfOuCnpj();
		this.RG = obj.getCNH();
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpfOuCnpj() {
		return cpfOuCnpj;
	}

	public void setCpfOuCnpj(String cpfOuCnpj) {
		this.cpfOuCnpj = cpfOuCnpj;
	}

	public String getRG() {
		return RG;
	}

	public void setRG(String rG) {
		RG = rG;
	}

	public String getCNH() {
		return CNH;
	}

	public void setCNH(String cNH) {
		CNH = cNH;
	}
	
}
