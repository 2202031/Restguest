package aplicacionpino.demo.controller;

import aplicacionpino.demo.model.Empresa;
import aplicacionpino.demo.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaRepository empresaRepository;

    // Obtener todas
    @GetMapping
    public List<Empresa> getAll() {
        return empresaRepository.findAll();
    }

    // Obtener por ID
    @GetMapping("/{id}")
    public ResponseEntity<Empresa> getById(@PathVariable Integer id) {
        return empresaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear nueva empresa
    @PostMapping
    public Empresa create(@RequestBody Empresa empresa) {
        empresa.setCreadoEn(LocalDateTime.now());
        return empresaRepository.save(empresa);
    }

    // Actualizar
    @PutMapping("/{id}")
    public ResponseEntity<Empresa> update(@PathVariable Integer id, @RequestBody Empresa empresa) {
        return empresaRepository.findById(id)
                .map(existing -> {
                    existing.setNombre(empresa.getNombre());
                    existing.setRfc(empresa.getRfc());
                    return ResponseEntity.ok(empresaRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Eliminar
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (empresaRepository.existsById(id)) {
            empresaRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}