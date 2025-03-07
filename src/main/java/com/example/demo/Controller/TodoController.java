package com.example.demo.Controller;

import com.example.demo.Entity.Todo;
import com.example.demo.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000") // 프론트엔드와 연결
public class TodoController {

    @Autowired
    private TodoService todoService;

    // 전체 조회 및 카테고리별 조회
    @GetMapping
    public List<Todo> getTodos(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return todoService.getTodosByCategory(category);
        }
        return todoService.getAllTodos();
    }

    // 할 일 추가
    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        return todoService.createTodo(todo);
    }

    // 할 일 수정
    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updatedTodo) {
        return todoService.updateTodo(id, updatedTodo);
    }

    // 할 일 삭제
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
    }
}