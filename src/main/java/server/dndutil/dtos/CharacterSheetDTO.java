package server.dndutil.dtos;

public class CharacterSheetDTO {

	private String characterName;
	private double strength;
	private double strengthModifier;
	public String getCharacterName() {
		return characterName;
	}
	public void setCharacterName(String characterName) {
		this.characterName = characterName;
	}
	public double getStrength() {
		return strength;
	}
	public void setStrength(double strength) {
		this.strength = strength;
	}
	public double getStrengthModifier() {
		return strengthModifier;
	}
	public void setStrengthModifier(double strengthModifier) {
		this.strengthModifier = strengthModifier;
	}
}