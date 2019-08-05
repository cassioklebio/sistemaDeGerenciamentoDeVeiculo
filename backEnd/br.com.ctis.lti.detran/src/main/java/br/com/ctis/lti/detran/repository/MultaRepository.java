package br.com.ctis.lti.detran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ctis.lti.detran.model.Multa;

@Repository
public interface MultaRepository extends JpaRepository<Multa, Integer> {

}
