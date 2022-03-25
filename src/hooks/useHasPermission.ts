import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const useHasPermission = (pagePermission: string[]) => {
  const router = useRouter();
  const permissions = useSelector((state: any) => state.auth.permissions);
  const hasPerm = pagePermission.some((permission: string) =>
    permissions.includes(permission)
  );

  if (permissions.length && !hasPerm) return router.push('/');
};

export default useHasPermission;
