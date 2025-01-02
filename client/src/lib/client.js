import sanityClient from "@sanity/client";


export const client=sanityClient({
    projectId: "2ss3ty7r",
    dataset: "production",
    apiVersion: "2024-03-09",
    useCdn:true,
});  