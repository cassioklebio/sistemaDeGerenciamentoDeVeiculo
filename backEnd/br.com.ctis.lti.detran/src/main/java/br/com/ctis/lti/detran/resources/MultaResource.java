package br.com.ctis.lti.detran.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.ctis.lti.detran.dto.MultaDTO;
import br.com.ctis.lti.detran.model.Multa;
import br.com.ctis.lti.detran.service.MultaService;

@CrossOrigin
@RestController
@RequestMapping(value = "/multa")
public class MultaResource {

	@Autowired
	private MultaService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Multa> find(@PathVariable("id") Integer id_multa) {
		return ResponseEntity.ok().body(service.find(id_multa));
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<MultaDTO>> findAll() {
		List<Multa> list = service.findAll();
		List<MultaDTO> listDTo = list.stream().map(obj -> new MultaDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDTo);
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@Valid @RequestBody Multa objDto) {
		Multa obj = service.insert(objDto);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	// @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	// public ResponseEntity<Void> update(@Valid @RequestBody MultaDTO objDto,
	// @PathVariable Integer id_multa) {
	// Multa obj = service.fromDTO(objDto);
	// obj.setId(id_multa);
	// obj = service.update(obj);
	// return ResponseEntity.noContent().build();
	// }

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
