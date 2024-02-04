# pmf-Table v 0.1.1

render a table with a list of items from props : data={YOURDATA}
optimize for desktop and users data.

## version de node utilisé :

v18.18.2

## Structure du Composant

Le composant `Table` est organisé en plusieurs sous-composants pour une clarté maximale et une réutilisation efficace. Chaque sous-composant a un rôle spécifique dans l'affichage et la gestion des données du tableau. Voici la disposition et la description de chaque sous-composant :

- `TableLenght`: Gère le nombre d'éléments à afficher dans le tableau.
- `TableFilter`: Fournit une fonctionnalité de recherche pour filtrer les données affichées dans le tableau.
- `table`: Le conteneur principal pour les données du tableau.
  - `TableHead`: Affiche l'en-tête du tableau, avec les titres des colonnes.
  - `TableBody`: Gère l'affichage des données dans le corps du tableau.
- `TableInfo`: Affiche des informations sur les données actuellement visibles dans le tableau.
- `TablePaginate`: Offre des contrôles de pagination pour naviguer entre les différentes pages de données.

les `fonctions` sont executé par les sous-composants mais sont gérées dans un fichier dédier pour que les sous-composants se concentre sur le rendu.

## Utilisation du Composant `Table`

Pour utiliser le composant `Table`, passez les données sous forme d'un tableau d'objets à la prop `data` :

```
import { Table } from "pmf-table";
import "pmf-table/style.css";
```

## Commande d'installation

```
npm i pmf-table
```

### Props

**data** _(array of objects, **required**)_:

- La prop `data` doit être un **tableau d'objets**, où chaque objet représente une **ligne** dans le tableau.
- Chaque objet peut avoir des **clés et des valeurs variées**. Les clés représentent les **en-têtes de colonnes** et les valeurs, les **données de chaque cellule**.

#### Exemple de structure de `data` :

```json
[
  { "name": "Alice", "age": 30, "department": "Sales" },
  { "name": "Bob", "age": 32, "department": "Marketing" }
]
```

#### Exemple d'utilisation

```
import { Table } from "pmf-table";
import "pmf-table/style.css";
```

```jsx
<Table data={data} />
```

## Sous-composants de `Table`

### TableLength

Ce sous-composant permet à l'utilisateur de choisir le nombre de lignes à afficher dans le tableau.

#### Props

- `setDisplayLength={setDisplayLength}`: Changement du state lors de la modification du nombre de lignes à afficher.

#### Exemple d'utilisation

```jsx
<TableLenght setDisplayLength={setDisplayLength} />
```

### TableFilter

Permet de filtrer les données du tableau en fonction d'une chaîne de recherche.

#### Props

- `setInputValue={setInputValue}`: Changement du state lors de la modification de la chaîne de recherche.
- `setPageNumber={setPageNumber}`: Changement du state lors de la modification de la chaîne de recherche.

#### Exemple d'utilisation

```jsx
<TableFilter setInputValue={setInputValue} setPageNumber={setPageNumber} />
```

### TableInfo

Affiche des informations sur les données actuellement visibles dans le tableau, telles que le nombre total de lignes et les lignes affichées.

#### Props

- `displayLength={displayLength}`: Nombre de lignes affichées par page.
- `totalLength={displayedData.length}`: Nombre total de lignes filtrées.
- `pageNumber={pageNumber}` : Page actuellement sélectionnée.
- `data={data}`: Pour afficher le nombre total de lignes non filtrées.

#### Exemple d'utilisation

```jsx
<TableInfo
  displayLength={displayLength}
  totalLength={displayedData.length}
  pageNumber={pageNumber}
  data={data}
/>
```

### TablePaginate

Fournit des contrôles de pagination pour naviguer entre les pages de données du tableau.

#### Props

- `displayLength={displayLength}`: Nombre de lignes affichées par page.
- `totalLength={displayedData.length}`: Nombre total de data.
- `pageNumber={pageNumber}`: Page actuellement sélectionnée.
- `setPageNumber={setPageNumber}`: Permet de changer la Page actuellement sélectionnée.

#### Exemple d'utilisation

```jsx
<TablePaginate
  displayLength={displayLength}
  totalLength={displayedData.length}
  pageNumber={pageNumber}
  setPageNumber={setPageNumber}
/>
```

### TableHead

Gère l'affichage des en-têtes de colonnes du tableau et permet le tri des données.

#### Props

