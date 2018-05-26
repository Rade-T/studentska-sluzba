package eObrazovanje.aplikacija.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import eObrazovanje.aplikacija.dto.KorisnikDTO;
import eObrazovanje.aplikacija.model.Korisnik;
import eObrazovanje.aplikacija.repository.KorisnikRepository;



@RestController
@RequestMapping(value = "/api/korisnik")
public class KorisnikController {

    @Autowired
    private KorisnikRepository KRepo;

    @GetMapping
    public @ResponseBody
    List<KorisnikDTO> readAll() {
        List<Korisnik> korisnici = (List<Korisnik>) KRepo.findAll();
        List<KorisnikDTO> korisniciDTO = new ArrayList<>();
        for (Korisnik k : korisnici) {
            korisniciDTO.add(new KorisnikDTO(k));
        }
        return korisniciDTO;
    }

    @GetMapping("/{id}")
    public @ResponseBody
    KorisnikDTO readOne(@PathVariable(value = "id") Integer id) {
        Korisnik k = KRepo.findById(id).get();
        return new KorisnikDTO(k);
    }

    @PostMapping
    public @ResponseBody
    KorisnikDTO create(@RequestBody KorisnikDTO dto) {
        Korisnik k = new Korisnik();
        k.setKorisnickoIme(dto.getKorisnickoIme());
        KRepo.save(k);

        return new KorisnikDTO(k);
    }

    @PutMapping("/{id}")
    public @ResponseBody
    KorisnikDTO update(@PathVariable(value = "id") Integer id, @RequestBody KorisnikDTO dto) {
        Korisnik k = KRepo.findById(id).get();
        k.setKorisnickoIme(dto.getKorisnickoIme());
        KRepo.save(k);

        return new KorisnikDTO(k);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody
    KorisnikDTO delete(@PathVariable(value = "id") Integer id) {
        Korisnik k = KRepo.findById(id).get();
        KRepo.delete(k);

        return new KorisnikDTO(k);
    }


}
