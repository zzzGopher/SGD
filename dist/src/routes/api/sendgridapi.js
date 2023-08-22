import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';
sgMail.setApiKey(SENDGRID_API_KEY);
export const testMSG = {
    to: 'gophermac90@yahoo.com',
    from: 'gophermac90@yahoo.com',
    subject: 'sendgrid test',
    text: 'this is the first test',
    html: '<strong>check</strong><br/><p>this shit out brother</p>'
};
export async function useSGmail(testMSG) {
    try {
        await sgMail.send(testMSG).then(() => console.log('message: sent'));
    }
    catch (error) {
        console.log(error.message);
    }
}
useSGmail(testMSG);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWRhcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVzL2FwaS9zZW5kZ3JpZGFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFbkMsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHO0lBQ3RCLEVBQUUsRUFBRSx1QkFBdUI7SUFDM0IsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixPQUFPLEVBQUUsZUFBZTtJQUN4QixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCLElBQUksRUFBRSx5REFBeUQ7Q0FDL0QsQ0FBQztBQUVGLE1BQU0sQ0FBQyxLQUFLLFVBQVUsU0FBUyxDQUFDLE9BQWdDO0lBQy9ELElBQUk7UUFDSCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNCO0FBQ0YsQ0FBQztBQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyJ9