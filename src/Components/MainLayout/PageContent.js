import classes from "./PageContent.module.css";

function PageContent({ children }) {
  return <div className={classes.PageContent}>{children}</div>;
}

export default PageContent;
