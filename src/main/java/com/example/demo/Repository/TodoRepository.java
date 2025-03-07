package com.example.demo.Repository;

import com.example.demo.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByCategory(String category); // 카테고리별 조회
}
