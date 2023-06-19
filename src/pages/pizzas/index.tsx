import {ParsedUrlQuery} from "querystring";

export default function Home() {
    return <h1>Catalog</h1>;
}

interface Params extends ParsedUrlQuery {
    slug: string;
}

export const getServerSideProps = async ({ res }: Params) => {
    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    };
};
