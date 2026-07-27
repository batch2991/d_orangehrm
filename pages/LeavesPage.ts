import { Base } from "./BasePage";


export class LeavePage extends Base
{
    async applyleave()
    {
        const leaveType = await this.page.$('#applyleave_txtLeaveType');
    }
}
