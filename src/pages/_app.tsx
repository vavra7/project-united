import App from 'next/app';
import { ReactElement } from 'react';

interface AppProps {}

class ProjectUnitedApp extends App<AppProps> {
  public render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default ProjectUnitedApp;
