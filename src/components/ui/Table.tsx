// type TableProps = {
//   name?: string;
//   birthday?: any;
//   gender?: string;
//   phone?: string;
// };

interface Table {
  props: any
  data: any;
}

export default function Table({ props, data }: Table) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {props}
        </thead>
        <tbody>
         {data}
        </tbody>
      </table>
    </div>
  );
}
