# Instalação do projeto

### Necessário node.js instalado no PC:

https://nodejs.org/pt-br/download/

<br>

### Gerar e adicionar uma chave SSH

#### 1. Abrir git bash
``` ssh-keygen -t ed25519 -C "leticia.fonseca.1106@gmail.com" ```

Depois de colado, é só dar enter até encerrar.

#### 2. Acessar chave SSH - Disco Local(C:)/Usuários/xxx/.ssh

#### 3. Abrir essa pasta no Visual Studio, ctrl+c

#### 4. Abrir GitHub/Settings/SSH and GPG keys - adicionar uma nova

Se necessário: ``` https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account ```

<br>

### Git bash na pasta dos documentos

#### 1 (git bash): ``` git clone git@github.com:leticia-f/genshin-react.git ```

#### 2 (cmd): ``` cd (pasta a pasta até chegar na do projeto) ```

#### 3 (cmd): ``` cd genshin-react ```

#### 4 (cmd): ``` npm install ```

#### 5 (cmd): ``` npm install --save styled-components ```

#### 6 (cmd): ``` npm install react-router-dom@6 ```

#### 7 (cmd): ``` npm start ```