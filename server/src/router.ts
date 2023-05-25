export default (app: any) => {

    app.get('/', (req: any, res: any) => {
        res.send({ success: true })
    })
}
