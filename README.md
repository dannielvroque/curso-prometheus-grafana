# Monitoramento de aplicações com Prometheus e Grafana <a name = "title"></a>

## Curso Udemy para conceitos básicos sobre monitoração de aplicação NodeJS usando Grafana e Prometheus

- [Monitoramento de aplicações com Prometheus e Grafana](#title)
- [Motivação do Projeto](#motivacao)
- [Prerequisites](#prereq)
- [Installing NodeJs](#instalnodejs)
- [Uso e Demonstração da aplicação](#demo)
- [Contribuição e Links de pesquisa](#contribuicao)

## Motivação do Projeto <a name = "motivacao"></a>

O propósito deste projeto, é entender o funcionamento básico do prometheus e o grafana.
Este projeto usará um simples código nodejs, para demonstração e entendimento do conjunto.

### Prerequisites <a name = "prereq"></a>

- Ter uma instancia do docker rodando com o prometheus, somente para testes, após instalar o docker hub, executar o comando abaixo, onde ira criar uma instancia do prometheus via docker, e irá disponibilizar a porta 9090 no localhost(127.0.0.1)

```
#docker run --name prometheusa --rm -d -p 9090:9090 -v d:\projetos\curso-prometheus\prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```

- Instalar as libs do NodeJs no Windows

### Installing NodeJs <a name = "instalnodejs"></a>

Para instalar o npm (Node Package Manager) no Windows, você geralmente precisa instalar o Node.js, pois o npm é incluído automaticamente durante a instalação do Node.js. Aqui estão as etapas básicas:

Baixe o Node.js:
Acesse o site oficial do Node.js em https://nodejs.org/ e baixe a versão recomendada para o seu sistema operacional Windows. Escolha a versão LTS (Long Term Support) se estiver disponível.

Execute o instalador:
Após o download, execute o instalador do Node.js. O instalador fornecerá uma interface simples para guiá-lo pelo processo de instalação.

Configuração da instalação:
Durante a instalação, você pode aceitar as configurações padrão ou personalizá-las conforme necessário. O npm é instalado automaticamente como parte do Node.js, então você não precisa selecionar nada adicional para instalá-lo separadamente.

Verifique a instalação:
Após a conclusão da instalação, abra o prompt de comando (Command Prompt ou PowerShell) e digite os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:
```
bash
Copy code
node -v
npm -v
```
Esses comandos devem exibir as versões do Node.js e do npm, confirmando que a instalação foi bem-sucedida.

Com isso, o npm estará pronto para ser usado no seu sistema Windows. Agora você pode começar a instalar pacotes e gerenciar dependências em seus projetos Node.js.


## Uso e Demonstração da aplicação <a name = "demo"></a>

Add notes about how to use the system.

## Contribuição e Links de pesquisa <a name = "contribuicao"></a>

- sintaxe do readme

```
https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
```

- Libs do Node, com suporte oficial e não oficial

```
https://prometheus.io/docs/instrumenting/clientlibs/
```