package br.com.ctis.lti.detran.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.com.ctis.lti.detran.model.Multa;
import br.com.ctis.lti.detran.model.Enum.EnumTipoMulta;
import br.com.ctis.lti.detran.repository.MultaRepository;

@Service
public class MultaService {

	@Autowired
	private MultaRepository multaRepository;
	
	@Autowired
	private VeiculoService veiculoService;

	/**
	 * 
	 * @return
	 */
	public List<Multa> findAll() {
		return multaRepository.findAll();
	}
	
	@Transactional
	public void multarVeiculo (String placa, EnumTipoMulta tipo) {
		Multa multa = new Multa();
		multa.setData(new Date());
		multa.setTipo(tipo.toString());
		multa.setValor(tipo.getValor());
		multa.setPontos(tipo.getPontos());
		multa.setPlaca(placa);
		veiculoService.searchVeiculoPorPlaca(placa).getMultas().add(multa);
		

	}

	/*
	 * Lista uma multa especifica
	 */
	public Multa find(final Integer id_multa) {
		Optional<Multa> obj = multaRepository.findById(id_multa);
		return obj.orElseThrow(null);

	}

	/**
	 * 
	 * 
	 * @param obj
	 * @return
	 */
	public Multa insert(Multa obj) {
		obj.setId(null);
		obj = multaRepository.save(obj);
		return obj;
	}

	/**
	 * Metodo para update
	 * 
	 * @param obj
	 * @return
	 */
	public Multa update(Multa obj) {
		Multa newObj = find(obj.getId());
		return multaRepository.save(newObj);
	}

	/**
	 * Metodo para delete
	 * 
	 * @param id_multa
	 */
	public void delete(Integer id_multa) {
		find(id_multa);
		try {
			multaRepository.deleteById(id_multa);
		} catch (Exception e) {
			throw new DataIntegrityViolationException("Não é possivel excluir uma Multa");
		}
	}

	
	
}
