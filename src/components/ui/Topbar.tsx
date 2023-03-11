interface TopbarProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Topbar(props: TopbarProps) {
  return (
    <div className={`flex`}>
      <div>
        <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-100`}>
          {props.title}
        </h1>
        <h2 className={`font-light text-sm text-gray-600 dark:text-gray-300`}>
          {props.subtitle}
        </h2>
      </div>
    </div>
  );
}