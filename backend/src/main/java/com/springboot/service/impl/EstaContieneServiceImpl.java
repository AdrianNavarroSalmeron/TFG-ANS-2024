package com.springboot.service.impl;
import com.springboot.entity.Biblioteca;
import com.springboot.entity.EstaContiene;
import com.springboot.entity.Libro;
import com.springboot.entity.Usuario;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.BibliotecaRepository;
import com.springboot.repository.EstaContieneRepository;
import com.springboot.repository.LibroRepository;
import com.springboot.repository.UsuarioRepository;
import com.springboot.service.EstaContieneService;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EstaContieneServiceImpl implements EstaContieneService {

    @Autowired
    private EstaContieneRepository estaContieneRepository; // Necesitas crear esta clase para manejar la entidad EstaContiene
    @Autowired
    private BibliotecaRepository bibliotecaRepository;
    @Autowired
    private LibroRepository libroRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    EntityManager entityManager;

    public boolean existeFilaParaIds(Long idBiblioteca, Long idLibro) {

        TypedQuery<Long> query = entityManager.createQuery(
                "SELECT COUNT(ec) FROM EstaContiene ec WHERE ec.id.idBiblioteca = :idBiblioteca AND ec.id.idLibro = :idLibro",
                Long.class);
        query.setParameter("idBiblioteca", idBiblioteca);
        query.setParameter("idLibro", idLibro);
        return query.getSingleResult() > 0;
    }

    public Long obtenerIdInstancia(Long idBiblioteca, Long idLibro) {
        TypedQuery<Long> query = entityManager.createQuery(
                "SELECT ec.id FROM EstaContiene ec WHERE ec.id.id_biblioteca = :idBiblioteca AND ec.id.id_libro = :idLibro",
                Long.class);
        query.setParameter("idBiblioteca", idBiblioteca);
        query.setParameter("idLibro", idLibro);

        List<Long> resultados = query.getResultList();
        return resultados.isEmpty() ? null : resultados.get(0);
    }


    @Override
    @Transactional // Add this annotation to enable transaction management
    public EstaContiene aniadirLibroaBiblioteca(Long idBiblioteca, Long idLibro, String idLibroApi) {
        if (!existeFilaParaIds(idBiblioteca, idLibro)) {
            Libro libro = libroRepository.findById(idLibro)
                    .orElseThrow(() -> new ResourceNotFoundException("Libro", "Id", idLibro.toString()));

            Biblioteca biblioteca = bibliotecaRepository.findById(idBiblioteca)
                    .orElseThrow(() -> new ResourceNotFoundException("Biblioteca", "Id", idBiblioteca.toString()));

            // Create and save the new EstaContiene entity
            EstaContiene nuevaFila = new EstaContiene(biblioteca, libro);
            nuevaFila.setIdLibroApi(idLibroApi);
            return estaContieneRepository.save(nuevaFila);
        } else {
            throw new ResourceNotFoundException("EstaContiene", "Id", idBiblioteca.toString());
        }
    }

    @Override
    public ResponseEntity<EstaContiene> updateEstadoLibroEnBiblioteca(Long idUsuario, String idLibro, String estado) {
        Usuario usuario = usuarioRepository.findById(idUsuario).orElseThrow(RuntimeException::new);
        EstaContiene estaContiene = estaContieneRepository.findByIdIdBibliotecaAndIdLibroApi(usuario.getBiblioteca().getIdBiblioteca(), idLibro);
        estaContiene.setEstadoLibro(estado);
        estaContieneRepository.save(estaContiene);
        return ResponseEntity.status(HttpStatus.OK).body(estaContiene);
    }

    @Override
    public ResponseEntity<?> deleteLibroFromBiblioteca(Long idBiblioteca, Long idLibro) {
        boolean seHaEliminado = false;
        Biblioteca biblioteca = bibliotecaRepository.findById(idBiblioteca).orElseThrow(()
                -> new ResourceNotFoundException("Biblioteca", "Id", idBiblioteca.toString()));

        Libro libro = libroRepository.findById(idLibro).orElseThrow(()
                -> new ResourceNotFoundException("Libro", "Id", idLibro.toString()));
        // Buscar la entidad EstaContiene

        EstaContiene estaContieneOpt = estaContieneRepository.findByIdIdBibliotecaAndIdIdLibro(idBiblioteca, idLibro);

        if (estaContieneOpt != null) {
            estaContieneRepository.delete(estaContieneOpt);
            return ResponseEntity.status(HttpStatus.OK).body("Se ha borrado correctamente");
        } else {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("No se ha podido borrar");
        }
    }

    @Override
    public ResponseEntity<?> deleteLibroFromBibliotecaLibroApi(Long idUsuario, String idLibroApi) {
        Usuario usuario = usuarioRepository.findById(idUsuario).orElseThrow(RuntimeException::new);
        EstaContiene estaContiene = estaContieneRepository.findByIdIdBibliotecaAndIdLibroApi
                (usuario.getBiblioteca().getIdBiblioteca(), idLibroApi);
        if(estaContiene!= null){
            estaContieneRepository.delete(estaContiene);
            return ResponseEntity.status(HttpStatus.OK).body("Se ha borrado correctamente");
        }
        else{
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("No se ha podido borrar");
        }
    }
}
