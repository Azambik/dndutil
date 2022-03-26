package server.dndutil.Controllers;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dndutil.DatabaseLayers.Entities.CharacterSheet;
import server.dndutil.DatabaseLayers.Repositories.CharacterSheetRepository;
import server.dndutil.DatabaseLayers.Repositories.UserRepository;
import server.dndutil.dtos.CharacterSheetDTO;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepo;
    
    @Autowired
    private CharacterSheetRepository characterSheetRepo;

    @GetMapping("/getCharacterSheet")
    public CharacterSheetDTO getCharacterSheet(@PathParam(value = "id") int id) {
    	
    	CharacterSheetDTO sheet = new CharacterSheetDTO();
    	
    	CharacterSheet rawSheet = characterSheetRepo.getOne(id);
    	
    	sheet.setStrength(rawSheet.getStrength());
    	sheet.setStrengthModifier(rawSheet.getStrength() * 10);
    	
    	return sheet;
    }
}