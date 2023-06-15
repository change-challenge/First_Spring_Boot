package com.example.firstproject.service;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest // 해당 클래스는 스프링부트와 연도오디어 테스팅된다.
class ArticleServiceTest {

    @Autowired
    ArticleService articleService;

    @Test
    void index() {

        // 예상 시나리오
        Article a = new Article(1L, "가가가가", "1111");
        Article b = new Article(2L, "나나나나", "2222");
        Article c = new Article(3L, "다다다다", "3333");
        List<Article> expected = new ArrayList<Article>(Arrays.asList(a, b, c));

        // 실제
        List<Article> articles =  articleService.index();

        // 비교
        assertEquals(expected.toString(), articles.toString());
    }

    @Test
    void show_성공____존재하는_id_입력() {
        // 예상
        Long id = 1L;
        Article expected = new Article(id, "가가가가", "1111");

        // 실제
        Article article = articleService.show(id);

        // 비교
        assertEquals(expected.toString(), article.toString());
    }

    @Test
    void show_실패____존재하지_않는_id_입력() {
        // 예상
        Long id = -1L;
        Article expected = null;

        // 실제
        Article article = articleService.show(id);

        // 비교
        assertEquals(expected, article);
    }

    @Test
    @Transactional // 우리는 index()도 실행해 볼 것이기 때문에 만들어놓고 롤백을 해놔야한다!
    void create_성공____title과_content만_있는_dto_입력() {
        // 예상
        String title = "라";
        String content = "4";
        ArticleForm dto = new ArticleForm(null, title, content);
        Article expected = new Article(4L, title, content);

        // 실제
        Article article = articleService.create(dto);

        // 비교
        assertEquals(expected.toString(), article.toString());
    }

    @Test
    @Transactional // 우리는 index()도 실행해 볼 것이기 때문에 만들어놓고 롤백을 해놔야한다!
    void create_실패____id가_포함된_dto_입력() {
        // 예상
        String title = "라";
        String content = "4";
        ArticleForm dto = new ArticleForm(4L, title, content); // create할 때 id 값 들어가면 안되므로
        Article expected = null;

        // 실제
        Article article = articleService.create(dto);

        // 비교
        assertEquals(expected, article);
    }

    @Test
    @Transactional
    void update_성공____존재하는_id와_title_content_가_있는_dto_입력() {
        // 예상
        String title = "라";
        String content = "4";
        ArticleForm dto = new ArticleForm(4L, title, content); // create할 때 id 값 들어가면 안되므로
        Article expected = null;

        // 실제
        Article article = articleService.create(dto);

        // 비교
        assertEquals(expected, article);
    }

    @Test
    @Transactional
    void update____존재하는_id와_title만_있는_dto_입력() {
    }

    @Test
    @Transactional
    void update_실패____존재하지_않는_id의_dto_입력() {
    }

    @Test
    @Transactional
    void update_실패____id만_있는_dto_입력() {
    }

    @Test
    @Transactional
    void delete_성공____존재하는_id_입력() {
    }

    @Test
    @Transactional
    void delete_실패____존재하지_않는_id_입력() {
    }
}