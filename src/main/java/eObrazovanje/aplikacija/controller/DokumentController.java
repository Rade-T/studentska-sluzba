package eObrazovanje.aplikacija.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import eObrazovanje.aplikacija.model.Dokument;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.service.DokumentService;
import eObrazovanje.aplikacija.service.UcenikService;
import eObrazovanje.aplikacija.dto.DokumentDTO;

@RestController
@RequestMapping(value = "/api/dokument")
public class DokumentController {

	private static String UPLOAD_FOLDER = "src/main/resources/files/";

	@Autowired
	private DokumentService dokumentService;
	
	@Autowired
	private UcenikService ucenikService;

	@GetMapping
	public @ResponseBody List<DokumentDTO> readAll() {
		List<Dokument> dokumenti = (List<Dokument>) dokumentService.findAll();
		List<DokumentDTO> dokumentiDTO = new ArrayList<>();
		for (Dokument d : dokumenti) {
			dokumentiDTO.add(new DokumentDTO(d));
		}
		return dokumentiDTO;
	}

	@GetMapping("/{id}")
	public @ResponseBody DokumentDTO readOne(@PathVariable(value = "id") Integer id) {
		Dokument d = dokumentService.findOne(id);
		return new DokumentDTO(d);
	}

	@PostMapping
	public @ResponseBody DokumentDTO create(@RequestBody DokumentDTO dto) {
		Dokument d = new Dokument();
		d.setNaziv(dto.getNaziv());
		d.setUcenik(ucenikService.findOne(dto.getUcenik()));
		dokumentService.save(d);

		return new DokumentDTO(d);
	}

	@PutMapping("/{id}")
	public @ResponseBody DokumentDTO update(@PathVariable(value = "id") Integer id, @RequestBody DokumentDTO dto) {
		Dokument d = dokumentService.findOne(id);
		d.setNaziv(dto.getNaziv());
		d.setUcenik(ucenikService.findOne(dto.getUcenik()));
		dokumentService.save(d);

		return new DokumentDTO(d);
	}

	@DeleteMapping("/{id}")
	public @ResponseBody DokumentDTO delete(@PathVariable(value = "id") Integer id) {
		Dokument d = dokumentService.findOne(id);
		dokumentService.remove(d);

		return new DokumentDTO(d);
	}

	@PostMapping("/uploadFile")
	public ResponseEntity<HttpStatus> handleFileUpload(@RequestParam("file") MultipartFile file) {

		try {
			// Get the file and save it somewhere
			byte[] bytes = file.getBytes();
			Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
			Files.write(path, bytes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}

	@GetMapping("/downloadFile/{filename}")
	public StreamingResponseBody getFile(@PathVariable("filename") String filename) throws IOException {

		String fileLocation = UPLOAD_FOLDER + filename + ".pdf";
		InputStream inputStream = new FileInputStream(new File(fileLocation));
		return outputStream -> {
			int nRead;
			byte[] data = new byte[1024];
			while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
				outputStream.write(data, 0, nRead);
			}
			inputStream.close();
		};
		
	}

}
