package team44.com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team44.com.app.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
