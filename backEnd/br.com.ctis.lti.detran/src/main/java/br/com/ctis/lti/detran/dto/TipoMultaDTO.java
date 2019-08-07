package br.com.ctis.lti.detran.dto;

import java.io.Serializable;

import br.com.ctis.lti.detran.model.Enum.EnumTipoMulta;

public class TipoMultaDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private EnumTipoMulta Tipo;

	public EnumTipoMulta getTipo() {
		return Tipo;
	}

	public void setTipo(EnumTipoMulta tipo) {
		Tipo = tipo;
	}

	

	
}
