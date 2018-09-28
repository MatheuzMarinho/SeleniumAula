$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/testarFacebook.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "entrar no facebook",
  "description": "\r\nComo um usuario \r\nGostaria de entrar no facebook\r\nPara que eu possa ver as pessoas",
  "id": "entrar-no-facebook",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Deve entrar no facebook",
  "description": "",
  "id": "entrar-no-facebook;deve-entrar-no-facebook",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"apolo@apolo\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"apolo\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "LogarFacebookStep.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 12601272660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apolo@apolo",
      "offset": 19
    }
  ],
  "location": "LogarFacebookStep.informoOUsuario(String)"
});
formatter.result({
  "duration": 197422764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apolo",
      "offset": 9
    }
  ],
  "location": "LogarFacebookStep.aSenha(String)"
});
formatter.result({
  "duration": 144235397,
  "status": "passed"
});
formatter.match({
  "location": "LogarFacebookStep.selecionoEntrar()"
});
formatter.result({
  "duration": 8295929774,
  "status": "passed"
});
formatter.match({
  "location": "LogarFacebookStep.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 1861545,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.LogarFacebookStep.visualizoAPaginaInicial(LogarFacebookStep.java:42)\r\n\tat ✽.Entao visualizo a pagina inicial(src/test/resources/features/testarFacebook.feature:13)\r\n",
  "status": "pending"
});
});