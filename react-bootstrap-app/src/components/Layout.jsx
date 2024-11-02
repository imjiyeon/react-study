/* 공통 레이아웃 */

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// Outlet은 레이아웃을 만들 때 사용한다
// Outlet로 자식 컴포넌트의 위치 정할수 있다
function Layout() {
    return (
      <>
        <Header />
        <Outlet /> {/* 자식 컴포넌트 */}
        <Footer />
      </>
    );
  };
  
  export default Layout;