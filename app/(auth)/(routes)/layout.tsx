import { ReactNode } from "react";

const AuthPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  );
};

export default AuthPage;
