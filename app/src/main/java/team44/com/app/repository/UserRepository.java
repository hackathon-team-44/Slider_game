package team44.com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team44.com.app.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
