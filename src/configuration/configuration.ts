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

    }
})