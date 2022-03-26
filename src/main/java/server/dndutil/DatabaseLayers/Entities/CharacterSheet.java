package server.dndutil.DatabaseLayers.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CharacterSheet {

	@Id
	private int id;
	
	@Column
	private double strength;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getStrength() {
		return strength;
	}

	public void setStrength(double strength) {
		this.strength = strength;
	}
	
	
}