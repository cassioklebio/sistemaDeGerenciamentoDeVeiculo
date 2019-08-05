package br.com.ctis.lti.detran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ctis.lti.detran.model.Proprietario;

@Repository
public interface ProprietarioRepository extends JpaRepository<Proprietario, Integer>  {
	
	Proprietario findByCpfOuCnpj (String cpfOuCnpj );

}
