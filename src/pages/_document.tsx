import { Html, Head, Main, NextScript } from "next/document";
import {
    DocumentHeadTags,
    documentGetInitialProps,
    DocumentHeadTagsProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { DocumentProps } from "next/document";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
    return (
        <Html lang="en">
            <Head>
                <DocumentHeadTags {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

Document.getInitialProps = async (ctx: any) => {
    const finalProps = await documentGetInitialProps(ctx);
    finalProps.styles = (
        <>
            {finalProps.styles}
            <style>{`
                body{
                    margin: 0;
                    padding: 0;
                
                }
                #__next {
                    display: flex;
                    margin: 0;
                    padding: 0;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
    return finalProps;
};
