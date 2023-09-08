export default () => ({
    app: {
        port: parseInt(process.env.PORT, 10) || 8000,
        name: "dns-admin"
    },
    database:{
        pg:{
            host:process.env.DBPGHOST,
            port:process.env.DBPGPORT,
            pass:process.env.DBPGPASS,
            db:process.env.DBPGDB,
            user:process.env.DBPGUSER
        }
    },
    porkbun:{
        create:process.env.PCREATE,
        edit:process.env.PEDIT,
        delete:process.env.PDELETE,
        retrieve:process.env.PRETRIEVE,
        auth:process.env.PAUTH,
        api:process.env.API_KEY,
        secret:process.env.SECRET_KEY,
        domain:process.env.DOMAIN

    }
})