- `tableHeadContents={tableHeadContents}`: Un tableau duquel les en-têtes des colonnes du tableau sont extraits.
- `sortedColumn={sortedColumn} & setSortedColumn={setSortedColumn}`: Permettent de changer selectionner la colonne à trier.
- `sortDirection={sortDirection} & setSortDirection={setSortDirection}`: Permettent de changer le sens du tri.

#### Exemple d'utilisation

```jsx
<TableHead
  tableHeadContents={tableHeadContents}
  sortedColumn={sortedColumn}
  setSortedColumn={setSortedColumn}
  sortDirection={sortDirection}
  setSortDirection={setSortDirection}
/>
```

### TableBody

Affiche les données du tableau dans le corps du tableau.

#### Props

- `displayedData={displayedData}`: Données à afficher dans le tableau.
- `displayLength={displayLength}`: Nombre de lignes affichées par page.
- `pageNumber={pageNumber}`: Page actuellement sélectionnée.
- `sortedColumn={sortedColumn}`: colonne actuellement triée.
- `tableHeadContents={tableHeadContents}`: nombre total de colones du tableau.

#### Exemple d'utilisation

```jsx
<TableBody
  displayedData={displayedData}
  displayLength={displayLength}
  pageNumber={pageNumber}
  sortedColumn={sortedColumn}
  tableHeadContents={tableHeadContents}
/>
```

## Convention de Nommage des Classes CSS

Dans le cadre de ce projet, nous avons adopté une convention de nommage des classes CSS pour assurer la cohérence et minimiser les conflits de styles, en particulier lors de l'intégration de ce composant dans d'autres projets.

### Préfixe des Classes

Toutes les classes CSS principales de ce composant sont préfixées avec `pmf-` (abréviation de Polymorf), ce qui permet d'identifier rapidement les classes comme faisant partie de la bibliothèque de composants de table Polymorf.

### Structure des Classes

- **Éléments de Base** : Les classes liées aux éléments de base du composant `Table` suivent le format `pmf-elementName`. Exemple : `pmf-table`, `pmf-tableHead`, `pmf-tableBody`.

- **Enfants et Sous-éléments** : Les classes des sous-éléments ou des éléments enfants suivent le format `pmf-elementName-childName`. Exemple : `pmf-table-row`, `pmf-table-cell`.

### Exemples

Voici quelques exemples de notre convention de nommage des classes :

- Table principale : `pmf-table`
- En-tête de table : `pmf-tableHead`
- Cellule d'en-tête : `pmf-tableHeadCell`
- Corps de la table : `pmf-tableBody`
- Cellule du corps de la table : `pmf-tableCell`
- Pagination de la table : `pmf-tablePagination`

Nous encourageons les contributeurs et les utilisateurs à suivre cette convention lors de l'extension ou de la personnalisation des styles de ce composant.

## Fonctions du Composant `Table`

Table gère Tout les states du composant.
Table utilise un useEffect pour re-render le composant apres chaque changement.

### Affichage du nombre d'éléments [x]

Le composant `Table` permet à l'utilisateur de sélectionner le nombre d'éléments à afficher dans le tableau. Cette fonction est gérée par le sous-composant `TableLength` qui reçoit un callback pour mettre à jour le nombre d'éléments affichés.

### Recherche dans le tableau [x]

Le composant `Table` inclut une fonction de recherche pour filtrer les données affichées. Cette fonction est gérée par le sous-composant `Table` qui utilise un callback pour effectuer et refléter les changements de filtre déclanché par le sous-composant `TableFilter`.

### Tri des colonnes [x]

Le composant `Table` permet le tri des données par colonnes. Les utilisateurs peuvent trier les données en ordre ascendant ou descendant en cliquant sur les en-têtes de colonne, grâce au sous-composant `TableHead`.

### Pagination du tableau [x]

Pour les grands ensembles de données, le composant `Table` offre une fonctionnalité de pagination. Le sous-composant `TablePaginate` gère la navigation entre les pages de données.

### Affichage des informations du tableau [x]

Le sous-composant `TableInfo` affiche des informations sur les données actuellement visibles, telles que le nombre total de lignes et les lignes affichées.

## Mise en œuvre

Ces fonctions sont intégrées dans le composant `Table` à travers ses sous-composants. Chaque sous-composant reçoit les props nécessaires pour gérer son comportement et interagir avec les données passées au composant `Table`. Ceci assure que `Table` est flexible et peut être utilisé dans n'importe quelle application React, avec ou sans Redux.
