package eObrazovanje.aplikacija.controller;

import java.awt.List;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import eObrazovanje.aplikacija.dto.UcenikDTO;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.repository.UcenikRepository;



@RestController
@RequestMapping(value="/api/ucenik")
public class UcenikController {
	

}
