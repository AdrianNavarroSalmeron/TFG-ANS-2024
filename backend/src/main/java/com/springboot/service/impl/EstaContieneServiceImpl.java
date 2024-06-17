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

    /**
     * Comprueba si existe alguna fila para la id de libro dada
     * @param idBiblioteca
     * @param idLibro
     * @return
     */
    public boolean existeFilaParaIds(Long idBiblioteca, Long idLibro) {
        //Creamos la query
        TypedQuery<Long> query = entityManager.createQuery(
                "SELECT COUNT(ec) FROM EstaContiene ec WHERE ec.id.idBiblioteca = :idBiblioteca AND ec.id.idLibro = :idLibro",
                Long.class);
        query.setParameter("idBiblioteca", idBiblioteca);
        query.setParameter("idLibro", idLibro);
        return query.getSingleResult() > 0;
    }

    public Long obtenerIdInstancia(Long idBiblioteca, Long idLibro) {
        //Creamos la query
        TypedQuery<Long> query = entityManager.createQuery(
                "SELECT ec.id FROM EstaContiene ec WHERE ec.id.id_biblioteca = :idBiblioteca AND ec.id.id_libro = :idLibro",
                Long.class);
        query.setParameter("idBiblioteca", idBiblioteca);
        query.setParameter("idLibro", idLibro);

        List<Long> resultados = query.getResultList();
        return resultados.isEmpty() ? null : resultados.get(0);
    }

    /**
     * Añade un libro a la biblioteca y crea la fila en EstaContiene
     * @param idBiblioteca
     * @param idLibro
     * @param idLibroApi
     * @return
     */
    @Override
    @Transactional
    public EstaContiene aniadirLibroaBiblioteca(Long idBiblioteca, Long idLibro, String idLibroApi) {
        if (!existeFilaParaIds(idBiblioteca, idLibro)) {
            Libro libro = libroRepository.findById(idLibro)
                    .orElseThrow(() -> new ResourceNotFoundException("Libro", "Id", idLibro.toString()));

            Biblioteca biblioteca = bibliotecaRepository.findById(idBiblioteca)
                    .orElseThrow(() -> new ResourceNotFoundException("Biblioteca", "Id", idBiblioteca.toString()));

            // Crea y guarda la nueva fila
            EstaContiene nuevaFila = new EstaContiene(biblioteca, libro);
            nuevaFila.setIdLibroApi(idLibroApi);
            return estaContieneRepository.save(nuevaFila);
        } else {
            throw new ResourceNotFoundException("EstaContiene", "Id", idBiblioteca.toString());
        }
    }

    /**
     * Actualiza el libro en la relacion esta contiene
     * @param idUsuario
     * @param idLibro
     * @param estado
     * @return
     */
    @Override
    public ResponseEntity<EstaContiene> updateEstadoLibroEnBiblioteca(Long idUsuario, String idLibro, String estado) {
        Usuario usuario = usuarioRepository.findById(idUsuario).orElseThrow(RuntimeException::new);
        EstaContiene estaContiene = estaContieneRepository.findByIdIdBibliotecaAndIdLibroApi(usuario.getBiblioteca().getIdBiblioteca(), idLibro);
        estaContiene.setEstadoLibro(estado);
        estaContieneRepository.save(estaContiene);
        return ResponseEntity.status(HttpStatus.OK).body(estaContiene);
    }

    /**
     * Borra el libro de la relacion EstaContiene
     * @param idBiblioteca
     * @param idLibro
     * @return
     */
    @Override
    public ResponseEntity<?> deleteLibroFromBiblioteca(Long idBiblioteca, Long idLibro) {
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

    /**
     * Borra el libro de la relacion estaContiene
     * @param idUsuario
     * @param idLibroApi
     * @return
     */
    @Override
    public ResponseEntity<?> deleteLibroFromBibliotecaLibroApi(Long idUsuario, String idLibroApi) {
        //Buscamos el usuario, en caso de no ser encontrado termina la ejecucion del metodo
        Usuario usuario = usuarioRepository.findById(idUsuario).orElseThrow(RuntimeException::new);
        //Buscamos la fila en la tabla a traves del repository de estaContiene
        EstaContiene estaContiene = estaContieneRepository.findByIdIdBibliotecaAndIdLibroApi
                (usuario.getBiblioteca().getIdBiblioteca(), idLibroApi);
        //Si no es null la borramos
        if(estaContiene!= null){
            estaContieneRepository.delete(estaContiene);
            return ResponseEntity.status(HttpStatus.OK).body("Se ha borrado correctamente");
        }
        else{
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("No se ha podido borrar");
        }
    }
}
