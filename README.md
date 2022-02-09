# Instalação do projeto

## Necessário node.js instalado no PC:

https://nodejs.org/pt-br/download/



## Gerar e adicionar uma chave SSH

#### 1. Abrir git bash
``` ssh-keygen -t ed25519 -C "leticia.fonseca.1106@gmail.com" ```

Depois de colado, é só dar enter até encerrar.

#### 2. Acessar chave SSH - Disco Local(C:)/Usuários/xxx/.ssh

#### 3. Abrir essa pasta no Visual Studio, ctrl+c

#### 4. Abrir GitHub/Settings/SSH and GPG keys - adicionar uma nova

Se necessário: ``` https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account ```



## Git bash na pasta dos documentos

``` git clone git@github.com:leticia-f/genshin-react.git ```

``` cd genshin-react ```

``` npm install ```

``` npm install --save styled-components ```