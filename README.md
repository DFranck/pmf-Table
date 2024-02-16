# pmf-Table v 0.2.1

Render a responsive table with a list of items from props : data={YOURDATA}
optimised for 5 to 10 different data

## version of node used

v18.18.2

## Component Structure

The `Table` component is organized into several subcomponents for maximum clarity and efficient reuse. Each subcomponent has a specific role in displaying and managing table data. Here is the layout and description of each subcomponent:

### TableWrapper

#### TableHeader

- `TableLenght`: Manages the number of elements to display in the table.
- `TableFilter`: Provides search functionality to filter the data displayed in the table.

#### Table

- `TableHead`: Displays the table header with data keys.
- `TableBody`: Manages the display of data in the table body with data values.

#### TableFooter

- `TableInfo`: Displays information about the data currently visible in the table.
- `TablePaginate`: Pagination controls to navigate between different pages of data Table.

##### Functions

the `functions` are executed by the sub-components but are managed in a dedicated file so that the sub-components can concentrate on rendering.

## Use of the Component `Table`

To use the `Table` component, pass the data as an array of objects to the `data` prop:

```jsx
import Table from "pmf-table";
import "pmf-table/style.css";
```

## Installation command

```
npm i pmf-table
```

### Props details

**data** _(array of objects, **required**)_:

- The `data` prop must be an **array of objects**, where each object represents a **row** in the array.
- Each object can have **varied keys and values**. The keys represent the **column headers** and the values, the **data of each cell**.

#### Example of structure of `data` :

```json
[
  { "name": "Alice", "age": 30, "department": "Sales" },
  { "name": "Bob", "age": 32, "department": "Marketing" }
]
```

#### Example of use

```jsx
import { Table } from "pmf-table";
import "pmf-table/style.css";
<Table data={data} />;
```

## detail of Subcomponents of `Table`

### TableLength

This subcomponent allows the user to choose the number of rows to display in the table.

```jsx
<TableLenght setDisplayLength={setDisplayLength} />
```

### TableFilter

Allows you to filter table data based on a search string.

```jsx
<TableFilter setInputValue={setInputValue} setPageNumber={setPageNumber} />
```

### TableHead

Manages the display of table column headers and allows data sorting.

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

Displays table data in the table body.

```jsx
<TableBody
  displayedData={displayedData}
  displayLength={displayLength}
  pageNumber={pageNumber}
  sortedColumn={sortedColumn}
  tableHeadContents={tableHeadContents}
/>
```

### TableInfo

Shows information about the data currently visible in the table, such as the total number of rows and the rows displayed.

```jsx
<TableInfo
  displayLength={displayLength}
  totalLength={displayedData.length}
  pageNumber={pageNumber}
  data={data}
/>
```

### TablePaginate

Provides pagination controls to navigate between pages of table data.

```jsx
<TablePaginate
  displayLength={displayLength}
  totalLength={displayedData.length}
  pageNumber={pageNumber}
  setPageNumber={setPageNumber}
/>
```

### Class Prefix

All main CSS classes in this component are prefixed with `pmf-` (short for Polymorf), which helps quickly identify classes as part of the Polymorf table component library.

### Class Structure

- **Basic Elements**: The classes linked to the basic elements of the `Table` component follow the `pmf-elementName` format. Example: `pmf-table`, `pmf-tableHead`, `pmf-tableBody`.

- **Children and Subelements**: The classes of subelements or child elements follow the format `pmf-elementName-childName`. Example: `pmf-table-row`, `pmf-table-cell`.

### Examples

Here are some examples of our class naming convention:

- Main table: `pmf-table`
- Table header: `pmf-tableHead`
- Header cell: `pmf-tableHeadCell`
- Table body: `pmf-tableBody`
- Table body cell: `pmf-tableCell`
- Table pagination: `pmf-tablePagination`

## Functions of the `Table` Component

Table manages all states of the component.
Table uses a useEffect to re-render the component after each change.
