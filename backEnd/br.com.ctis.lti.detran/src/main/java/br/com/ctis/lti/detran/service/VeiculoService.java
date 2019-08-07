package br.com.ctis.lti.detran.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.com.ctis.lti.detran.dto.ProprietarioVeiculoFormDTO;
import br.com.ctis.lti.detran.model.Endereco;
import br.com.ctis.lti.detran.model.Multa;
import br.com.ctis.lti.detran.model.Proprietario;
import br.com.ctis.lti.detran.model.Veiculo;
import br.com.ctis.lti.detran.repository.VeiculoRepository;

@Service
public class VeiculoService {

	@Autowired
	private VeiculoRepository veiculoRepository;

	@Autowired
	private ProprietarioService proprietarioservice;

	// Lista todos os veiculos
	public List<Veiculo> findAll() {
		return veiculoRepository.findAll();
	}
	
	public Veiculo searchVeiculoPorPlaca(String placa) {
		return veiculoRepository.findByPlaca(placa);
		
	}

	/*
	 * Lista um veiculo especifica
	 */
	public Veiculo find(final Integer id_veiculo) {
		Optional<Veiculo> obj = veiculoRepository.findById(id_veiculo);
		return obj.orElseThrow(null);
	}

	/*
	 * Salva um veiculo
	 */
	public Veiculo salvarVeiculoComProprietario(ProprietarioVeiculoFormDTO obj) {
		Veiculo veiculo = new Veiculo();
		veiculo.setPlaca(gerarPlaca());
		veiculo.setChassi(obj.getVeiculoChassi());
		veiculo.setRenavam(obj.getVeiculoRenavam());
		veiculo.setMarca(obj.getVeiculoMarca());
		veiculo.setVeiculoModelo(obj.getVeiculoModelo());
		veiculo.setAno(obj.getVeiculoAno());

		Proprietario proprietario = proprietarioservice.buscarProprietarioPorCpfOuCnpj(obj.getProprietarioCpfOuCnpj());
		if (proprietario != null) {

			veiculo.setProprietario(proprietario);

		} else {
			proprietario = new Proprietario();
			proprietario.setNome(obj.getProprietarioNome());
			proprietario.setCpfOuCnpj(obj.getProprietarioCpfOuCnpj());
			proprietario.setRG(obj.getProprietarioRG());
			proprietario.setCNH(obj.getProprietarioCNH());
			Endereco endereco = new Endereco();
			endereco.setRua(obj.getProprietarioEnderecoRua());
			endereco.setNumero(obj.getProprietarioEnderecoNumero());
			endereco.setBairro(obj.getProprietarioEnderecoBairro());
			endereco.setComplemento(obj.getProprietarioEnderecoComplemento());
			endereco.setCep(obj.getProprietarioEnderecoCep());

			List<Endereco> enderecos = new ArrayList<Endereco>();
			enderecos.add(endereco);
			proprietario.setEnderecos(enderecos);
			veiculo.setProprietario(proprietario);

		}

		return veiculoRepository.save(veiculo);
	}

	/*
	 * atualiza um veiculo
	 */
	public Veiculo update(Veiculo obj) {
		Veiculo newObj = find(obj.getId());
		return veiculoRepository.save(newObj);
	}

	/*
	 * 
	 * } deleta um veiculo
	 */
	public void delete(Integer id_veiculo) {
		find(id_veiculo);
		try {
			veiculoRepository.deleteById(id_veiculo);
		} catch (Exception e) {
			throw new DataIntegrityViolationException("Não é possivel excluir um veiculo");
		}
	}

	private String gerarPlaca() {
		StringBuilder placa = new StringBuilder();
		String letra = RandomStringUtils.random(3, true, false);
		String numero = RandomStringUtils.random(4, false, true);
		placa.append(letra).append(numero);
		return placa.toString();
	}

}
