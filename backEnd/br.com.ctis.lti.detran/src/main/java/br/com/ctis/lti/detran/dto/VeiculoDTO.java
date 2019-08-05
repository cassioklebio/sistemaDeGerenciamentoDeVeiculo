package br.com.ctis.lti.detran.dto;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import br.com.ctis.lti.detran.model.Veiculo;

public class VeiculoDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	
	private Integer id;
	
	@NotEmpty(message="Preenchimento obrigatório")
	private String veiculoPlaca;
	@NotEmpty(message="Preenchimento obrigatório")
	private String veiculoChassi;
	@NotEmpty(message="Preenchimento obrigatório")
	private String veiculoRenavam;
	@NotEmpty(message="Preenchimento obrigatório")
	@Length(min=5,max=20, message="O tamanho deve ser entre 5 e 120 caracteres")
	private String veiculoMarca;
	@NotEmpty(message="Preenchimento obrigatório")
	private String veiculoModelo;
	private Integer veiculoAno;
	
	public VeiculoDTO() {
		
	}

	public VeiculoDTO( Veiculo obj) {
		this.id = obj.getId();
		this.veiculoPlaca = obj.getPlaca();
		this.veiculoChassi = obj.getChassi();
		this.veiculoRenavam = obj.getRenavam();
		this.veiculoMarca = obj.getMarca();
		this.veiculoModelo = obj.getVeiculoModelo();
		this.veiculoAno = obj.getAno();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((veiculoAno == null) ? 0 : veiculoAno.hashCode());
		result = prime * result + ((veiculoChassi == null) ? 0 : veiculoChassi.hashCode());
		result = prime * result + ((veiculoMarca == null) ? 0 : veiculoMarca.hashCode());
		result = prime * result + ((veiculoModelo == null) ? 0 : veiculoModelo.hashCode());
		result = prime * result + ((veiculoPlaca == null) ? 0 : veiculoPlaca.hashCode());
		result = prime * result + ((veiculoRenavam == null) ? 0 : veiculoRenavam.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		VeiculoDTO other = (VeiculoDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (veiculoAno == null) {
			if (other.veiculoAno != null)
				return false;
		} else if (!veiculoAno.equals(other.veiculoAno))
			return false;
		if (veiculoChassi == null) {
			if (other.veiculoChassi != null)
				return false;
		} else if (!veiculoChassi.equals(other.veiculoChassi))
			return false;
		if (veiculoMarca == null) {
			if (other.veiculoMarca != null)
				return false;
		} else if (!veiculoMarca.equals(other.veiculoMarca))
			return false;
		if (veiculoModelo == null) {
			if (other.veiculoModelo != null)
				return false;
		} else if (!veiculoModelo.equals(other.veiculoModelo))
			return false;
		if (veiculoPlaca == null) {
			if (other.veiculoPlaca != null)
				return false;
		} else if (!veiculoPlaca.equals(other.veiculoPlaca))
			return false;
		if (veiculoRenavam == null) {
			if (other.veiculoRenavam != null)
				return false;
		} else if (!veiculoRenavam.equals(other.veiculoRenavam))
			return false;
		return true;
	}
	
		
	
	
	

}
