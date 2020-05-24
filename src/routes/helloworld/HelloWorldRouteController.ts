import { AbstractRouteController } from "@src/routes/AbstractRouteController"
import { Response, Request } from 'express'
import { HelloWorld } from "@src/serviceclasses/helloworld/HelloWorld";
import { StatusConstants } from "@src/constants/StatusConstants";

export class HelloWorldRouteController extends AbstractRouteController {

    constructor(link: string) {
        super();
        this.path = '/helloworld';
        this.InitializeController(link);
    }

    public async runService(req: Request, resp: Response): Promise<any> {

        let response = await HelloWorld.wishHello()
        resp.status(StatusConstants.code200).send(response)

    }
}