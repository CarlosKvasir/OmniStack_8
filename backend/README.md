# Backend da Semana Oministack 8

## Projeto Tindev
Copia do tinder para desenvolvedores com dados do github.  
Feito por José Carlos

## Endpoints

* **post /devs**  
  > Cria novo usuario no BD apartir do usuario do github.
* **get /devs**
  >Lista usuários que não interagiram ainda.
* **post /devs/:devId/like**
  >Envia like para devId
* **post /devs/:devId/dislike**
  >Envia dislike para devId

## Bugs
- Aparece os likes e dislikes quando se lista outros users.
- Existem usuários no github sem name.
