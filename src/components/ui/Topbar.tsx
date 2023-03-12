interface TopbarProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Topbar(props: TopbarProps) {
  return (
    <div className={`flex`}>
      <div>
        <h1 className={`font-black 0 text-3xl text-gray-900 `}>
          {props.title}
        </h1>
        <h2 className={`font-light  text-sm text-gray-600 `}>
          {props.subtitle}
        </h2>
      </div>
    </div>
  );
}
