import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import { CommonSuspense } from "components";
import { AppLayout } from "layouts";
import { routerList } from "routers/router.routes";
import { IChildrenRouter, IRouter } from "types/router.model";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7200"
        }
      }}
    >
      <BrowserRouter>
        <CommonSuspense>
          <Routes>
            <Route element={<AppLayout />}>
              {routerList.map(({ path, element, children }: IRouter) => {
                if (children && children.length > 0) {
                  return (
                    <Route key={path}>
                      <Route key={path} path={path} element={element} />
                      {children.map((route: IChildrenRouter) => (
                        <Route
                          key={route.path}
                          path={route.path}
                          element={route.element}
                        />
                      ))}
                    </Route>
                  );
                }
                return <Route key={path} path={path} element={element} />;
              })}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CommonSuspense>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
