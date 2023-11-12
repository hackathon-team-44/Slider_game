package team44.com.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import team44.com.app.domain.User;
import team44.com.app.repository.UserRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository repository;

    public DatabaseLoader(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new User("test1", "132164", "test@gmail.com", 0));
    }

}
