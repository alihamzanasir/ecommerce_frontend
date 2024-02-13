export const withAuthentication = (
  WrappedComponent: React.ComponentType<any>,
) => {
  return (props: any) => {
    return <WrappedComponent {...props} />;
  };
};
