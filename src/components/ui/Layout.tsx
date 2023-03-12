import Navbar from "./Navbar";
import TopBar from "./Topbar";
import Content from "./Content";
interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className='flex h-screen w-screen'>
      <Navbar />
      <div className={`flex flex-col w-full p-7 bg-slate-100`}>
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}