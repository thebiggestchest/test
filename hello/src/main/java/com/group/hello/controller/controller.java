package com.group.hello.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class controller {
    @GetMapping(value = "/")
    public String home(Model model) {
        model.addAttribute("addAttributeName", "test");
        model.addAttribute("attributeValue", "안녕하세요");
        return "index";
    }
}
