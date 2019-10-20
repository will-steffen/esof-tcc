## SistemaGinastica - TCC Engenharia de Software

Este é um projeto desenvolvido como Trabalho de Conclusão de Curso em Engenharia de Software.

A documentação do projeto de software desenvolvida pode ser vista no caminho './docs', e a implementação dos casos de usos detalhados na documentação podem ser vistos no caminho './src/SistemaGinastica'.

O sistema está desenvolvido em .NET Core e Angular.

#### Executar o sistema a partir do código fonte

###### Pré-requisitos
- Node.js, mínimo versão 10. (Disponível em https://nodejs.org/en/)
- NET Core SDK, mínimo versão 2.2.105 (Disponível em https://dotnet.microsoft.com/download/dotnet-core/2.2)

###### Execução
No terminal abrir o caminho:
```sh ../esof-tcc/src/SistemaGinastica/SistemaGinastica ```

Executar o comando:
```sh dotnet run ```

No navegador, abrir a URL:
http://localhost:5000

Não é necessário ter o MySQL instalado, pois a configuração do repositório está utilizando banco de dados em memória.

#### Acessando o sistema

Por padrão, o sistema cria um usuário administrador, que possui todas as permissões do sistema. A partir dele é possível criar novos usuários e registros no sistema.
`Usuário: admin`
`Senha: admin`

Dentro do sistema existem alguns botões com funções de ajuda para demonstração, na parte inferior do menu.

![Botões](https://raw.githubusercontent.com/will-steffen/esof-tcc/master/docs/interface/test-buttons.png)

###### Dados de amostra
- Registra uma coleção de Instrutores, Aulas em Grupo, Clientes (sem registro de pagamentos);
- Registra um usuário para cada Tipo de Usuário
-- Recepcionista `Usuário: recepcionista` - `Senha: recepcionista`
-- Fisioterapeuta `Usuário: fisio` - `Senha: fisio`
-- Gerente `Usuário: gerente` - `Senha: gerente`

###### Simular Data
O sistema possui indicadores de pagamentos atrasados e alunos ativos matriculados. Para testar a identificação de pagamentos atrasados do sistema, o usuário pode utilizar esta ferramenta para registrar uma data fictícia no sistema.

###### Idioma
Exemplo de utilização e internacionalização. O sistema está disponível  em Português e Inglês.