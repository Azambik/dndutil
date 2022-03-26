package server.dndutil.DatabaseLayers.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.dndutil.DatabaseLayers.Entities.CharacterSheet;

public interface CharacterSheetRepository extends JpaRepository<CharacterSheet, Integer>{
}