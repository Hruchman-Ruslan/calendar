import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../shared";

export const Layout = () => {
  return (
    <Container>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
