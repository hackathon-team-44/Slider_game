package team44.com.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import team44.com.app.domain.User;
import team44.com.app.repository.UserRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository repository;
    private final Faker faker = new Faker(Locale.getDefault());

    public DatabaseLoader(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        for (var i = 0; i < 100; i++) {
            this.repository.save(new User(faker.name().username(), faker.internet().password(),
                    faker.number().numberBetween(0, 100)));
        }
    }

}
