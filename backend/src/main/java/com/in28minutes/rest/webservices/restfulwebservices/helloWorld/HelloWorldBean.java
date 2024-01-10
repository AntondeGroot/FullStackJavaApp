package com.in28minutes.rest.webservices.restfulwebservices.helloWorld;

public class HelloWorldBean {
    private String text;

    public HelloWorldBean(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    @Override
    public String toString() {
    return "HelloWorldBean [text=" + text + "]";
    }

    public void setText(String text) {
        this.text = text;
    }

}
