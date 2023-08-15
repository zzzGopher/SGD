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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWRhcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3NlbmRncmlkYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUc7SUFDdEIsRUFBRSxFQUFFLHVCQUF1QjtJQUMzQixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLHlEQUF5RDtDQUMvRCxDQUFDO0FBRUYsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLENBQUMsT0FBZ0M7SUFDL0QsSUFBSTtRQUNILE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDM0I7QUFDRixDQUFDO0FBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDIn0=