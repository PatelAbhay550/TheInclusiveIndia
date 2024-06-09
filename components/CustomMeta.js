import { useEffect, useState } from "react";

export default function CustomMeta({ title, description }) {
  const [documentTitle, setDocumentTitle] = useState(null);

  useEffect(() => {
    // Set document title on component mount and title prop change
    setDocumentTitle(title);
  }, [title]);

  const generateMetaTags = () => {
    const metaElements = [];
    if (title) {
      metaElements.push(
        <meta key="title" property="og:title" content={title} />
      );
    }
    if (description) {
      metaElements.push(
        <meta
          key="description"
          property="og:description"
          content={description}
        />
      );
    }
    // You can add other meta tags here as needed (e.g., `twitter:card`, etc.)
    return metaElements;
  };

  return (
    <>
      {/* Set document title using useEffect for side effects */}
      {documentTitle && <title>{documentTitle}</title>}
      {/* Render generated meta tags */}
      {generateMetaTags()}
    </>
  );
}
