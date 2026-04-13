import { Table, type Column } from "../../components/componentExports";

type Category = {
  name: string;
};

const categoryColumns: Column<Category>[] = [
  { key: "name", header: "Name" }
];

const categories: Category[] = [
  { name: "Decoración" },
  { name: "Baño" },
  { name: "Cocina" },
  { name: "Laundry" },
  { name: "Hogar" },
  { name: "Mascotas" },
  { name: "Electrónica" },
  { name: "Línea blanca" },
  { name: "Autopartes" },
  { name: "Softwares" },
  { name: "Computación" },
  { name: "Jardinería" }
];



const CategoryPage = () => {
  return (
    <>
      <h3>Lista de categorías</h3>
      <Table data={categories} columns={categoryColumns} />
    </>
  );
};

export default CategoryPage;