package server.dndutil.DatabaseLayers.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.dndutil.DatabaseLayers.Entities.User;

public interface UserRepository extends JpaRepository<User, String>{
}