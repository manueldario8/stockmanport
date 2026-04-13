import { Table, type Column } from "../../components/componentExports";

type Provider = {
  code: string;
  name: string;
};

const providerColumns: Column<Provider>[] = [
  { key: "code", header: "Code" },
  { key: "name", header: "Name" },
];

const providers: Provider[] = [
  { code: "01", name: "Proveedor N" },
  { code: "02", name: "Proveedor N" },
  { code: "03", name: "Proveedor N" },
  { code: "04", name: "Proveedor N" },
  { code: "05", name: "Proveedor N" },
  { code: "06", name: "Proveedor N" },
  { code: "07", name: "Proveedor N" },
  { code: "08", name: "Proveedor N" },
  { code: "09", name: "Proveedor N" },
  { code: "10", name: "Proveedor N" },
  { code: "11", name: "Proveedor N" },
  { code: "12", name: "Proveedor N" },
  { code: "13", name: "Proveedor N" },
  { code: "14", name: "Proveedor N" },
  { code: "15", name: "Proveedor N" },
  { code: "16", name: "Proveedor N" },
  { code: "17", name: "Proveedor N" },
  { code: "18", name: "Proveedor N" },
  { code: "19", name: "Proveedor N" },
  { code: "20", name: "Proveedor N" },
];


const ProviderPage = () => {
  return (
    <>
      <h3>Lista de proveedores</h3>
      <Table data={providers} columns={providerColumns} />
    </>
  );
};

export default ProviderPage;