import Head from "next/head";
import { FC, ReactElement } from "react";
import HeaderComponent from "./common/Header/Header.component";

type LayoutProps = {
  children?: ReactElement;
  title?: string;
  tags?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  title,
  tags,
  description,
  imageUrl,
  url,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "allergeat"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="allergeat" />
        <meta name="description" content={description || "allergeat"} />
        <meta name="keywords" content={tags || "allergeat,"} />
        <meta name="subtitle" content="allergeat" />

        <meta name="fb:page_id" content="fb id" />
        <meta name="og:title" content={title || "allergeat"} />
        <meta name="og:type" content="admin" />
        <meta name="og:url" content={url || "https://allergeat.com/"} />
        <meta
          property="og:image"
          content={imageUrl || "/assets/img/share_Banner.png"}
        />
        <meta name="og:site_name" content="boilerplate" />
        <meta name="og:description" content={description || "allergeat"} />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/img/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/img/favicon.png"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <>
        <HeaderComponent />
        {children}
      </>
    </>
  );
};

export default Layout;
