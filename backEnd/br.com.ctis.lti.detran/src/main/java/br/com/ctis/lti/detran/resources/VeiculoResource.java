package br.com.ctis.lti.detran.resources;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import br.com.ctis.lti.detran.dto.ProprietarioVeiculoFormDTO;
import br.com.ctis.lti.detran.dto.VeiculoDTO;
import br.com.ctis.lti.detran.model.Veiculo;
import br.com.ctis.lti.detran.service.VeiculoService;

@CrossOrigin
@RestController
@RequestMapping(value = "/veiculo")
public class VeiculoResource {
	
	@Autowired
	private VeiculoService service;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Veiculo> find(@PathVariable Integer id_veiculo){
		Veiculo obj = service.find(id_veiculo); 
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<VeiculoDTO>> findAll(){
		List<Veiculo> list = service.findAll();
		List<VeiculoDTO> listDTo = list.stream().map(obj -> new VeiculoDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDTo);
	}
	
	
	
    @PostMapping
	public ResponseEntity<Veiculo> insert(@Valid @RequestBody ProprietarioVeiculoFormDTO objDto){
		Veiculo veiculo = service.salvarVeiculoComProprietario(objDto);
		return ResponseEntity.ok().body(veiculo);
	}

	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	

}
