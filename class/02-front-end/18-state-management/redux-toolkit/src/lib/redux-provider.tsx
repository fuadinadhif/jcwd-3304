"use client";

// Wrapper. Komponen pembungkus yang akan membungkus semua komponen kita yang membutuhkan state dari Redux
/*
<html>
<head></head>
<body>
  <ReduxProvider>
    <main>
      <Component1/>
      <Component2/>
    </main>
  </ReduxProvider>
</body>
</html>
*/

import { Provider } from "react-redux";
import { store } from "./redux-store";
import React from "react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
