package br.com.ctis.lti.detran.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.com.ctis.lti.detran.dto.ProprietarioDTO;
import br.com.ctis.lti.detran.model.Proprietario;
import br.com.ctis.lti.detran.repository.ProprietarioRepository;

@Service
public class ProprietarioService {

	@Autowired
	private ProprietarioRepository proprietarioRepository;

	public List<Proprietario> findaAll() {
		return proprietarioRepository.findAll();

	}

	public Proprietario find(final Integer id_proprietario) {
		Optional<Proprietario> obj = proprietarioRepository.findById(id_proprietario);
		return obj.orElseThrow(null);
	}

	public Proprietario insert(Proprietario obj) {
		obj.setId(null);
		obj = proprietarioRepository.save(obj);
		return obj;
	}

	public Proprietario update(Proprietario obj) {
		Proprietario newObj = find(obj.getId());
		return proprietarioRepository.save(newObj);
	}

	public void delete(Integer id_proprietario) {
		find(id_proprietario);
		try {
			proprietarioRepository.deleteById(id_proprietario);
		} catch (Exception e) {
			throw new DataIntegrityViolationException("Não é possivel excluir um Proprietário");
		}
	}

	public Proprietario fromDTO(ProprietarioDTO objDTO) {
		return new Proprietario(objDTO.getId(), objDTO.getNome(), objDTO.getCpfOuCnpj(), objDTO.getRG(),
				objDTO.getCNH());
	}

	public Proprietario buscarProprietarioPorCpfOuCnpj(String cpfOuCnpj) {
		return proprietarioRepository.findByCpfOuCnpj(cpfOuCnpj);
	}

}
